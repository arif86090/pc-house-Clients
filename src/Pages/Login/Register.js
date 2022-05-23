import React from 'react';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import {useSignInWithGoogle, useCreateUserWithEmailAndPassword,useUpdateProfile} from 'react-firebase-hooks/auth';
import { Link,useNavigate } from 'react-router-dom';
import UserHook from '../Hook/UserHook';


const Register = () => {

    
    const [signInWithGoogle, guser, gloading, gerror] =useSignInWithGoogle(auth)
   
    const [ createUserWithEmailAndPassword,user,error,loading]= useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const [updateProfile] = useUpdateProfile(auth);
   
    const naviget=useNavigate();

      let signinError;

      if(gerror || error){
        signinError= <p className='text-red-500 py-2'>{error?.message || gerror?.message}</p>
      }
      
      const[token]=UserHook(user || guser);
      if(token){
        naviget('/');
      }
     

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit =async data => {
        
      await createUserWithEmailAndPassword(data.email,data.password);
       await updateProfile({ displayName:data.name});
    //    naviget('/appointment');
        console.log(data);
 
    }



    return (
        <div>
           <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center">Sign up</h2>
                  
                        <form onSubmit={handleSubmit(onSubmit)}>

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
                            <label className="label"><span class="label-text">Email</span></label>
                            <input type="email" 
                            class="input input-bordered w-full max-w-xs" 
                            {...register("email", {
                                required:{
                                    value:true,
                                    message:'Email is required'
                                },
                               pattern:{
                                   value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                   message:'provide vaild Email '
                               }
                              })}
                            />
                             <label class="label">
                             {errors.email?.type === 'required' &&  <span className="label-text-alt  text-red-500">{errors.email.message}</span> }
                             {errors.email?.type === 'pattern' &&  <span className="label-text-alt  text-red-500">{errors.email.message}</span> }
                                
                             </label>
                        </div>
                       
                        <div class="form-control w-full max-w-xs">
                            <label className="label"><span class="label-text">Password</span></label>
                            <input type="password" 
                            class="input input-bordered w-full max-w-xs" 
                            {...register("password", {
                                required:{
                                    value:true,
                                    message:'Password is required'
                                },
                               minLength:{
                                   value:6,
                                   message:'Must be 6 characters or longer'
                               }
                              })}
                            />
                             <label class="label">
                             {errors.password?.type === 'required' &&  <span className="label-text-alt  text-red-500">{errors.password.message}</span> }
                             {errors.password?.type === 'minLength' &&  <span className="label-text-alt  text-red-500">{errors.password.message}</span> }
                                
                             </label>
                        </div>



                            {signinError}
                         <input
                        className={`btn w-full max-w-xs text-white ${loading ?
                         'loading' : ''}`}
                          type="submit"
                         value={` ${loading ? 'Please Wait' : 'Sing Up'} `} />
                        </form>

                      

                        <p className='text-center py-2'><small>You have an account?<Link
                        className='text-primary font-bold '
                        to='/login'
                        >Login</Link> </small></p>
                    <div class="divider">OR</div>
                    <button onClick={()=>signInWithGoogle()}
                     className={`btn btn-outline ${gloading ? 'loading' : ''}`}>{gloading ? 'Loading' : 'Login with Google'}</button>
                  
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;