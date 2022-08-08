import React from 'react';

const Heading = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40'>
            <div className='flex items-center justify-center mb-6'>
                <img src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/iphone-dev.svg" alt="" />
            </div>
            <p className='text-[#383841] text-[48px] lg:text-[88px] text-center leading-none font-black mb-3'>iPhone App Development</p>
            <p className='text-[#383841] text-xl lg:text-2xl text-center leading-none'>We are Among the Top iOS App Developers in NYC!</p>
        </div>
    );
};

export default Heading;