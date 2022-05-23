import React from 'react';
import review from '../../../icons/r.png'
import order from '../../../icons/o.png'
import clint from '../../../icons/c.png'

const ServicesDls = () => {
    return (
       <div className='mt-20 py-6 px-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>

<div class="card  lg:card-side shadow-xl   p-4">
    <figure><img src={clint} className='w-24' alt="Album"/></figure>
    <div class="card-body">
        <h2 class="card-title font-bold text-primary ">5000+</h2>
        <p>Happy Clints</p>
    </div>
 </div>
 
<div class="card lg:card-side shadow-xl p-3  ">
    <figure><img src={order} className='w-24 ' alt="Album"/></figure>
    <div class="card-body">
        <h2 class="card-title font-bold text-primary">100000+</h2>
        <p>Order Done</p>
    </div>
 </div>
 
<div class="card lg:card-side shadow-xl p-3  ">
    <figure><img src={review} className='w-28 ' alt="Album"/></figure>
    <div class="card-body">
        <h2 class="card-title font-bold text-primary">1450+</h2>
        <p>Clints Reviews</p>
    </div>
 </div>

</div>
       </div>
    );
};

export default ServicesDls;