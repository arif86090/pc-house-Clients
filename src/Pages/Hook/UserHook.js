
import { useEffect } from 'react';
import { useState } from 'react';

const UserHook = user => {
   const[token,setToken]=useState('');
   useEffect(()=>{
       const email=user?.user?.email;
       const currentUser={email:email};
       if(email){
        fetch(`http://localhost:5000/user/${email}`,{
            method:'PUT',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(currentUser)
          })
          .then(res =>res.json())
          .then(data =>{
              const accessToken=data.token;
              localStorage.setItem('accesToken',accessToken)
              setToken(accessToken);
              console.log('your data',data)
          })
       }
   },[user]);
   return[token];
};

export default UserHook;