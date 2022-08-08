import React from 'react';

const CustomService = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40 text-[#383841]'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center'>
                        <p className='leading-tight text-[40px] lg:text-[56px] font-medium mb-6'>Our Custom <span className='font-semibold'>Web Design</span> Services Include</p>
                        <img src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/illustration-dev-audit.svg" alt="" />
                    </div>
                </div>
                <div className='w-full lg:w-1/2 mx-auto'>
                    <div className='flex flex-col items-start space-y-8'>
                        <div className='space-y-1 border p-5 rounded-lg bg-[#fafafa] hover:bg-[#f8f8f8] w-full'>
                            <p className='text-lg lg:text-[22px] font-semibold'>E-commerce website design</p>
                            <p className='text-lg lg:text-[22px]'>We can make your customers want to buy from your perfect eCommerce website.</p>
                        </div>
                        <div className='space-y-1 border p-5 rounded-lg bg-[#fafafa] hover:bg-[#f8f8f8] w-full'>
                            <p className='text-lg lg:text-[22px] font-semibold'>Corporate website design</p>
                            <p className='text-lg lg:text-[22px]'>We'll create perfect designed corporate website for your business.</p>
                        </div>
                        <div className='space-y-1 border p-5 rounded-lg bg-[#fafafa] hover:bg-[#f8f8f8] w-full'>
                            <p className='text-lg lg:text-[22px] font-semibold'>Nonprofit website design</p>
                            <p className='text-lg lg:text-[22px]'>Best user experience for your special nonprofit website.</p>
                        </div>
                        <div className='space-y-1 border p-5 rounded-lg bg-[#fafafa] hover:bg-[#f8f8f8] w-full'>
                            <p className='text-lg lg:text-[22px] font-semibold'>Web design for landing pages</p>
                            <p className='text-lg lg:text-[22px]'>Get your audience with well designed landing page that will attract more leads.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-8 lg:mt-6'>
                <button className='w-72 rounded-lg py-2 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition-colors duration-1000 ease-in-out font-bold tracking-wide'>Hire Web Designers</button>
            </div>
        </div>
    );
};

export default CustomService;