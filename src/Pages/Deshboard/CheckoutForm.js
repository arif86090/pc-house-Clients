import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useState } from 'react';

const CheckoutForm = ({order}) => {
    const stripe = useStripe();
  const elements = useElements();
  const [carderror,setCarderror]=useState('');
  const [success,setSuccess]=useState('');
  const [tranjection,settranjection]=useState('');
  const [clientSecret, setClientSecret] = useState('');
 
  const {_id,price,name,email}=order;
  
  useEffect(() => {
    
    fetch('http://localhost:5000/create-payment-intent', {
      method: "POST",

      headers:{
        'content-type':'application/json',
        authorization : `Bearer ${localStorage.getItem('accesToken')}`
       },
       body:JSON.stringify({price})
    
    })
      .then((res) => res.json())
      .then((data) => {
        if(data?.clientSecret){
          setClientSecret(data.clientSecret)
        }
      });
  }, [price]);

    const handleSubmit = async (event)  =>{
        event.preventDefault();
        if (!stripe || !elements) {
            return;
          }
        const card = elements.getElement(CardElement);

          if (card == null) {
            return;
          }
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log('[error]', error);
            setCarderror(error.message)
          } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCarderror('')
          }
          setSuccess('');
        // card payment
          const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name:name,
                  email:email
                },
              },
            },
          );
          if(intentError){
            setCarderror(intentError?.message)
            console.log('something is wrong')
           
          }
          else{
            setCarderror('')
            console.log(paymentIntent);
            settranjection(paymentIntent.id)
            console.log('success pay')
            setSuccess('Your payment is completed');

            const payment={
              appointment:_id,
              tranjectionId:paymentIntent.id

            }
            // update pay btn in backend
            fetch(`http://localhost:5000/myorder/${_id}`,{
              method:'PATCH',
              headers:{
                'content-type':'application/json'
              },
              body:JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => {
              console.log(data)
            })

          }

    }

    return (
        <>
        
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-success mt-5' type="submit" disabled={!stripe}>
          confirm Payment 
        </button>
      </form>
      {
          carderror && <p className='text-red-500'>{carderror}</p>
      }
      {
          success && <p className='text-green-500 mt-5'>{success}</p>
      }
       {
          success && <p className='text-green-500 fond-bold'>Your Transaction id:{tranjection}</p>
      }
      </>
    );
};

export default CheckoutForm;