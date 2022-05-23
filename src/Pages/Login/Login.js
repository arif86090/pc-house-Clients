import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { useSendPasswordResetEmail,useSignInWithGoogle,useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UserHook from '../Hook/UserHook';


const Login = () => {

    const [signInWithGoogle, guser, gloading, gerror] =useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );

      const [token]=UserHook(user || guser)

      let signinError;

      if(gerror || error){
        signinError= <p className='text-red-500 py-2'>{error?.message || gerror?.message}</p>
      };


      const navigate =useNavigate();
     const location=useLocation();
     const from =location?.state?.from?.pathname || '/';


      if(token){
        navigate(from,{relace:true});
       
    }
   

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email,data.password);
       
    }

    const [forgetBtn,setForgetBtn]=useState(false);
    const[forgetPassword,setForgetPassword]=useState('');

    const sentForgetEmailBtn =()=>{
        if(forgetPassword){
        sendPasswordResetEmail(forgetPassword);
        alert('Check Your Email');
        }
        else{
            alert('Please Enter valid Email');
        }
    }


    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl z-0">
                <div class="card-body">
                    <h2 class="text-center">Login</h2>
                  
                        <form onSubmit={handleSubmit(onSubmit)}>

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
                     <p class="btn btn-link p-0 m-0" onClick={()=>setForgetBtn(!forgetBtn)} ><small>Forget Psasword</small></p>

                     <div className={`py-2 ${forgetBtn ? 'block' : 'hidden'}`} >
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Enter your Email</span>
                            </label>
                            <input type="text" onChange={(e)=>setForgetPassword(e.target.value)} placeholder="Email" class="input input-bordered w-full max-w-xs" />
                            <p className={`btn btn-outline mt-3 ${sending ? 'loading' : ''}`} onClick={sentForgetEmailBtn}>{sending ? 'sending' : 'send'}</p>
                              
                        </div>
                     </div>


                         {signinError}
                         <input
                        className={`btn w-full max-w-xs text-white ${loading ?
                         'loading' : ''}`}
                          type="submit"
                         value={` ${loading ? 'Please Wait' : 'Login'} `} />
                        </form>
                       
                        <p className='text-center py-2'><small>New to doctors-portal?<Link
                        className='text-primary '
                        to='/register'
                        >Create an account</Link> </small></p>

                         <div class="divider">OR</div>

                    <button onClick={()=>signInWithGoogle()}
                     className={`btn btn-outline ${gloading ? 'loading' : ''}`}>{gloading ? 'Loading' : 'Login with Google'}</button>
                  
                </div>
            </div>
        </div>
    );
};

export default Login;