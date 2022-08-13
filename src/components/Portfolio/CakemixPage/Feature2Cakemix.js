import React from 'react';

const Feature2Cakemix = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row-reverse items-center justify-center pt-20 gap-10 lg:gap-0'>
            <div className='w-full lg:w-1/2 space-y-4'>
                <div className='flex space-x-3 items-center justify-center lg:items-end lg:justify-end'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/cakemix/mockup-listen@2x.svg" alt="" />
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <p className='text-[40px] lg:text-[56px] font-black leading-none'>Listen as you always do</p>
                <p className='mt-2'>Cakemix player is habitual, no need to learn new things. Just play and go!</p>
            </div>
        </div>
    );
};

export default Feature2Cakemix;