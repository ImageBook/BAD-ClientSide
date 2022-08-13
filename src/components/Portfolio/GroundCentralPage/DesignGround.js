import React from 'react';

const DesignGround = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row items-center justify-center lg:pt-20 gap-10 lg:gap-0'>
            <div className='w-full lg:w-1/2 space-y-4'>
                <div className='flex space-x-3 items-center justify-center lg:items-start lg:justify-start'>
                    <img className='w-[160px] 2xl:w-[200px] h-[300px] 2xl:h-[375px] -mt-8' src="https://messapps.com/wp-content/themes/twentysixteen/samples/ground-central/phone1@2x.svg" alt="" />
                    <img className='w-[160px] 2xl:w-[200px] h-[300px] 2xl:h-[375px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/ground-central/phone3@2x.svg" alt="" />
                </div>
                <div className='flex space-x-3 items-center justify-center lg:items-start lg:justify-start'>
                    <img className='w-[160px] 2xl:w-[200px] h-[300px] 2xl:h-[375px] -mt-8' src="https://messapps.com/wp-content/themes/twentysixteen/samples/ground-central/phone2@2x.svg" alt="" />
                    <img className='w-[160px] 2xl:w-[200px] h-[300px] 2xl:h-[375px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/ground-central/phone4@2x.svg" alt="" />
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <p className='uppercase text-[40px] lg:text-[56px] font-black'>Design</p>
                <p className='mt-2'>On the design side, we had the benefit of our client already having an established brand. However, they have not gone digital before. Therefore, we need to match the black & white dark feel of their coffee shops with our interface.</p>
            </div>
        </div>
    );
};

export default DesignGround;