import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const MyReview = () => {
    const [user] = useAuthState(auth);
    const email=user?.email;
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
                const review={
                    email:email,
                    name:data.name,
                    address:data.address,
                    text:data.text,
                    img:img
                    
                }
                fetch('http://localhost:5000/review',{
                    method:'POST',
                    headers:{
                      'content-type':'application/json',
                       authorization: `Bearer ${localStorage.getItem('accesToken')}`
                    },
                    body:JSON.stringify(review)
                  })
                  .then(res => res.json())
                  .then(data => {
                    console.log('success',data);
                    alert('Your review add successfully')
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

     <h2 className='text-primary text-center mb-5'>Add your Review</h2>

<div class="form-control w-full max-w-xs">
    <label className="label"><span class="label-text">Name</span></label>
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
    <label className="label"><span class="label-text">Address</span></label>
    <input type="text" 
    class="input input-bordered w-full max-w-xs" 
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
    <label className="label"><span class="label-text">Descripation</span></label>
    <textarea type="text" 
   className="textarea textarea-bordered w-full max-w-xs" placeholder="discripation"
    {...register("text", {
        required:{
            value:true,
            message:'descripation is required'
        }
      })}
    />
     <label class="label">
     {errors.text?.type === 'required' &&  <span className="label-text-alt  text-red-500">{errors.text.message}</span> }
     </label>
</div>


<div class="form-control w-full max-w-xs">
    <label className="label"><span class="label-text">Add img</span></label>
    <input type="file" 
    className="input input-bordered w-full max-w-xs pt-2" 
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

export default MyReview;