import React from 'react';
import { useQuery } from 'react-query';
import OrderRow from './OrderRow';

const ManageOrder = () => {
    const {data,isLoading,refetch}=useQuery( 'orders',()=>fetch('http://localhost:5000/order',{
        headers:{
             authorization: `Bearer ${localStorage.getItem('accesToken')}`
          }
    })

    .then(res => res.json())
    )
    if(isLoading){
        return <p>loading....</p>
    }
    return (
        <div>
             <div>
           {/*  <h2>Total Orders:  {data.length}</h2> */}
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
      
        <th>Id</th>
        <th>Clint Name</th>
        <th>Email</th>
        <th>Products Name</th>
        <th>Price</th>
        <th>Transaction Id</th>
        <th>Process</th>

        
      </tr>
    </thead>
    <tbody>
   
   
        {
            data.map((order,index)=> <OrderRow
            key={order._id}
            order={order}
            index={index}
            refetch={refetch}
            ></OrderRow> )
           
        }
   
    
    </tbody>
  </table>
</div>

        </div>
        </div>
    );
};

export default ManageOrder;