import React from 'react';
import team from '../../images/team.png';

const CareerHeading = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20'>
            <div className='flex flex-col lg:flex-row items-center gap-5 lg:gap-0 '>
                <div className='lg:w-1/2'>
                    <p className='hidden md:block 2xl:hidden text-[48px] lg:text-[88px] font-black text-[#383841] leading-none'>Join the BAD Team</p>
                    <p className='md:hidden 2xl:block text-[48px] lg:text-[88px] font-black text-[#383841] leading-none'>Join the</p>
                    <p className='md:hidden 2xl:block text-[48px] lg:text-[88px] font-black text-[#383841] leading-none'>BAD</p>
                    <p className='md:hidden 2xl:block text-[48px] lg:text-[88px] font-black text-[#383841] leading-none'>Team</p>
                    <p className='text-[#383841] lg:text-lg mt-3 md:mt-1 lg:mt-3'>Our team is an awesome mix of creative designers, tech savvy developers, amazing QA engineers, and coolest project managers. We don't just develop apps. We build dreams.</p>
                </div>
                <div className='lg:w-1/2 mx-auto flex items-center justify-center'>
                    <img src={team} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CareerHeading;