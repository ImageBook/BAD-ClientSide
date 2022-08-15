import React from 'react';
import { HashLink } from 'react-router-hash-link';

const WhyBest = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-20 lg:my-40'>
            <p className='xl:hidden font-medium text-[49px] lg:text-[56px] text-[#383841] text-center mb-6'>Why Textapps is <span className='font-semibold'>the Best?</span></p>
            <p className='hidden xl:block font-medium text-[49px] lg:text-[56px] text-[#383841] text-center mb-6 leading-tight'>Why Textapps is <br /> <span className='font-semibold'>the Best?</span></p>
            <div className='flex items-center justify-center flex-wrap gap-10 2xl:gap-6'>
                <div className='flex flex-col items-center space-y-2 w-[300px] h-[260px] bg-[#FAFAFA] p-2 rounded-lg shadow-lg transition duration-500 ease-in-out hover:-translate-y-1 border'>
                    <img className='w-[295px] h-[155px] ' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-full-service.svg" alt="" />
                    <p className='font-semibold text-lg xl:text-xl text-center px-2'>Full-Service App Development Company</p>
                </div>
                <div className='flex flex-col items-center space-y-2 w-[300px] h-[260px] bg-[#FAFAFA] p-2 rounded-lg shadow-lg transition duration-500 ease-in-out hover:-translate-y-1 border'>
                    <img className='w-[295px] h-[155px] ' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-ranked.svg" alt="" />
                    <p className='font-semibold text-lg xl:text-xl text-center px-2'>Experienced professional developers and designers</p>
                </div>
                <div className='flex flex-col items-center space-y-2 w-[300px] h-[260px] bg-[#FAFAFA] p-2 rounded-lg shadow-lg transition duration-500 ease-in-out hover:-translate-y-1 border'>
                    <img className='w-[295px] h-[155px] ' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-top.svg" alt="" />
                    <p className='font-semibold text-lg xl:text-xl text-center px-2'>Ranked top app development company</p>
                </div>
                <div className='flex flex-col items-center space-y-2 w-[300px] h-[260px] bg-[#FAFAFA] p-2 rounded-lg shadow-lg transition duration-500 ease-in-out hover:-translate-y-1 border'>
                    <img className='w-[295px] h-[155px] ' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-featured.svg" alt="" />
                    <p className='font-semibold text-lg xl:text-xl text-center px-2'>Apps we've built are featured in the top tech media</p>
                </div>
            </div>
            <div className='flex items-center justify-center mt-8'>
                <HashLink to='/#contact' smooth>
                    <button className='w-44 rounded-lg py-2 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition-colors duration-1000 ease-in-out font-bold tracking-wide'>Contact Us</button>
                </HashLink>
            </div>
        </div>
    );
};

export default WhyBest;