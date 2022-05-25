
import { useState } from 'react';
import { useEffect } from 'react';

const UserAdmin = (user) => {
    const [admin,setAdmin]=useState(false);
    const [adminLoading,setAdminLoading]=useState(true)
    useEffect(()=>{
        const email=user?.email;
        if(email){
            fetch(`https://pacific-ocean-13112.herokuapp.com/admin/${email}`,{
        method:'GET',
        headers:{
            'content-type':'application/json',
            authorization : `Bearer ${localStorage.getItem('accesToken')}`
           }
        })
        .then(res => res.json())
        .then(data =>{
           setAdmin(data.admin)
           setAdminLoading(false)
          
        })
        }
    },[user])
    return [admin,adminLoading]
};

export default UserAdmin;