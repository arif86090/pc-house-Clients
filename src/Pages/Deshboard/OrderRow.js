import React from 'react';

const OrderRow = ({index,order,refetch}) => {


    const deleteOrder = (id) =>{
        const proceed=window.confirm('Are you sure you want to Delete');
        if(proceed){
            console.log('id=',id)
            const url=`https://pacific-ocean-13112.herokuapp.com/myorder/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })
        }
      }
     const  confirmPayment = id =>{
         
        fetch(`https://pacific-ocean-13112.herokuapp.com/updatePayment/${id}`,{
            method:'PATCH',
            headers:{
              'content-type':'application/json'
            }
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            alert('payment approved')
            refetch();
          })
     }

    const {_id,name,email,productName,price,paid,paymentid, approved}=order;

    return (
        <tr>
        <td>{index +1}</td>
         <td>{name}</td>
         <td>{email}</td>
         <td>{productName}</td>
         <td>{price}</td>
         <th>
               {(paymentid) && (paymentid)}
               {(!paymentid) && ('unpaid')}
               </th>
         <td >

         {(price && !paid) && <span className='text-red-400'>Unpaid</span>}   
         {(price && paid &&  approved) && <span className='text-success'>paid</span>}
         {(price && paid && !approved) && <button
            className='ml-3 btn btn-xs btn-sky-400'
            onClick={()=>confirmPayment(_id)}
         >Confirm payment</button>}

         {(price && !paid) && <button
            className='ml-3 btn btn-xs btn-error'
            onClick={()=>deleteOrder(_id)}
         >Delete Order</button>}

        </td>

        </tr>
    );
};

export default OrderRow;