import React from 'react';

const AndroidAppOther = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40 text-[#383841]'>
            <div className='flex flex-col lg:flex-row items-start justify-center gap-6 md:gap-10'>
                <div className='w-full lg:w-1/2 space-y-4'>
                    <img className='rounded-lg' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/iPhone-design-illustration.png" alt="" />
                    <p className='text-[32px] lg:text-[44px] font-medium leading-tight mb-2'>Android App Development Company</p>
                    <button className='w-40 rounded-lg py-2 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition-colors duration-1000 ease-in-out font-bold tracking-wide'>Contact Us</button>
                </div>
                <div className='w-full lg:w-1/2 mx-auto space-y-4 lg:space-y-10'>
                    <p className='text-lg lg:text-[22px]'>According to statistics, over 70% of all mobile users in the world are android users. Android app development could help you obtain a broader reach versus apps on other platforms.
                    </p>
                    <p className='text-lg lg:text-[22px]'>Our development consists of working with Java and Kotlin languages, using Android Studio and Android SDK, as well as loads of others capabilities. Like on the iOS platform, we create android applications for various industries such as healthcare, fitness, education, navigation just to name a few.</p>
                    <p className='text-lg lg:text-[22px]'>We build the things that dreams are made of.</p>
                </div>
            </div>
        </div>
    );
};

export default AndroidAppOther;