import React from 'react';

const DesignAr = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row items-center justify-center lg:pt-20 gap-10 lg:gap-0'>
            <div className='w-full lg:w-1/2 space-y-4'>
                <div className='flex space-x-3 items-center justify-center lg:items-start lg:justify-start'>
                    <img className='w-[160px] 2xl:w-[200px] h-[300px] 2xl:h-[375px] -mt-8' src="https://messapps.com/wp-content/themes/twentysixteen/samples/phone-borderless@2x.png" alt="" />
                    <img className='w-[160px] 2xl:w-[200px] h-[300px] 2xl:h-[375px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/iphone-2.png" alt="" />
                </div>
                <div className='flex space-x-3 items-center justify-center lg:items-start lg:justify-start'>
                    <img className='w-[160px] 2xl:w-[200px] h-[300px] 2xl:h-[375px] -mt-8' src="https://messapps.com/wp-content/themes/twentysixteen/samples/iphone-2.png" alt="" />
                    <img className='w-[160px] 2xl:w-[200px] h-[300px] 2xl:h-[375px]' src="	https://messapps.com/wp-content/themes/twentysixteen/samples/phone-borderless@2x.png" alt="" />
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <p className='uppercase text-[40px] lg:text-[56px] font-black'>Design</p>
                <p className='mt-2'>One of the hardest designs to make is the one that needs to shift the focus on the content and not the actual interface. That's what we did here and shifted the attention to the actual game and darts.</p>
            </div>
        </div>
    );
};

export default DesignAr;