
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { format } from 'date-fns';

const BookingModal = ({refetch,date,treatment,setTreatment}) => {

    const [user] = useAuthState(auth);
    const {_id,name,slots}=treatment;
   const formetdate=format(date,'PP')
    
    const handelfrom =(e)=>{
        e.preventDefault();
        setTreatment(null);
        refetch();

        const date=e.target.date.value;
        const slot=e.target.slot.value;
        const treatmentId=_id;
        const treatmenName=name;
        const passentEmail=user?.email;
        const passentName=user?.displayName;
        const passentPhone=e.target.phone.value;

        const Booking={treatmentId,treatmenName,date,slot,passentName,passentEmail,passentPhone}

        fetch('http://localhost:5000/booking',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(Booking)
          })
          .then(res => res.json())
          .then(data => {
              if(data.success){
                 alert(`Appointment is set, ${formetdate} at ${slot}`) 
                 e.target.reset();
              }
            else{
                alert(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
            }
           
          })

       

    }
    
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 class="font-bold text-lg text-center ">{name}</h3>
                            <form onSubmit={handelfrom}className='grid grid-cols-1 gap-5 justify-items-center mt-3'>
                            <input name='date' type="text"  disabled
                                value={format(date,'PP')}
                                class="input input-bordered w-full max-w-xs" />
                              
                                <select name='slot' class="select select-bordered w-full max-w-xs">
                                    {
                                        slots.map(slot =><option value={slot} >{slot}</option> )
                                    }
                                </select>
                                <input type="text"  disabled
                                value={user?.displayName || ''}
                                class="input input-bordered w-full max-w-xs" />
                                <input type="text"  disabled
                                 value={user?.email || ''}
                                class="input input-bordered w-full max-w-xs" />
                                <input type="text" placeholder="Phone Number" class="input input-bordered  
                                w-full max-w-xs"
                                name='phone' />
                                <input type="submit" value='Submit' placeholder="Type here" class="btn btn-secondary w-full max-w-xs" />

                            </form>
                        <div class="modal-action">
                        <label for="booking-modal" class="btn">Cancle</label>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default BookingModal;