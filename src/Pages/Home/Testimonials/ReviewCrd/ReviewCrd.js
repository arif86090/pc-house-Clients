import React from 'react';


const ReviewCrd = ({review}) => {
    const{name,img,text,address}=review;
    return (
        <div className='mt-6 shadow-xl  bg-base-200 p-4 rounded-lg'>
            <p className='italic'>"{text}"</p>
            <div className='flex items-center mt-5'>
                <div> 
                    <div class="avatar">
                        <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={img} alt={` reviews ${name} `}/>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <h2 className='font-bold text-secondary'>{name}</h2>
                    <p>{address}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCrd;