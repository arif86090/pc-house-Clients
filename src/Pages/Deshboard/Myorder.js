import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate,Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Deleteorder from './Deleteorder';
// import { useQuery } from 'react-query';


const Myorder = () => {

    const[user]=useAuthState(auth);
    const userEmail=user?.email;

    const [veiworder,setveiwOrder]=useState([]);
    const [OrderDelete,SetOrderDelete]=useState(null);
    const naviget=useNavigate();


    useEffect(() => {
      const getAppointment= async () => {
          
          const url=`http://localhost:5000/myorder?email=${userEmail}`;
        try{
          const {data}=await axios.get(url,{
              headers:{
               authorization : `Bearer ${localStorage.getItem('accesToken')}`
              }
          });
          setveiwOrder(data)
        }
        catch(error){
          console.log(error.massage);
          if(error.response.status === 401 || error.response.status === 403){
              signOut(auth);
              naviget('/login')
          }
        }
      }
      getAppointment();
     
      
  },[user]);

  const deleteOrder = (id) =>{
    
   
        console.log('id=',id)
        const url=`http://localhost:5000/myorder/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
          if(data.deletedCount > 0){
              console.log('delete success full');
              const remaining= veiworder.filter(user => user._id !== id);
              setveiwOrder(remaining);
              SetOrderDelete(null)
          }
        })
    
  }

    return (
        <div>
        <h2 className='py-10 font-bold text-primary'>Your order: {veiworder.length}</h2>
        <div class="overflow-x-auto">
<table class="table w-full">
 <thead>
   <tr>
     <th>Id</th>
     <th>Name</th>
     <th>Product Name</th>
     <th>Quantity</th>
     <th>Price</th>
     <th>Transaction Id</th>
     <th>Process</th>
   </tr>
 </thead>
 <tbody>
     {
         veiworder.map((d,index)=>
          <tr>
             <th>{index +1}</th>
             <td>{d.name}</td>
             <td>{d.productName}</td>
             <td>{d.quantity}</td>
             <th>{d.price}</th>
             <th>
               {(d.paymentid) && (d.paymentid)}
               {(!d.paymentid) && ('unpaid')}
               </th>
             <td>
             
             {/* paymentid */}
                  {(d.price && !d.paid) && <Link to={`/deshboard/payment/${d._id}`}><button className='btn btn-primary'>pay</button></Link>}
                  {/* {(d.price && !d.paid) && <button
                   className='btn btn-red ml-3'
                   onClick={()=>deleteOrder(d._id)}
                   >Cancle Order</button>} */}

                    {(d.price && !d.paid) && <label for='delete-modal'
                   className='btn btn-red ml-3'
                   onClick={()=>SetOrderDelete(d)}
                   >Cancle Order</label>}

                   {(d.price && d.paid && !d.approved) && <span className='text-red-500 font-bold'>payment pending..</span>}

                  {(d.price && d.paid && d.approved) && <span className='text-success font-bold'>payment succes</span>}
                </td>
           </tr>
             )
     }
 
 
 </tbody>
</table>
</div>
    <div>
  
            {OrderDelete && <Deleteorder
            OrderDelete={OrderDelete}
            SetOrderDelete={SetOrderDelete}
            deleteOrder={deleteOrder}
            ></Deleteorder> }
  </div>


     </div>
    );
};

export default Myorder;