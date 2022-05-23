import React from 'react';
import { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import Service from './Service';

const Appointment = () => {
    // const [date,setDate]=useState(new Date());
    const [date,SetDate]=useState(new Date());
    
    return (
        <div>
            <AppointmentBanner date={date} setdate={SetDate}></AppointmentBanner>
            <Service date={date}></Service>

            
        </div>
    );
};

export default Appointment;