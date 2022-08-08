import React from 'react';

const Heading = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40'>
            <div className='flex items-center justify-center mb-6'>
                <img src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/illustration-web-design.svg" alt="" />
            </div>
            <p className='text-[#383841] text-[48px] lg:text-[88px] text-center leading-none font-black mb-3'>Website Design Services</p>
            <p className='text-[#383841] text-xl lg:text-2xl text-center leading-none'>As a good web design company we base
                our solutions on industry specifics in tandem with our
                clients' goals.</p>
        </div>
    );
};

export default Heading;