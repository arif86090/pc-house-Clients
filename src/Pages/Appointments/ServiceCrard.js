import React from 'react';

const ServiceCrard = ({service,setTreatment}) => {
    const{name,slots}=service;
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl text-center">
                <div class="card-body">
                    <h2 className="font-bold text-secondary text-center py-4 text-2xl">{name}</h2>
                    <p>{
                        slots.length 
                        ?<span>{slots[0]}</span>
                        :
                        <span className='text-red-700'>No Slot Abailable</span>
                        }
                    </p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Abailable</p>
                    <div class="text-center">

                    <label for='booking-modal'
                     class="btn btn-primary mt-4 text-white" 
                     disabled={slots.length===0}
                     onClick={()=>setTreatment(service)}
                     >BOOK APPOINTMENT</label>


                    </div>
                </div>
             </div>
        </div>
    );
};

export default ServiceCrard;