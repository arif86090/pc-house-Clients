import React from 'react';
import img from '../../images/arif.jpg'

const MyProtfolio = () => {

   
    return (
        <div className='px-5 mt-10'>
            <div className='lg:flex md:flex py-5 mt-3'> 
                <div className='flex-1 px-4'>
                    <h2 className='text-2xl py-3'>HELLO, MY NAME IS<span className='font-bold text-primary'> MD ARIF HOSSAIN</span></h2>
                    <h6 className='py-6'>I Have Been Designing And Developing Website For More Then 2 Years.i am a MERN strak we developar. It Will Be Responsive, Mobile-Friendly.If You Need To Build A Full Complete Website With More Functions And Unque Look For Your Service/Business/Protfolio, Please Contact Me</h6>
                    <p><span className='font-bold'>Name:</span>Md. Arif Hoassain</p>
                    <p><span className='font-bold py-2'>Address:</span>Dinajpur,Bangladesh</p>
                    <p><span className='font-bold '>Degree:</span>Honours 1st</p>
                    <p><span className='font-bold py-2'>Email:</span>aharif281@gmail.com</p>
                    <p><span className='font-bold'>Phone:</span>+8801762931601</p>
                </div>
                <div className='flex-1 px-4 py-5 mt-3'>
                    <img src={img} className='rounded-lg w-full'  alt="" />
                </div>
            </div>

            <div className='mt-5'>
                <h2 className='text-center font-bold py-5'>My Skills</h2>
                <div className='px-5 lg:px-20 '>

                    <div className='mt-19'>
                        <div className='flex justify-between'>
                        <p className='font-bold mt-7 pl-3 pb-2'>HTML</p>
                        <p className='font-bold mt-7 pr-3 pb-2'>99%</p>
                        </div>
                        <progress class="progress progress-success w-full h-4 " value="100" max="100"></progress>
                    </div>
                    <div>

                    <div className='flex justify-between'>
                        <p className='font-bold mt-7 pl-3 pb-2'>CSS</p>
                        <p className='font-bold mt-7 pr-3 pb-2'>90%</p>
                    </div>
                        
                        <progress class="progress progress-success w-full h-4 " value="90" max="100"></progress>
                    </div>
                    <div>
                    <div className='flex justify-between'>
                        <p className='font-bold mt-7 pl-3 pb-2'>BOOTSTRAP</p>
                        <p className='font-bold mt-7 pr-3 pb-2'>95%</p>
                    </div>
                      
                        <progress class="progress progress-success w-full h-4 " value="95" max="100"></progress>
                    </div>
                    <div>
                    <div className='flex justify-between'>
                        <p className='font-bold mt-7 pl-3 pb-2'>TELWIND CSS</p>
                        <p className='font-bold mt-7 pr-3 pb-2'>95%</p>
                    </div>
                      
                        <progress class="progress progress-success w-full h-4 " value="80" max="100"></progress>
                    </div>
                    <div>
                    <div className='flex justify-between'>
                        <p className='font-bold mt-7 pl-3 pb-2'>REACT JS</p>
                        <p className='font-bold mt-7 pr-3 pb-2'>70%</p>
                    </div>
                       
                        <progress class="progress progress-success  w-full h-4 " value="70" max="70"></progress>
                    </div>
                    <div>
                    <div className='flex justify-between'>
                        <p className='font-bold mt-7 pl-3 pb-2'>NODE JS</p>
                        <p className='font-bold mt-7 pr-3 pb-2'>75%</p>
                    </div>
                        
                        <progress class="progress progress-success  w-full h-4 " value="75" max="100"></progress>
                    </div>
                    <div>
                    <div className='flex justify-between'>
                        <p className='font-bold mt-7 pl-3 pb-2'>EXPRESS JS</p>
                        <p className='font-bold mt-7 pr-3 pb-2'>65%</p>
                    </div>
                        
                        <progress class="progress progress-success  w-full h-4" value="65" max="100"></progress>
                    </div>
                    <div>
                    <div className='flex justify-between'>
                        <p className='font-bold mt-7 pl-3 pb-2'>MONGO DB</p>
                        <p className='font-bold mt-7 pr-3 pb-2'>90%</p>
                    </div>
                       
                        <progress class="progress progress-success  w-full h-4 " value="90" max="100"></progress>
                    </div>
                </div>    
            </div>

        </div>
    );
};

export default MyProtfolio;