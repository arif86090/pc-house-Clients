import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products = ({product}) => {
    const naviget=useNavigate();
    const {_id,name,img,minimum,available,price}=product;
    const handelInventory = id =>{
        naviget(`/inventory/${id}`);
    }
    
    return (
        <div className='shadow-2xl  rounded-lg p-4 '>
            <img src={img} className='h-[220px] rounded-lg' alt="" />
            <h2 className='font-bold py-5 text-1xl text-secondary'>{name}</h2>
            <p><span className=' text-secondary font-bold'>Minimum Order:</span>{minimum} piece</p>
            <p><span className=' text-secondary font-bold'>Available Product:</span>{available} piece</p>
            <p><span className='text-secondary font-bold'>price: </span>{price} tk </p>

            <button className="btn btn-outline btn-secondary w-full mt-5"
            onClick={()=> handelInventory(_id)}
            >Order Now</button>
        </div>
    );
};

export default Products;