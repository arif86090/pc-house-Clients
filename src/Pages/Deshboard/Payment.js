
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1SOQLuxFo5xZT5P0Lu5IuIUnSyD5wRGbFEDKAdEzqwL8HOut6xpoompikYFIcrP9l6GfCAEvpGv7fWOlEWO9l900ga88W5NY');

const Payment = () => {

    const {id}=useParams();

    const {data:order ,isLoading,refetch}=useQuery(['payments',id],()=>fetch(`http://localhost:5000/myorder/${id}`,{
        method:'GET',
        headers:{
            authorization : `Bearer ${localStorage.getItem('accesToken')}`
           }
    })
    .then(res => res.json())
    )
    if(isLoading){
        return <p>loading....</p>
    }
    return (
        <div>
            id={id}
            
           <div  class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
            <h2>Please pay for your product!</h2>
            <p><span className='text-primary font-bold'>Product Name:</span>{order.productName}</p>
            <p><span className='text-primary font-bold'>Quantity:</span>{order.quantity}</p>
            <p><span className='text-primary font-bold'>Total Price:</span>{order.price}</p>
            </div>
            </div>

             <div>
            <div class="card w-96 bg-base-100 shadow-2xl mt-10 py-5">
                <div class="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order}></CheckoutForm>
                </Elements>
                </div>
             </div>
               
            </div> 
        </div>
    );
};

export default Payment;