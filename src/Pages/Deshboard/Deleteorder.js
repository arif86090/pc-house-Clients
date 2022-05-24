import React from 'react';
import './d.css'

const Deleteorder = ({ OrderDelete,SetOrderDelete,deleteOrder}) => {
    return (
        <div className='deletemodal'>
           
             

              
                <input type="checkbox" id="delete-modal" className="modal-toggle " />
                <div className="modal z-50 modal-bottom sm:modal-middle">
                <div className="modal-box bg-primary ">
                    <h3 className="font-bold text-1xl">Are you sure you want to delete <span className='font-bold'>{OrderDelete.productName}</span></h3>
                   
                    <div className="modal-action">
                     <button className='btn btn-red-400 font-bold'
                     onClick={()=>deleteOrder(OrderDelete._id)}
                     >Delete</button>   
                    <label for="delete-modal" className="btn">Cancle!</label>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Deleteorder;