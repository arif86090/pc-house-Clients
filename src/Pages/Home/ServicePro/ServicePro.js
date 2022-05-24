import React from 'react';
import t1 from '../../../images/pngwing.com (5).png'
import t2 from '../../../images/pngwing.com (6).png'
import t3 from '../../../images/pngwing.com (7).png'



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
                        <img src={t1} className='w-24 h-24' alt="" />
                    </figure>
                    <div class="card-body items-center ">
                        <h2 class="card-title text-center font-bold py-5">Best Office Equipment</h2>
                        <p>Modern-day office space has gotten various iterations in the form of a home office, Startup workspace, and so on. Tech products are a staple for home offices, startups, and regular offices. Star Tech delivers office equipment like laptops, desktops</p>
                        
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl mt-5">
                    <figure class="px-10 pt-10">
                        <img src={t2} className='w-24 h-24' alt="" />
                    </figure>
                    <div class="card-body items-center ">
                        <h2 class="card-title text-center font-bold py-5 ">Best Price Product </h2>
                        <p>PC-HOUSE has taken care of its customers since the beginning. No matter if someone is inquiring or purchasing; every customer wants to get  product with the best price. We deliver their desired products at the best price in the market for both online or physical stores. </p>
                        
                    </div>
                </div>
                <div class="card lg:max-w-lg  bg-base-100 shadow-xl mt-5">
                    <figure class="px-10 pt-10">
                        <img src={t3} className='w-24 h-24' alt="" />
                    </figure>
                    <div class="card-body items-center ">
                        <h2 class="card-title text-center font-bold py-5 ">Best PC component</h2>
                        <p>For any PC enthusiast out there; it is easy to get a custom PC with your chosen components from Star Tech. You can even Choose accessories as per your preference to garnish your PC. So it means you can choose the main components like the Processor (CPU), Monitor, Motherboard, Graphics Card, SSD, HDD etc.</p>
                        
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ServicePro;