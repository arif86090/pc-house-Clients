import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Inventoey = () => {

    const [user]=useAuthState(auth)
    const [perror,setpError]=useState('');
    const UserName=user?.displayName;
    const email=user?.email;
    const navigate=useNavigate();
   
    
    const { register, formState: { errors }, handleSubmit,reset } = useForm();

    const {id}=useParams();
    const {data:products,isLoading,refetch}=useQuery(['perProducts'],()=>fetch(`http://localhost:5000/products/${id}`)
    .then(res => res.json())
    )
    // const email=data.email;
    if(isLoading){
        return <p>loading....</p>
    }
    const {_id,name,img,minimum,available,price}=products;
    

    const onSubmit = async (data) => {

        const quantity=data.quantity;
        
         if(minimum < quantity &&  quantity < available ){   
        const availableQty=Number(available)-Number(quantity);

        const inputproductQunty = {
            id:_id,
            quantity:availableQty,
        }
        try{
            const {data} =await axios.put(`http://localhost:5000/updateQunty`,inputproductQunty);
            // alert('Update success');
          
        }catch(err){
            // alert('error')
        }

        const prices=quantity*price;

  
                const order={
                    email:email,
                    name:UserName,
                    address:data.address,
                    phone:data.phone,
                    quantity:quantity,
                    productName:name,
                    productId:_id,
                    price:prices
                    
                }


                fetch('http://localhost:5000/order',{
                    method:'POST',
                    headers:{
                      'content-type':'application/json',
                       authorization: `Bearer ${localStorage.getItem('accesToken')}`
                    },
                    body:JSON.stringify(order)
                  })
                  .then(res => res.json())
                  .then(data => {
                    console.log('success',data);
                    alert('Your Order  please pay !!')
                    navigate('/')
                   reset();
                  })
            
                }
               if(quantity < minimum){
                    // alert(`please minimum order ${minimum} piece`)
                    setpError(`please minimum order ${minimum} piece`)
                }
              if(available < quantity){
                    // alert('Product not availables')
                    setpError('Product not availables')
                }
    }



    return (
        <div>

            <div class="flex justify-center bg-base-200 rounded-md py-20 px-5">
              <div class=" lg:flex p-5 md:flex justify-center items-center  bg-base-100 ">
                     <div className='card lg:max-w-lg p-10 lg:flex-1'>
                     <img src={img} className='h-[170px] rounded-lg' alt="" />
                        <h2 className='font-bold py-5 text-1xl text-secondary'>{name}</h2>
                        <p><span className=' text-secondary font-bold'>Minimum Order:</span>{minimum} piece</p>
                        <p><span className=' text-secondary font-bold'>Available Product:</span>{available} piece</p>
                        <p><span className='text-secondary font-bold'>price: </span>{price} tk </p>
                    </div>  

                <div className='card lg:max-w-lg p-4 flex justify-center lg:flex-1'>
                <form onSubmit={handleSubmit(onSubmit)}>


<div class="form-control w-full max-w-xs">
    <input type="text"  disabled
    value={UserName || ''}
    className="input input-bordered w-full max-w-xs" />
</div>
<div class="form-control w-full max-w-xs mt-3 mb-3">
    <input type="text"  disabled
    value={email || ''}
    className="input input-bordered w-full max-w-xs" />
</div>

<div class="form-control w-full max-w-xs">
<input type="text" 
placeholder='Enter Your Address'
className="input input-bordered w-full max-w-xs" 
{...register("address", {
   required:{
       value:true,
       message:'address is required'
   }
 })}
/>
<label class="label">
{errors.address?.type === 'required' &&  <span className="label-text-alt  text-red-500">{errors.address.message}</span> }
</label>
</div>


<div class="form-control w-full max-w-xs">
<input type="text" 
placeholder='Enter Your Phone number'
class="input input-bordered w-full max-w-xs" 
{...register("phone", {
   required:{
       value:true,
       message:'Phone Number is required'
   }
 })}
/>
<label class="label">
{errors.phone?.type === 'required' &&  <span className="label-text-alt  text-red-500">{errors.phone.message}</span> }
</label>
</div>

<div class="form-control w-full max-w-xs">
<input type="number" 
placeholder='quantity'
class="input input-bordered w-full max-w-xs" 
{...register("quantity", {
   required:{
       value:true,
       message:'quantity is required'
   }
 })}
/>
<label class="label">
{errors.quantity?.type === 'required' &&  <span className="label-text-alt  text-red-500">{errors.quantity.message}</span> }
</label>
<label><span className="label-text-alt  text-red-500 pb-3">{perror}</span></label>
</div>


<button type="submit" class="btn btn-active "  value='Submit' >Confirm Order</button>

</form>
                </div>
              </div>
            </div>

         {/*    <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={img} className='h-[120px]' alt="" />
                        <h2 className='font-bold py-5 text-1xl text-primary'>{name}</h2>
                        <p><span className=' text-primary'>Minimum Order:</span>{minimum} piece</p>
                        <p><span className=' text-primary'>Available Product:</span>{available} piece</p>
                        <p><span className='text-primary'>price: </span>{price} tk </p>
                    </div>
                    <div className="card shadow-2xl bg-base-100">
                    <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>


<div class="form-control w-full max-w-xs">
    <input type="text"  disabled
    value={UserName || ''}
    className="input input-bordered w-full max-w-xs" />
</div>
<div class="form-control w-full max-w-xs mt-3 mb-3">
    <input type="text"  disabled
    value={email || ''}
    className="input input-bordered w-full max-w-xs" />
</div>

<div class="form-control w-full max-w-xs">
<input type="text" 
placeholder='Enter Your Address'
className="input input-bordered w-full max-w-xs" 
{...register("address", {
   required:{
       value:true,
       message:'address is required'
   }
 })}
/>
<label class="label">
{errors.address?.type === 'required' &&  <span className="label-text-alt  text-red-500">{errors.address.message}</span> }
</label>
</div>


<div class="form-control w-full max-w-xs">
<input type="text" 
placeholder='Enter Your Phone number'
class="input input-bordered w-full max-w-xs" 
{...register("phone", {
   required:{
       value:true,
       message:'Phone Number is required'
   }
 })}
/>
<label class="label">
{errors.phone?.type === 'required' &&  <span className="label-text-alt  text-red-500">{errors.phone.message}</span> }
</label>
</div>

<div class="form-control w-full max-w-xs">
<input type="number" 
placeholder='quantity'
class="input input-bordered w-full max-w-xs" 
{...register("quantity", {
   required:{
       value:true,
       message:'quantity is required'
   }
 })}
/>
<label class="label">
{errors.quantity?.type === 'required' &&  <span className="label-text-alt  text-red-500">{errors.quantity.message}</span> }
</label>
</div>


<button type="submit" class="btn btn-active w-full"  value='Submit' >Confirm Order</button>

</form>
                    </div>
                    </div>
                </div>
                </div>*/}
        </div>
    ); 
};

export default Inventoey;