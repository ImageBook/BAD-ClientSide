import React from 'react';

const OurCrew = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40'>
            <p className='text-center font-medium text-[32px] lg:text-[56px] text-[#383841] leading-tight'>Meet <span className='font-semibold'>Our Crew</span></p>
            <p className='text-center text-[#383841] text-lg lg:text-xl w-full lg:w-2/5 xl:w-2/6 mx-auto leading-tight mb-16'>What better way to present a digital team than with our own unique digital memojis?!</p>
            {/* Add your team members information */}
            <div className='flex items-center justify-center gap-6 lg:gap-10 flex-wrap'>
                <div className='flex flex-col items-center space-y-2'>
                    <img className='w-[262px] h-[262px]' src="https://messapps.com/wp-content/uploads/2021/11/Suresh.png" alt="" />
                    <p className='text-[#383841] font-bold text-[19px]'>Suresh</p>
                    <p className='text-[#383841] tracking-wide text-[19px]'>CEO</p>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <img className='w-[262px] h-[262px]' src="https://messapps.com/wp-content/uploads/2022/03/Leon.png" alt="" />
                    <p className='text-[#383841] font-bold text-[19px]'>Leon</p>
                    <p className='text-[#383841] tracking-wide text-[19px]'>Founder</p>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <img className='w-[262px] h-[262px]' src="https://messapps.com/wp-content/uploads/2021/11/Alex.png" alt="" />
                    <p className='text-[#383841] font-bold text-[19px]'>Alex</p>
                    <p className='text-[#383841] tracking-wide text-[19px]'>Senior iOS Developer</p>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <img className='w-[262px] h-[262px]' src="https://messapps.com/wp-content/uploads/2021/11/Ismail.png" alt="" />
                    <p className='text-[#383841] font-bold text-[19px]'>Ismail</p>
                    <p className='text-[#383841] tracking-wide text-[19px]'>Backend Developer</p>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <img className='w-[262px] h-[262px]' src="https://messapps.com/wp-content/uploads/2021/11/Timur-body.png" alt="" />
                    <p className='text-[#383841] font-bold text-[19px]'>Toimur</p>
                    <p className='text-[#383841] tracking-wide text-[19px]'>Senior Android Developer</p>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <img className='w-[262px] h-[262px]' src="https://messapps.com/wp-content/uploads/2021/11/oxana.png" alt="" />
                    <p className='text-[#383841] font-bold text-[19px]'>Oxana</p>
                    <p className='text-[#383841] tracking-wide text-[19px]'>Sales Manager</p>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <img className='w-[262px] h-[262px]' src="https://messapps.com/wp-content/uploads/2021/11/Eve.png" alt="" />
                    <p className='text-[#383841] font-bold text-[19px]'>Eve</p>
                    <p className='text-[#383841] tracking-wide text-[19px]'>UI/UX Designer</p>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <img className='w-[262px] h-[262px]' src="https://messapps.com/wp-content/uploads/2021/11/Anton-Kudriavcev-head2.png" alt="" />
                    <p className='text-[#383841] font-bold text-[19px]'>Antonio</p>
                    <p className='text-[#383841] tracking-wide text-[19px]'>Senior iOS Developer</p>
                </div>
            </div>
            <hr className='mt-16 mb-4 w-full lg:w-2/3 2xl:w-1/2 mx-auto' />
            <p className='text-center text-[#383841] text-lg lg:text-xl leading-tight'>We can't wait to meet you. Contact us through the form below!</p>
        </div>
    );
};

export default OurCrew;