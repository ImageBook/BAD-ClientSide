import React from 'react';

const Feature1Reefill = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row items-center justify-center lg:pt-20 gap-10 lg:gap-4'>
            <div className='w-full lg:w-1/2 space-y-4'>
                <div className='flex space-x-3 items-center justify-center lg:items-start lg:justify-start'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/reefill/stations.png" alt="" />
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <p className='text-[40px] lg:text-[56px] font-black leading-none'>It's easy to find reefill station near you</p>
                <p className='mt-2'>All you need to do is to search for the nearest station, connect with it and with a click of one button, reefill your bottle with a cold, filtered tap water.</p>
            </div>
        </div>
    );
};

export default Feature1Reefill;