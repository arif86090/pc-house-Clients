import React from 'react';
import { useForm } from "react-hook-form";


const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
 
   

    const imageStorgeKey='e6e70189805d32212065840ca742ffd2';
    
    const onSubmit =async data => {
    
        const image=data.image[0];
        const formData=new FormData();
        formData.append('image',image);
        const url =`https://api.imgbb.com/1/upload?key=${imageStorgeKey}`
        fetch(url,{
            method:'POST',
            body:formData
        })
        .then(res => res.json())
        .then(result =>{
            if(result.success){
                const img=result.data.url;
                const product={
                    name:data.name,
                    minimum:data.minimum,
                    available:data.available,
                    descripation:data.descripation,
                    price:data.price,
                    img:img
                    
                }
                fetch('https://pacific-ocean-13112.herokuapp.com/products',{
                    method:'POST',
                    headers:{
                      'content-type':'application/json',
                       authorization: `Bearer ${localStorage.getItem('accesToken')}`
                    },
                    body:JSON.stringify(product)
                  })
                  .then(res => res.json())
                  .then(data => {
                    console.log('success',data);
                    alert('Product add successfully')
                   reset();
                  })
            }
           
        })
 
      
 
    }

    return (
        <div className='flex justify-center' >
            <div class="card w-96 bg-base-100 shadow-xl p-4">
                <div class="card-body">
                    
                <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-primary text-center mb-5'>Add your Products</h2>
<div class="form-control w-full max-w-xs">
    <label className="label"><span class="label-text">Product Name</span></label>
    <input type="text" 
    class="input input-bordered w-full max-w-xs" 
    {...register("name", {
        required:{
            value:true,
            message:'Name is required'
        }
      })}
    />
     <label class="label">
     {errors.name?.type === 'required' &&  <span className="label-text-alt  text-red-500">{errors.name.message}</span> }
     </label>
</div>
<div class="form-control w-full max-w-xs">
    <label className="label"><span class="label-text">Minimum Order</span></label>
    <input type="number" 
    class="input input-bordered w-full max-w-xs" 
    {...register("minimum", {
        required:{
            value:true,
            message:'minimum is required'
        }
      })}
    />
     <label class="label">
     {errors.minimum?.type === 'required' &&  <span className="label-text-alt  text-red-500">{errors.minimum.message}</span> }
     </label>
</div>
<div class="form-control w-full max-w-xs">
    <label className="label"><span class="label-text">Available Products</span></label>
    <input type="number" 
    class="input input-bordered w-full max-w-xs" 
    {...register("available", {
        required:{
            value:true,
            message:'available is required'
        }
      })}
    />
     <label class="label">
     {errors.available?.type === 'required' &&  <span className="label-text-alt  text-red-500">{errors.available.message}</span> }
     </label>
</div>
<div class="form-control w-full max-w-xs">
    <label className="label"><span class="label-text">Price Pear Peoduct</span></label>
    <input type="number" 
    class="input input-bordered w-full max-w-xs" 
    {...register("price", {
        required:{
            value:true,
            message:'available is required'
        }
      })}
    />
     <label class="label">
     {errors.price?.type === 'required' &&  <span className="label-text-alt  text-red-500">{errors.price.message}</span> }
     </label>
</div>
<div class="form-control w-full max-w-xs">
    <label className="label"><span class="label-text">Descripation</span></label>
    <textarea type="text" 
   className="textarea textarea-bordered w-full max-w-xs" placeholder="discripation"
    {...register("descripation", {
        required:{
            value:true,
            message:'descripation is required'
        }
      })}
    />
     <label class="label">
     {errors.descripation?.type === 'required' &&  <span className="label-text-alt  text-red-500">{errors.descripation.message}</span> }
     </label>
</div>

<div class="form-control w-full max-w-xs">
    <label className="label"><span class="label-text">Add img</span></label>
    <input type="file" 
    class="input input-bordered w-full max-w-xs" 
    {...register("image", {
        required:{
            value:true,
            message:'image is required'
        }
      })}
    />
     <label class="label">
     {errors.image?.type === 'required' &&  <span className="label-text-alt  text-red-500">{errors.image.message}</span> }
     </label>
</div>


  
<button type="submit" class="btn btn-active w-full"  value='Submit' >Submit</button>

</form>

                </div>
            </div>

        </div>
    );
};

export default AddDoctor;