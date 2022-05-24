import React from 'react';
import doctor from '../../../images/pngwing.com (4).png'
import bg from '../../../images/appointment.png'

const Makeappo = () => {
    const bgStyle={
        backgroundImage:`url(${bg})`,
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
         backgroundPosition:'center',
    }
    return (
        <div className=' mt-32 px-3 lg:flex justify-center items-center ' style={bgStyle}>
            <div className='flex-1'>
                <img className='' src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white'>
                <h4 className='text-primary font-bold'>ABOUT PC-HOUSE</h4>
                <h2 className='text-3xl py-4'>We Sell Brand Product</h2>
                <p>Desktop PCs are a vital part of any workspace or gaming setup. It does not matter if you are an entry-level, mid-level, or high-performance user. If you will be using your PC to run the resource-demanding apps consistently, then Desktop PC is the best solution. You can easily buy your desired Brand PC, Portable mini PC, All-In-One PC, Apple Mac mini or iMac PC, or any budget pc. You can get your new Intel Desktop PC, AMD Desktop PC, or custom Desktop PC very easily with the PC builder feature from our E-commerce website or any of our shops. </p>
                <button class="btn btn-primary uppercase  font-bold  mt-5 mb-7">Read More</button>
            </div>
        </div>
    );
};

export default Makeappo;