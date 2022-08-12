import React from 'react';

const FeaturesRunon = () => {
    return (
        <div className='mt-28 lg:mt-40 mb-28'>
            <p className='font-black text-[40px] lg:text-[50px] leading-none text-center mb-12 lg:mb-16'>Some awesome features</p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-12 lg:gap-20'>
                <div className='flex flex-col space-y-3 items-center justify-center'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-keep-track-mockup@2x.svg" alt="" />
                    <p className='font-semibold text-xl lg:text-[22px] text-center'>Unlock Progress</p>
                </div>
                <div className='flex flex-col space-y-3 items-center justify-center'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-view-run-stats-mockup@2x.svg" alt="" />
                    <p className='font-semibold text-xl lg:text-[22px] text-center'>Track Calories</p>
                </div>
                <div className='flex flex-col space-y-3 items-center justify-center'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-friend-stories-mockup@2x.svg" alt="" />
                    <p className='font-semibold text-xl lg:text-[22px] text-center'>See Friends Activity</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturesRunon;