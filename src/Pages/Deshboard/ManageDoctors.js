
import React from 'react';
import { useQuery } from 'react-query';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const {data,isLoading,refetch}=useQuery('products',()=>fetch('http://localhost:5000/products',{
        headers:{
             authorization: `Bearer ${localStorage.getItem('accesToken')}`
          }
    })
    .then(res => res.json())
    )
    if(isLoading){
        return <p>loading....</p>
    }
    return (
        <div>
            <h2>All Products:  {data.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
      
        <th>Id</th>
        <th>Image</th>
        <th>Products Name</th>
        <th>Available Products</th>
        <th>Delete</th>

        
      </tr>
    </thead>
    <tbody>
   
        {
            data.map((doctor,index)=> <DoctorRow
            key={doctor._id}
            doctor={doctor}
            index={index}
            refetch={refetch}
            ></DoctorRow> )
           
        }
   
    
    </tbody>
  </table>
</div>

        </div>
    );
};

export default ManageDoctors;