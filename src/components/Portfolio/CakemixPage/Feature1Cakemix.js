import React from 'react';

const Feature1Cakemix = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row items-center justify-center lg:pt-20 gap-10 lg:gap-4'>
            <div className='w-full lg:w-1/2 space-y-4'>
                <div className='flex space-x-3 items-center justify-center lg:items-start lg:justify-start'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/cakemix/mockup-edit-playlist@2x.svg" alt="" />
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <p className='text-[40px] lg:text-[56px] font-black leading-none'>Playlist control</p>
                <p className='mt-2'>Add new songs, substitute current ones or simply delete them. Full playlist controls at your fingertips.</p>
            </div>
        </div>
    );
};

export default Feature1Cakemix;