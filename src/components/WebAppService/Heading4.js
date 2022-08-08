import React from 'react';

const Heading4 = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:mt-28 lg:mb-52'>
            <div className='flex items-center justify-center mb-6'>
                <img src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/illustration-web-dev.svg" alt="" />
            </div>
            <p className='text-[#383841] text-[48px] lg:text-[88px] text-center leading-none font-black mb-3'>Web Application Development Services</p>
            <p className='text-[#383841] text-xl lg:text-2xl text-center leading-none'>Get insight on our custom web application
                development services.</p>
        </div>
    );
};

export default Heading4;