import React, { useEffect, useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Shared/Spinner';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [confirmPassword, setconfirmPassword] = useState('');
    const [error1, setError1] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    useEffect(() => {
        const email = user?.user?.email;
        console.log('email', email);
        const currentUser = { email: email };
        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('login data', data);
            })
    }, [user?.user?.email]);

    const navigate = useNavigate();
    if (loading || updating) {
        return <>
            <div className='mt-20'></div>
            <Spinner></Spinner>
        </>
    }
    if (user) {
        // console.log('user', user);
        navigate('/');
    }

    // const handleSubmit = async data => {
    //     console.log('user', data);
    //     await createUserWithEmailAndPassword(data.email, data.password);
    //     console.log('here');
    //     await updateProfile({ displayName: data.name });
    //     console.log('here1');
    // };
    const getEmail = event => {
        setEmail(event.target.value);
    }
    const getPassword = event => {
        setPassword(event.target.value);
    }
    const getConfirmPassword = event => {
        setconfirmPassword(event.target.value);
    }
    const handleSubmit = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError1("Your two passwords didn't match!");
            console.log(error);
            return;
        }
        if (password.length < 6) {
            setError1("Password must be 6 characters or longer!");
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    let signInError;
    if (error || updateError || error1) {
        signInError = <p className='text-red-500 font-medium text-center'>{error?.message || updateError?.message || error1}</p>
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 text-[#383841] '>
                <div className='w-full md:w-3/4 lg:w-1/2 mx-auto p-4 bg-gray-50 shadow rounded'>
                    <p className='font-semibold text-2xl lg:text-3xl mb-3 tracking-wide text-center pt-3'>Sign Up to TextApps</p>
                    <hr className='w-11/12 md:w-3/4 lg:w-1/2 mx-auto mb-8' />
                    <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center '>
                        <input className='border rounded-lg w-72 md:w-80 lg:w-96 h-14 pl-4 focus:outline-none bg-gray-100 mb-3' type="text" placeholder='Name' required />
                        <input onBlur={getEmail} className='border rounded-lg w-72 md:w-80 lg:w-96 h-14 pl-4 focus:outline-none bg-gray-100 mb-3' type="email" placeholder='Email' required />
                        <input onBlur={getPassword} className='border rounded-lg w-72 md:w-80 lg:w-96 h-14 pl-4 focus:outline-none bg-gray-100 mb-5' type="password" placeholder='Password' required />
                        <input onBlur={getConfirmPassword} className='border rounded-lg w-72 md:w-80 lg:w-96 h-14 pl-4 focus:outline-none bg-gray-100 mb-5' type="password" placeholder='Confirm Password' required />
                        {/* {error1} */}
                        {signInError}
                        <button className='w-72 md:w-80 lg:w-96 mx-auto font-medium text-xl tracking-wide rounded-lg text-stone-100 transition-foc duration-500 ease-in-out bg-purple-500 hover:bg-purple-600 p-2 mb-5' type='submit'>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;