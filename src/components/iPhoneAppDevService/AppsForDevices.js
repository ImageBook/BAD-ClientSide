import React from 'react';

const AppsForDevices = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40 text-[#383841]'>
            <p className='leading-tight text-[40px] lg:text-[56px] font-medium mb-1 text-center'>iOS Devices</p>
            <p className='leading-tight text-[40px] lg:text-[56px] font-bold mb-10 text-center'>We Develop Apps For</p>
            <div className='flex flex-col lg:flex-row items-center justify-center flex-wrap gap-6 md:gap-4'>
                <div className='flex flex-col items-center justify-center space-y-2 p-2 border bg-[#fafafa] rounded-lg hover:bg-[#f8f8f8] md:h-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-full-service.svg" alt="" />
                    <p className='font-semibold text-lg md:text-2xl'>iPhone</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-2 p-2 border bg-[#fafafa] rounded-lg hover:bg-[#f8f8f8] md:h-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-iPads-devices.svg" alt="" />
                    <p className='font-semibold text-lg md:text-2xl'>iPad</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-2 p-2 border bg-[#fafafa] rounded-lg hover:bg-[#f8f8f8] md:h-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-apple-watch.svg" alt="" />
                    <p className='font-semibold text-lg md:text-2xl'>Apple Watch</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-2 p-2 border bg-[#fafafa] rounded-lg hover:bg-[#f8f8f8] md:h-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-apple-tv.svg" alt="" />
                    <p className='font-semibold text-lg md:text-2xl'>Apple TV</p>
                </div>
            </div>
        </div>
    );
};

export default AppsForDevices;