import React from 'react';

const OrderGround = () => {
    return (
        <div className='mt-28 lg:mt-44 pb-20'>
            <p className='text-[40px] lg:text-[56px] font-extrabold leading-none text-center lg:w-1/2 mx-auto mb-1'>Order your drink from nearest cafe</p>
            <p className='text-[15px] text-center lg:w-2/5 mx-auto mb-10'>With Ground Central app you can place an order
                in just a few taps and then track its
                preparation status.</p>
            <div className='flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-3 lg:space-x-5 2xl:space-x-8'>
                <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/ground-central/popup1@2x.svg" alt="" />
                <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/ground-central/gc-nearst-cafe-mid@2x.svg" alt="" />
                <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/ground-central/popup2@2x.svg" alt="" />
            </div>
        </div>
    );
};

export default OrderGround;