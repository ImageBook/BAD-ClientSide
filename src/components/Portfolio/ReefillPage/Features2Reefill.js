import React from 'react';

const Features2Reefill = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row-reverse items-center justify-center pt-20 gap-10 lg:gap-0'>
            <div className='w-full lg:w-1/2 space-y-4'>
                <div className='flex space-x-3 items-center justify-center lg:items-end lg:justify-end'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/reefill/activity.png" alt="" />
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <p className='text-[40px] lg:text-[56px] font-black leading-none'>Rich activity tracker</p>
                <p className='mt-2'>You can not only find Reefill station, but also keep track of how many bottles you and your city saved, monitor your water consumtion, and money you saved using Reefill.</p>
            </div>
        </div>
    );
};

export default Features2Reefill;