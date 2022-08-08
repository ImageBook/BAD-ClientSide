import React from 'react';

const MobileAppServices = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40 text-[#383841]'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center'>
                        <p className='leading-tight text-[40px] lg:text-[56px] font-medium mb-2'>Mobile App Development Services</p>
                        <img src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/phones.png" alt="" />
                    </div>
                </div>
                <div className='w-full lg:w-1/2 mx-auto'>
                    <div className='flex flex-col items-start space-y-8'>
                        <div className='space-y-1 border p-5 rounded-lg bg-[#fafafa] hover:bg-[#f8f8f8] w-full'>
                            <p className='text-lg lg:text-[22px] font-semibold'>Android App Development</p>
                            <p className='text-lg lg:text-[22px]'>Android platform have a huge amount of ways to customise your mobile app. It is very flexible.</p>
                        </div>
                        <div className='space-y-1 border p-5 rounded-lg bg-[#fafafa] hover:bg-[#f8f8f8] w-full'>
                            <p className='text-lg lg:text-[22px] font-semibold'>App Design</p>
                            <p className='text-lg lg:text-[22px]'>Every project is unique, that's why we do researches to make perfect user interface design and the best user experience.</p>
                        </div>
                        <div className='space-y-1 border p-5 rounded-lg bg-[#fafafa] hover:bg-[#f8f8f8] w-full'>
                            <p className='text-lg lg:text-[22px] font-semibold'>Cross-Platform Apps</p>
                            <p className='text-lg lg:text-[22px]'>Cross-platform app development is simple, fast and much cheaper way to cover several mobile platforms.</p>
                        </div>
                        <div className='space-y-1 border p-5 rounded-lg bg-[#fafafa] hover:bg-[#f8f8f8] w-full'>
                            <p className='text-lg lg:text-[22px] font-semibold'>Auditing</p>
                            <p className='text-lg lg:text-[22px]'>If you are not sure at which stage to begin with, or you want to check the work of your previous developer, we may audit it for you.</p>
                        </div>
                        <div className='space-y-1 border p-5 rounded-lg bg-[#fafafa] hover:bg-[#f8f8f8] w-full'>
                            <p className='text-lg lg:text-[22px] font-semibold'>QA and Testing</p>
                            <p className='text-lg lg:text-[22px]'>Testing is crucial, especially before the launch.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='flex items-center justify-center mt-8 lg:mt-6'>
                <button className='w-72 rounded-lg py-2 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition-colors duration-1000 ease-in-out font-bold tracking-wide'>Hire Mobile App Developers</button>
            </div> */}
        </div>
    );
};

export default MobileAppServices;