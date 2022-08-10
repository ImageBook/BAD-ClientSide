import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner';
import useAdmin from './useAdmin';

const RequireAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user);
    console.log('isAdmin', admin);
    const location = useLocation();

    if (loading) {
        return <>
            <div className='mt-10'></div>
            <Spinner></Spinner>
        </>
    }
    if (!user || !admin) {
        signOut(auth);
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }

    return children;
};

export default RequireAdmin;