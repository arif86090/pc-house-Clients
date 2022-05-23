import React from 'react';

const DoctorRow = ({doctor,index,refetch}) => {

const{_id,name,available,img}=doctor;

const handelDelete = id =>{
    const proceed=window.confirm('Are you sure you want to Delete');
    if(proceed){
        console.log('id=',id)
        const url=`http://localhost:5000/products/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            refetch();
        })
    }
}

    return (
        
           <tr>
           <td>{index +1}</td>

            <td>
            <div class="avatar">
                <div class="w-8 rounded">
                    <img src={img} alt={name} />
                </div>
             </div>
            </td>
            <td>{name}</td>
            <td>{available}</td>
            <td ><button
             className='btn btn-xs btn-error'
             onClick={()=>handelDelete(_id)}
             >Delete</button></td>

           </tr>
       
    );
};

export default DoctorRow;