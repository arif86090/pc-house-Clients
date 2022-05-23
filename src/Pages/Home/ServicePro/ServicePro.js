import React from 'react';
import t1 from '../../../images/cavity.png'
import t2 from '../../../images/fluoride.png'
import t3 from '../../../images/whitening.png'
import t4 from '../../../images/treatment.png'


const ServicePro = () => {
    return (
        <div className='py-6'>
            <div className='py-10 mt-10 text-center'>
                <p className='text-primary font-bold' >OUR SERVICE</p>
                <h2 className='text-2xl mt-2'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl mt-5">
                    <figure class="px-10 pt-10">
                        <img src={t1} alt="" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Cavity fillings</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl mt-5">
                    <figure class="px-10 pt-10">
                        <img src={t2} alt="" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Cavity fillings</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        
                    </div>
                </div>
                <div class="card lg:max-w-lg  bg-base-100 shadow-xl mt-5">
                    <figure class="px-10 pt-10">
                        <img src={t3} alt="" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Cavity fillings</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        
                    </div>
                </div>
            </div>

            <div className='py-7'>
                <div class="card lg:card-side mt-8">
                    <figure><img src={t4} className='w-full' alt="Album"/></figure>
                    <div class="card-body">
                        <h2 class="card-title">New album is released!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero eos sint excepturi iusto, perferendis quas tempora veniam totam repellendus eligendi.</p>
                        <button class="btn btn-primary w-2/6 ">Listen</button>
                      
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServicePro;