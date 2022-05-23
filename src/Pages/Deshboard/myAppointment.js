import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
// import { useQuery } from 'react-query';
import auth from '../../firebase.init';

const MyAppointment = () => {

    const[user]=useAuthState(auth);
    const userEmail=user?.email;

    const [appointments,setAppoinments]=useState([]);
    const naviget=useNavigate();

 /*    useEffect(()=>{
        fetch(`http://localhost:5000/booking?patient=${userEmail}`)
        .then(res => res.json())
        .then(data => setAppoinments(data))
    },[user]) */ 

    useEffect(() => {
      const getAppointment= async () => {
          
          const url=`http://localhost:5000/booking?patient=${userEmail}`;
        try{
          const {data}=await axios.get(url,{
              headers:{
               authorization : `Bearer ${localStorage.getItem('accesToken')}`
              }
          });
          setAppoinments(data)
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

  /*   const {data,isLoading,refetch}=useQuery(['booking',user],()=>fetch(`http://localhost:5000/booking?patient=${userEmail}`)
    .then(res => res.json())
    )
    if(isLoading){
        return <p>loading....</p>
    } */




    return (
        <div>
           <h2>Your Appointment: {appointments.length}</h2>
           <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Date</th>
        <th>Treatment</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
        {
            appointments.map((d,index)=>
             <tr>
                <th>{index +1}</th>
                <td>{d.passentName}</td>
                <td>{d.date}</td>
                <td>{d.treatmenName}</td>
                <td>{d.slot}</td>
              </tr>
                )
        }
    
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;