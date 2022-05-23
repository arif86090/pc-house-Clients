import { format } from 'date-fns';
import React from 'react';
// import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCrard from './ServiceCrard';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';

const Service = ({date}) => {
    // const[services,setService]=useState([]);
    const [treatment,setTreatment]=useState(null);
   
    const formettdate=format(date,'PP');
    const {data:services ,isLoading,refetch}=useQuery(['available',formettdate],()=>fetch(`http://localhost:5000/available?date=${formettdate}`)
    .then(res => res.json())
    )
    if(isLoading){
        return <p>loading....</p>
    }


/*     useEffect(()=>{
        fetch(`http://localhost:5000/available?date=${formettdate}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[formettdate]) */
    // service
    return (
        <div>
           <h4 className='text-center font-bold text-secondary py-10 mb-10'>Available Appointments on {format(date,'PP')} </h4>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    services?.map(service => <ServiceCrard
                    key={Service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></ServiceCrard> )
                }
            </div>
            {treatment && <BookingModal 
            treatment={treatment}
            date={date}
            setTreatment={setTreatment}
            refetch={refetch}
            ></BookingModal> }
        </div>
    );
};

export default Service;