import React from 'react';

const PlatformSelection = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40 text-[#383841]'>
            <p className='font-semibold text-[40px] lg:text-[56px] text-center mb-1 leading-tight'>Platform Selection</p>
            <p className='w-full lg:w-1/2 mx-auto text-center text-lg lg:text-xl mb-6'>Nowadays, 99.6% of all smartphone apps run on either iOS or Android. The two basis's businesses build apps on is: using them as a channel to raise brand awareness, or the app being the business in itself. Its important to distinguish between these two as what you choose could either save you money or trouble.</p>
            <div className='flex items-center justify-center'>
                <img src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/UI-UX-apps.png" alt="" />
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-center flex-wrap gap-8 lg:gap-x-4 lg:gap-y-8 mt-8 lg:mt-12'>
                <div className='w-full lg:w-5/12 mx-auto'>
                    <div className='flex flex-col lg:flex-row items-start justify-center text-lg lg:h-[300px] xl:h-[245px] 2xl:h-[225px] lg:gap-x-8 xl:gap-x-4'>
                        <p className='font-semibold w-full lg:w-1/4 text-left'>
                            There are two ways you can go</p>
                        <p className='w-full lg:w-3/4 text-left'>There are two ways one could go about developing an app: native or cross-platform. These two methods vary in programming language and will play a significant role in how the app will be received on each platform.</p>
                    </div>
                    <hr className='mt-6 lg:mt-0' />
                </div>
                <div className='w-full lg:w-5/12 mx-auto'>
                    <div className='flex flex-col lg:flex-row items-start justify-center text-lg lg:h-[300px] xl:h-[245px] 2xl:h-[225px] lg:gap-x-8 xl:gap-x-4'>
                        <p className='font-semibold w-full lg:w-1/4 text-left'>Native applications</p>
                        <p className='w-full lg:w-3/4 text-left'>Each methodology has its pros and cons. Developing an application specific to a platform, or natively, will ensure peak performance and usability. However, it will only have the ability to run on either Android or iOS depending on the platform you have chosen to develop for.</p>
                    </div>
                    <hr className='mt-6 lg:mt-0' />
                </div>
                <div className='w-full lg:w-5/12 mx-auto'>
                    <div className='flex flex-col lg:flex-row items-start justify-center text-lg lg:h-[320px] xl:h-[265px] 2xl:h-[225px] lg:gap-x-8 xl:gap-x-4'>
                        <p className='font-semibold w-full lg:w-1/4 text-left'>Cross-platform applications</p>
                        <p className='w-full lg:w-3/4 text-left'>You can choose to develop in such a way where one app would work across both platforms, known as cross-platform. This would initially save you time, money, and grant you broader market reach; however, due to the nature of cross-platform, the app may hiccup at times and run into performance issues.</p>
                    </div>
                    <hr className='mt-6 lg:mt-0' />
                </div>
                <div className='w-full lg:w-5/12 mx-auto'>
                    <div className='flex flex-col lg:flex-row items-start justify-center text-lg lg:h-[320px] xl:h-[265px] 2xl:h-[225px] lg:gap-x-8 xl:gap-x-4'>
                        <p className='font-semibold w-full lg:w-1/4 text-left'>We can help you decide</p>
                        <p className='w-full lg:w-3/4 text-left'>At our mobile app consulting agency, we assess your idea, taking into account factors such as complexity, size and location of your target market, and budget to determine which methodology would work best for you.</p>
                    </div>
                    <hr className='mt-6 lg:mt-0' />
                </div>
            </div>
        </div>
    );
};

export default PlatformSelection;