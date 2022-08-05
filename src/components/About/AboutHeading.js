import React from 'react';
import about from '../../images/about.png';

const AboutHeading = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20'>
            <div className='flex flex-col lg:flex-row items-center gap-5 lg:gap-0 '>
                <div className='lg:w-1/2'>
                    <p className='hidden md:block lg:hidden text-[48px] text-[text-[#383841] font-bold'>ABOUT TEXTAPPS</p>
                    <p className='md:hidden lg:block text-[48px] lg:text-[88px] font-black text-[#383841] leading-none tracking-wide'>ABOUT</p>
                    <p className='md:hidden lg:block text-[48px] lg:text-[88px] font-black text-[#383841] leading-none tracking-wide'>TEXTAPPS</p>
                    <p className='text-[#383841] lg:text-lg mt-3 md:mt-1 lg:mt-3'>"The app world is a mad game. With millions of apps in the App Store, how do you ensure that yours is the one that steals the thunder? There are three components to it: a good idea, solid execution, and aggressive promotion. Our team will work with you during all of those stages to make sure you succeed. It's not just work for us. Creating successful apps is what we live for and what we absolutely love doing. Scroll down to learn more about our values and the team that will work on your project."</p>
                    <p className='text-[#383841] lg:text-lg mt-3 md:mt-1 lg:mt-3'>- Vasily Malyshev, CEO</p>
                </div>
                <div className='lg:w-1/2 mx-auto flex items-center justify-center'>
                    <img src={about} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutHeading;