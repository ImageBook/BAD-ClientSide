import React from 'react';
import blogImg from '../../images/blog image.png';
import './FutureBlogs.css';

const FeaturedBlog = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10'>
            <div className='relative'>
                <img className='h-[511px] object-cover rounded-xl' src={blogImg} alt="" />
                <div className='absolute top-6 md:top-10 left-4 md:left-10 w-1/2'>
                    <p className='text-white font-semibold tracking-wide md:text-lg'>Featured Article</p>
                </div>  
                <div className='absolute top-24 md:top-32 lg:top-44 left-4 md:left-10 w-1/2 space-y-2'>
                    <p className='text-white font-semibold text-lg md:text-4xl'>How Much Your App Is Worth?</p>
                    <p className='text-white md:text-lg'>Learn how to gauge the value of an app on today's market! How are apps valued? Both an app's time-on-the-market and its overall userbase share a…</p>
                </div>
                <div className='absolute bottom-10 left-4 md:left-10 w-1/2'>
                    <p className='text-gray-400 tracking-wide hover:text-purple-700 font-semibold'>#strategy</p>
                </div>
            </div>
            <div className='mt-10 flex flex-col lg:flex-row gap-4 lg:gap-0 flex-wrap items-start justify-evenly lg:justify-between'>
                <div className='w-full md:w-1/2 lg:w-1/4 text-center text-[#383841]'>
                    <p className='text-lg lg:text-[19px] font-semibold '>How to reserve an App Name</p>
                    <p className='text-lg lg:text-[19px] font-semibold '></p>
                    <p className='font-semibold text-gray-400'>#strategy</p>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/4 text-center text-[#383841]'>
                    <p className='text-lg lg:text-[19px] font-semibold '>How to Analyze User Feedback</p>
                    <p className='text-lg lg:text-[19px] font-semibold '></p>
                    <p className='font-semibold text-gray-400'>#strategy</p>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/4 text-center text-[#383841]'>
                    <p className='text-lg lg:text-[19px] font-semibold '>How to Solve Problems With Innovative Apps</p>
                    <p className='text-lg lg:text-[19px] font-semibold '></p>
                    <p className='font-semibold text-gray-400'>#strategy</p>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/4 text-center text-[#383841]'>
                    <p className='text-lg lg:text-[19px] font-semibold '>Top App Development Comopanies</p>
                    <p className='text-lg lg:text-[19px] font-semibold '></p>
                    <p className='font-semibold text-gray-400'>#allcategories</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedBlog;