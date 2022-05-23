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
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, voluptate eos accusamus adipisci sed repellendus eum magnam, ea quasi nisi, laboriosam similique dolorum exercitationem tenetur libero quae? Debitis, cumque. Asperiores dolorum earum pariatur at consequuntur saepe nostrum amet dignissimos non?</p>
                <button class="btn btn-primary uppercase  font-bold  mt-5 mb-7">Read More</button>
            </div>
        </div>
    );
};

export default Makeappo;