import React from 'react';
import { HashLink } from 'react-router-hash-link';

const BuildDream = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40'>
            <div className='flex flex-col lg:flex-row gap-6 lg:gap-0 items-start justify-center'>
                <div className='w-full lg:w-1/2 '>
                    <p className='font-medium text-[32px] lg:text-[40px] text-[#383841] leading-tight mb-4'>Build your <span className='font-semibold'>Dream</span> with <span className='font-semibold'>BAD (Best App Dev)</span></p>
                    <HashLink to='/#contact' smooth>
                        <button className='w-44 rounded-lg py-2 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition-colors duration-1000 ease-in-out font-bold tracking-wide'>Get Proposal</button>
                    </HashLink>
                </div>
                <div className='w-full lg:w-1/2'>
                    <p className='text-[#383841] text-lg lg:text-xl'>Despite an analytical approach to building software, we know that for many of our clients their app is their "baby". They put their heart and soul into it and want to make sure that it becomes the "next big thing". That's why at Messapps we say that we don't just develop apps. We build dreams. We know what's at stake for you. We know that every dollar counts, the best timeline is the one that ended yesterday and that there is no margin for error. We know it because we've been there. And we'll do everything we can to make your product the best it can be.</p>
                </div>
            </div>
        </div>
    );
};

export default BuildDream;