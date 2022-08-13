import React from 'react';

const RewardsGround = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row items-center justify-center pt-20 mb-28 lg:mb-40 md:pt-40 gap-10 md:gap-0'>
            <div className='w-full md:w-1/2 mx-auto flex items-center justify-center md:justify-start'>
                <div className=''>
                    <img className='w-[275px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/ground-central/graphic@2x.svg" alt="" />
                </div>
            </div>
            <div className='w-full md:w-1/2'>
                <p className='text-[40px] lg:text-[56px] font-black leading-none'>Become a loyal customer, get rewards</p>
                <p className='mt-2'>Ground Central application rewards for uploading money to your GC wallet, buying drinks and pastries, and much more. The more you use the app the more cash back you get!</p>
            </div>
        </div>
    );
};

export default RewardsGround;