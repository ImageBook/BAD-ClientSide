import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';
import { FaUserCircle } from 'react-icons/fa';
import ServiceContact from '../Services/ServiceContact';
import ServiceFooter from '../Services/ServiceFooter';

const IndividualBlog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [id]);

    const { email, title, img, content } = blog;
    console.log('blog image', img);

    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10 text-[#383841]'>
                <p className='w-full md:w-1/2 mx-auto text-left font-bold leading-none text-[40px] lg:text-[52px] mb-6'>{title}</p>
                <div className='w-full md:w-1/2 mx-auto mb-8'>
                    <div className='flex space-x-3 items-center'>
                        <FaUserCircle className='w-12 h-12 text-gray-400'></FaUserCircle>
                        <p className='text-xl pr-8'>{email}</p>
                    </div>
                </div>
                <div className='flex justify-center mb-8'>
                    <img className='rounded-lg w-full' src={img} alt="" />
                </div>
                <div className='w-full md:w-1/2 mx-auto text-lg lg:text-xl'>
                    <p className='text-lg lg:text-xl'>{content}</p>
                </div>
            </div>
            <ServiceContact></ServiceContact>
            <ServiceFooter></ServiceFooter>
        </div>
    );
};

export default IndividualBlog;