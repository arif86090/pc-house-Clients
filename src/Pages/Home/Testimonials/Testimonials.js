import React, { useEffect, useState } from 'react';

import m1 from '../../../images/people1.png'
import m2 from '../../../images/people2.png'
import m3 from '../../../images/people3.png'
import ReviewCrd from './ReviewCrd/ReviewCrd';

const Testimonials = () => {

    const [reviews,setReviews]=useState([]);

    useEffect(() => {
        fetch('https://pacific-ocean-13112.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    

    return (
       <div className='py-5 px-5'>
            <div className='mt-16 py-8 mb-10'>
                <div >
                    <h4 className='font-bold text-primary text-center'>Testimonials</h4>
                    <h2 className='text-3xl text-center'>What our Clients say</h2>
                </div>
                {/* <div>
                    <img src={icon} className='w-48 lg:w-98' alt="" />
                    
                </div> */}
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 '>
                {
                  reviews.map(review => <ReviewCrd
                  key={review._id}
                  review={review}
                  ></ReviewCrd>)  
                }
            </div>
       </div>
    );
};

export default Testimonials;