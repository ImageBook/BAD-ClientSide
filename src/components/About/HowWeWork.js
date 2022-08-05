import React from 'react';
import DevelopmentProcess from '../Shared/DevelopmentProcess';

const HowWeWork = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-36'>
            <p className='text-center font-medium text-[32px] lg:text-[56px] text-[#383841] leading-tight mb-7 lg:mb-10'>How We <span className='font-semibold'>Work</span></p>
            <DevelopmentProcess></DevelopmentProcess>
        </div>
    );
};

export default HowWeWork;