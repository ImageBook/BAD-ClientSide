import React from 'react';

const DesignCakemix = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row items-center justify-center lg:pt-20 gap-10 lg:gap-0'>
            <div className='w-full lg:w-1/2 space-y-4'>
                <div className='flex space-x-3 items-center justify-center lg:items-start lg:justify-start'>
                    <img className='w-[160px] 2xl:w-[200px] h-[300px] 2xl:h-[375px] -mt-8' src="https://messapps.com/wp-content/themes/twentysixteen/samples/cakemix/phone1@2x.svg" alt="" />
                    <img className='w-[160px] 2xl:w-[200px] h-[300px] 2xl:h-[375px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/cakemix/phone2@2x.svg" alt="" />
                </div>
                <div className='flex space-x-3 items-center justify-center lg:items-start lg:justify-start'>
                    <img className='w-[160px] 2xl:w-[200px] h-[300px] 2xl:h-[375px] -mt-8' src="https://messapps.com/wp-content/themes/twentysixteen/samples/cakemix/phone4@2x.svg" alt="" />
                    <img className='w-[160px] 2xl:w-[200px] h-[300px] 2xl:h-[375px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/cakemix/phone5@2x.svg" alt="" />
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <p className='uppercase text-[40px] lg:text-[56px] font-black'>Design</p>
                <p className='mt-2'>With this project, we've put emphasis on functionality and the utility of the app. The interface should not be distracting yet still pleasing to the eye.</p>
            </div>
        </div>
    );
};

export default DesignCakemix;