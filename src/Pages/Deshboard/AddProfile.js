import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddProfile = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const naviget=useNavigate()
    const [user] = useAuthState(auth);

    const email=user?.email;

    const onSubmit =async data => {
      
    
                const add={
                    education:data.education,
                    address:data.address,
                    phone:data.phone,
                    linkedin:data.linkedin
                    
                }
                fetch(`https://pacific-ocean-13112.herokuapp.com/profiledata/${email}`,{
                    method:'PUT',
                    headers:{
                      'content-type':'application/json',
                       authorization: `Bearer ${localStorage.getItem('accesToken')}`
                    },
                    body:JSON.stringify(add)
                  })
                  .then(res => res.json())
                  .then(data => {
                    console.log('success',data);
                    alert('Profile update successfully')
                    naviget('/deshboard')
                   reset();
                  })
            }

    return (

        <div className='flex justify-center' >
        <div class="card w-96 bg-base-100 shadow-xl p-4">
            <div class="card-body">
                
<form onSubmit={handleSubmit(onSubmit)}>

 <h2 className='text-primary text-center mb-5'>Update Your Profile</h2>

<div class="form-control w-full max-w-xs">
<label className="label"><span class="label-text">Education</span></label>
<input type="text" 
class="input input-bordered w-full max-w-xs" 
{...register("education", {
    required:{
        value:true,
        message:'Education is required'
    }
  })}
/>
 <label class="label">
 {errors.education?.type === 'required' &&  <span className="label-text-alt  text-red-500">{errors.education.message}</span> }
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
<label className="label"><span class="label-text">Phone Number</span></label>
<input type="number" 
className="input input-bordered w-full max-w-xs" 
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
<label className="label"><span class="label-text">Linkedin url</span></label>
<input type="text" 
class="input input-bordered w-full max-w-xs" 
{...register("linkedin", {
    required:{
        value:true,
        message:'linkedin is required'
    }
  })}
/>
 <label class="label">
 {errors.linkedin?.type === 'required' &&  <span className="label-text-alt  text-red-500">{errors.linkedin.message}</span> }
 </label>
</div>


<button type="submit" class="btn btn-active w-full"  value='Submit' >Submit</button>

</form>
            </div>
        </div>

    </div>
    );
};

export default AddProfile;