import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    if (gUser) {
        navigate('/');
    }
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (gLoading || loading) {
        return <>
            <div className='mt-20'>
            </div>
            <Spinner></Spinner>
        </>
    }
    let signInError;
    if (error || gError) {
        signInError = <p className='text-red-500 font-medium text-center'>{error?.message || gError?.message}</p>
    }
    const handleSubmit = data => {
        console.log('user', data);
        signInWithEmailAndPassword(data.email, data.password);
        navigate('/');
    };
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 text-[#383841] '>
                <div className='w-full md:w-3/4 lg:w-1/2 mx-auto p-4 bg-gray-50 shadow rounded'>
                    <p className='font-semibold text-2xl lg:text-3xl mb-3 tracking-wide text-center pt-3'>Log in to TextApps</p>
                    <hr className='w-11/12 md:w-3/4 lg:w-1/2 mx-auto mb-4' />
                    <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center '>
                        <div onClick={() => signInWithGoogle()} className='flex items-center justify-center space-x-4 my-5 w-full md:w-80 lg:w-96 h-14 bg-stone-100 hover:bg-stone-200 rounded-lg hover:cursor-pointer'>
                            <FcGoogle className='w-8 h-8'></FcGoogle>
                            <p className='font-medium text-xl'>Continue With Google</p>
                        </div>
                        <p className='text-lg font-medium mb-5'>OR</p>
                        <input className='border rounded-lg w-72 md:w-80 lg:w-96 h-14 pl-4 focus:outline-none bg-gray-100 mb-3' type="email" placeholder='Email' required />
                        <input className='border rounded-lg w-72 md:w-80 lg:w-96 h-14 pl-4 focus:outline-none bg-gray-100 mb-5' type="password" placeholder='Password' required />
                        {signInError}
                        <button className='w-72 md:w-80 lg:w-96 mx-auto font-medium text-xl tracking-wide rounded-lg text-stone-100 transition-foc duration-500 ease-in-out bg-purple-500 hover:bg-purple-600 p-2 mb-5' type='submit'>Log In</button>
                        <Link to='/signup'>
                            <div className='text-lg underline'>
                                Create An Account
                            </div>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;