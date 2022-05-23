
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState,useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading'

import UserAdmin from './UserAdmin';

const RequierAdmin = ({children}) => {
    const [user,loading]=useAuthState(auth);
    const [admin,adminLoading]=UserAdmin(user);
    //  const [sendEmailVerification, sending] = useSendEmailVerification(
    //     auth
    //   );

    const location=useLocation();

    // const sentMail = () =>{
    //     sendEmailVerification();
    //     alert('check your Email')
    // }

    if(loading || adminLoading){
        return <Loading></Loading>
    }
    if(!user || !admin){
        signOut(auth);
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    // if(!user.emailVerified){
    //     return <div className='text-center py-5'>
    //         <h3 className='text-danger fw-bold'>Your Email Not Is Verified</h3>
    //         <h5>Please verify your Email</h5>
    //         <button className='sendMail' onClick={sentMail}>Send Email</button>
    //     </div>
    // }
    return children;
        
    
};

export default RequierAdmin;