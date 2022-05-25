import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Myprofile = () => {
    
    const [user] = useAuthState(auth);
    const UserName=user?.displayName;
    const [myprofile,Setmyprofile]=useState([])
    const email=user?.email;
    const naviget=useNavigate();

    const {education, address, phone, linkedin}=myprofile;

    useEffect(() => {
    const getAppointment= async () => {
          
        const url=`https://pacific-ocean-13112.herokuapp.com/profiledata?email=${email}`;
      try{
        const {data}=await axios.get(url,{
            headers:{
             authorization : `Bearer ${localStorage.getItem('accesToken')}`
            }
        });
        console.log('all data',data)
        Setmyprofile(data)
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


    return (
        <div className='flex justify-center'>
        <div className="card w-96 bg-base-100 shadow-xl p-4">
            <div className="card-body">
            <h2 className='text-primary text-center mb-5'>My profile</h2>
            {
                myprofile.map(data => 
                    <div className='text-left'>
                    <h2><span className='font-bold'>Name:</span>{UserName}</h2>
                    <h5><span className='font-bold'>Email:</span>{email}</h5>
                    <p><span className='font-bold'>Education:</span>{data.education}</p>
                    <p><span className='font-bold'>Address:</span>{data.address}</p>
                    <p><span className='font-bold'>Phone Number:</span>{data.phone}</p>
                    <p><span className='font-bold'>Linkedin url:</span>{data.linkedin}</p>
                </div>

                )
            }
          
            <Link to='/deshboard/addprofile'><button className='btn btn-primary mt-5'>Update Profile</button></Link>
            </div>
           </div> 
       
  
        </div>
    );
};

export default Myprofile;