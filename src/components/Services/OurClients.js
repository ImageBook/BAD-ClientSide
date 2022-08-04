import React from 'react';

const OurClients = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-20 lg:my-40'>
            <p className='font-medium text-[49px] lg:text-[56px] text-[#383841] text-center mb-6'><span className='font-semibold'>Our</span> Clients</p>
            <div className='flex items-center justify-center lg:justify-around flex-wrap'>
                <img className='w-[120px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/nyu.svg" alt="" />
                <img className='w-[120px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/microsoft.svg
" alt="" />
                <img className='w-[120px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/tm.svg" alt="" />
                <img className='w-[120px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/tm.svg
" alt="" />
                <img className='w-[120px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/zabit.svg" alt="" />
                <img className='w-[120px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/groundCentral.svg" alt="" />
            </div>
        </div>
    );
};

export default OurClients;