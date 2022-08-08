import React from 'react';

const CrossPlatformIdeas = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40 text-[#383841]'>
            <p className='text-center text-[40px] lg:text-[52px] leading-tight mb-8 lg:mb-12'>Cross-Platform Apps <span className='font-semibold'>Ideas</span></p>
            <div className='flex items-center justify-center md:justify-around gap-10 md:gap-0 flex-wrap '>
                <div className='flex flex-col items-center transition duration-300 ease-in-out hover:-translate-y-1 '>
                    <img className='w-[70px] h-[70px] mb-4' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-calendar.svg" alt="" />
                    <p className='text-lg lg:text-xl font-semibold'>Calendar</p>
                    <p className='text-lg lg:text-xl font-semibold text-gray-400'>apps</p>
                </div>
                <div className='flex flex-col items-center transition duration-300 ease-in-out hover:-translate-y-1'>
                    <img className='w-[70px] h-[70px] mb-4' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-e-commerce.svg" alt="" />
                    <p className='text-lg lg:text-xl font-semibold'>E-commerce</p>
                    <p className='text-lg lg:text-xl font-semibold text-gray-400'>apps</p>
                </div>
                <div className='flex flex-col items-center transition duration-300 ease-in-out hover:-translate-y-1'>
                    <img className='w-[70px] h-[70px] mb-4' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-business.svg" alt="" />
                    <p className='text-lg lg:text-xl font-semibold'>Business</p>
                    <p className='text-lg lg:text-xl font-semibold text-gray-400'>apps</p>
                </div>
                <div className='flex flex-col items-center transition duration-300 ease-in-out hover:-translate-y-1'>
                    <img className='w-[70px] h-[70px] mb-4' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-social-network.svg" alt="" />
                    <p className='text-lg lg:text-xl font-semibold'>Social Network</p>
                    <p className='text-lg lg:text-xl font-semibold text-gray-400'>apps</p>
                </div>
                <div className='flex flex-col items-center transition duration-300 ease-in-out hover:-translate-y-1'>
                    <img className='w-[70px] h-[70px] mb-4' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-map.svg" alt="" />
                    <p className='text-lg lg:text-xl font-semibold'>Map-based</p>
                    <p className='text-lg lg:text-xl font-semibold text-gray-400'>apps</p>
                </div>
                <div className='flex flex-col items-center transition duration-300 ease-in-out hover:-translate-y-1'>
                    <img className='w-[70px] h-[70px] mb-4' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-health.svg" alt="" />
                    <p className='text-lg lg:text-xl font-semibold pb-0'>Healthcare</p>
                    <p className='text-lg lg:text-xl font-semibold text-gray-400'>apps</p>
                </div>
            </div>
            <div className='flex justify-center mt-8 lg:mt-16'>
                <button className='w-40 rounded-lg py-2 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition-colors duration-1000 ease-in-out font-bold tracking-wide'>Get Proposal</button>
            </div>
        </div>
    );
};

export default CrossPlatformIdeas;