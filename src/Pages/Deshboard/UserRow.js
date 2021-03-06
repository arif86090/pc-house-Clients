import React from 'react';

const UserRow = ({user,refetch}) => {
    const {email}=user;
    const makeAdmin =()=>{

        fetch(`https://pacific-ocean-13112.herokuapp.com/user/admin/${email}`,{
        method:'PUT',
        headers:{
            authorization : `Bearer ${localStorage.getItem('accesToken')}`
           }
        })
        .then(res => {
            if(res.status===403){
                alert('failed to make admin');
            }
            return res.json()
        })
        .then(data =>{
            if(data.modifiedCount > 0){
                refetch()
                alert('successful made an admin');
                console.log(data)
            }
          
        })
      }
    return (
        <tr>
            
               
                <td>{user.email}</td>
                <td>
                  {user.role !== 'admin' && 
                  <button className='btn btn-primary'
                  onClick={makeAdmin}
                  >Make Admin</button>
                  }
                  {
                      user.role === 'admin' && <p className='font-bold text-success'>Admin</p>
                  }
                  </td>
                
               
             
        </tr>
    );
};

export default UserRow;