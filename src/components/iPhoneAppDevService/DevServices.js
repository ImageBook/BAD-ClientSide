import React from 'react';
import { HashLink } from 'react-router-hash-link';

const DevServices = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40 text-[#383841]'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center'>
                        <p className='leading-tight text-[40px] lg:text-[56px] font-medium mb-2'>iPhone App Development Services</p>
                        <img src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/phones.png" alt="" />
                    </div>
                </div>
                <div className='w-full lg:w-1/2 mx-auto'>
                    <div className='flex flex-col items-start space-y-8'>
                        <div className='space-y-1 border p-5 rounded-lg bg-[#fafafa] hover:bg-[#f8f8f8] w-full'>
                            <p className='text-lg lg:text-[22px] font-semibold'>App Development Audit</p>
                            <p className='text-lg lg:text-[22px]'>We go through your mobile app and look for things that we can improve to help your business.</p>
                        </div>
                        <div className='space-y-1 border p-5 rounded-lg bg-[#fafafa] hover:bg-[#f8f8f8] w-full'>
                            <p className='text-lg lg:text-[22px] font-semibold'>Native iPhone App Development</p>
                            <p className='text-lg lg:text-[22px]'>Native apps are great for creating a phenomenal user experience.</p>
                        </div>
                        <div className='space-y-1 border p-5 rounded-lg bg-[#fafafa] hover:bg-[#f8f8f8] w-full'>
                            <p className='text-lg lg:text-[22px] font-semibold'>iOS UI/UX App Design</p>
                            <p className='text-lg lg:text-[22px]'>Every project is unique, that's why we do researches to make perfect user interface design and the best user experience.</p>
                        </div>
                        <div className='space-y-1 border p-5 rounded-lg bg-[#fafafa] hover:bg-[#f8f8f8] w-full'>
                            <p className='text-lg lg:text-[22px] font-semibold'>iPhone App Testing</p>
                            <p className='text-lg lg:text-[22px]'>Testing is a necessary thing when it comes to developing an app.</p>
                        </div>
                    </div>
                </div>
            </div>
            <HashLink to='/#contact' smooth>
                <div className='flex items-center justify-center mt-8 lg:mt-6'>
                    <button className='w-72 rounded-lg py-2 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition-colors duration-1000 ease-in-out font-bold tracking-wide'>Hire iPhone App Developers</button>
                </div>
            </HashLink>
        </div>
    );
};

export default DevServices;