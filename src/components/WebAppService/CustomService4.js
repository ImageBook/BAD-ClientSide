import React from 'react';

const CustomService4 = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40 text-[#383841]'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center'>
                        <p className='leading-tight text-[40px] lg:text-[56px] font-medium mb-6'>Our Custom <span className='font-semibold'>Web Application</span> Development Services</p>
                        <img src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/illustration-dev-audit.svg" alt="" />
                    </div>
                </div>
                <div className='w-full lg:w-1/2 mx-auto'>
                    <div className='flex flex-col items-start space-y-8'>
                        <div className='space-y-1 border p-5 rounded-lg bg-[#fafafa] hover:bg-[#f8f8f8] w-full'>
                            <p className='text-lg lg:text-[22px] font-semibold'>Web application architecture</p>
                            <p className='text-lg lg:text-[22px]'>We do initial business analytics and create an architecture of the future product.</p>
                        </div>
                        <div className='space-y-1 border p-5 rounded-lg bg-[#fafafa] hover:bg-[#f8f8f8] w-full'>
                            <p className='text-lg lg:text-[22px] font-semibold'>Web application design</p>
                            <p className='text-lg lg:text-[22px]'>Every project is unique, that's why we do research to make perfect user interface design and the best user experience.</p>
                        </div>
                        <div className='space-y-1 border p-5 rounded-lg bg-[#fafafa] hover:bg-[#f8f8f8] w-full'>
                            <p className='text-lg lg:text-[22px] font-semibold'>Mobile-friendly web application</p>
                            <p className='text-lg lg:text-[22px]'>We create mobile-friendly designs that make your users addicted to your web app.</p>
                        </div>
                        <div className='space-y-1 border p-5 rounded-lg bg-[#fafafa] hover:bg-[#f8f8f8] w-full'>
                            <p className='text-lg lg:text-[22px] font-semibold'>Maintanance</p>
                            <p className='text-lg lg:text-[22px]'>We provide continued support and maintenance for every web application we develop.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-8 lg:mt-6'>
                <button className='w-72 rounded-lg py-2 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition-colors duration-1000 ease-in-out font-bold tracking-wide'>Hire Android App Developers</button>
            </div>
        </div>
    );
};

export default CustomService4;