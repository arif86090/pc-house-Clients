import React from 'react';
import { useQuery } from 'react-query';
import UserRow from './UserRow';
// import auth from '../../firebase.init';

const User = () => {

       const {data,isLoading,refetch}=useQuery(['booking'],()=>fetch('https://pacific-ocean-13112.herokuapp.com/user')
    .then(res => res.json())
    )
    // const email=data.email;
    if(isLoading){
        return <p>loading....</p>
    }

    return (
        <div>
                      <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
      
        <th>Email</th>
        <th>Admin</th>
       

        
      </tr>
    </thead>
    <tbody>
   
        {
            data.map((user)=> <UserRow
            key={user._id}
            user={user}
            refetch={refetch}
            ></UserRow> )
        }
   
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default User;