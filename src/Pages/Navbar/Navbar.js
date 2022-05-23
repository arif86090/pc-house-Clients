import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

  const [user] = useAuthState(auth);
  const logout = () =>{
    signOut(auth);
    localStorage.removeItem('accesToken')
  };

    const menuItems= <> 
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/blog'>Blogs</NavLink></li>
        <li><NavLink to='/myportfolio'>My Portfolio</NavLink></li>
        {
          user?
          <li><NavLink to='/deshboard'>Deshboard</NavLink></li>
          :
          ''
        }
        <li>{user ? 
        <button className='byn btn-ghost' onClick={logout}>Sign Out</button>
        :
        <Link to='/login'>Login</Link>
        }</li>



    
    </>
    return (
        <div>
           <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {menuItems}
      </ul> 
    </div>
    <a  className="btn btn-ghost normal-case text-xl font-bold"><Link to='/'>PC-<span className='text-primary'>HOUSE</span></Link></a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      {menuItems}
    </ul>
  </div>
  <div className='navbar-end lg:hidden'>
      <label for="my-drawer-2" tabindex="1" class="btn btn-ghost drawer-button  lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </label>
  </div>
</div>
        </div>
    );
};

export default Navbar;