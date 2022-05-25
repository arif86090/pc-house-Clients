import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import UserAdmin from '../Hook/UserAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Deshboard = () => {
    const [user]=useAuthState(auth);
    const [admin]=UserAdmin(user);
    console.log(admin);
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content text-center">
                  <h2 className='text-center font-bold  text-2xl py-5'>Deshboard</h2>
                  <Outlet></Outlet>
                   

                </div> 
                <div className="drawer-side ">
                    <label for="my-drawer-2" class="drawer-overlay"></label> 
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    <li><NavLink to='/deshboard'>My Profile</NavLink></li>
                   
                    {!admin &&  <>
                        <li className='mt-2'><NavLink to='/deshboard/myorder'>My Order</NavLink></li>
                        <li className='mt-2'><NavLink to='/deshboard/review'>Review</NavLink></li>
                    </>
                    }
                   
                    {admin &&  <>
                     <li className='mt-2'><NavLink to='/deshboard/add'>Add Product</NavLink></li>
                    <li><NavLink to='/deshboard/user'>All user</NavLink></li>
                    <li><NavLink to='/deshboard/manageProducts'>Manage Products</NavLink></li>
                    <li><NavLink to='/deshboard/manageOrder'>Manage Order</NavLink></li>
                    </>
                    }
                   
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default Deshboard;