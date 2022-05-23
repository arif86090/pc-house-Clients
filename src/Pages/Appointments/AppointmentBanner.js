import React from 'react';
import banner from '../../images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';


const AppointmentBanner = ({date,setdate}) => {
    return (
        <div>
            <div class="hero  ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className="max-w-sm rounded-lg shadow-2xl w-full" alt=''/>
                    <div>
                        <DayPicker 
                         mode="single"
                         selected={date}
                         onSelect={setdate}
                        />
                    </div>
                </div>
             </div>
           
        </div>
    );
};

export default AppointmentBanner;