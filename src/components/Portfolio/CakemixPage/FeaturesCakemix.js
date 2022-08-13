import React from 'react';

const FeaturesCakemix = () => {
    return (
        <div className='mt-28 lg:mt-40 mb-28'>
            <p className='font-black text-[40px] lg:text-[50px] leading-none text-center mb-12 lg:mb-20'>Some awesome features</p>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-4 xl:gap-20'>
                <div className='flex flex-col space-y-4 items-center justify-center'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/cakemix/mockup1@2x.svg" alt="" />
                    <p className='font-semibold text-xl lg:text-[22px] text-center'>Custom BPM ranges</p>
                </div>
                <div className='flex flex-col space-y-4 items-center justify-center'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/cakemix/mockup-2@2x.svg" alt="" />
                    <p className='font-semibold text-xl lg:text-[22px] text-center'>Playlists tailored to your activity</p>
                </div>
                <div className='flex flex-col space-y-4 items-center justify-center'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/cakemix/mockup3@2x.svg" alt="" />
                    <p className='font-semibold text-xl lg:text-[22px] text-center'>Flexible playlist settings</p>
                </div>
            </div>
        </div>  
    );
};

export default FeaturesCakemix;