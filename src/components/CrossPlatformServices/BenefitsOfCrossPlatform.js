import React from 'react';

const BenefitsOfCrossPlatform = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40 text-[#383841]'>
            <p className='text-[32px] lg:text-[40px] tracking-wide leading-tight mb-6'><span className='font-bold'>Benefits</span> of Cross-Platform <br className='hidden lg:block' />
                App Development</p>
            <div className='flex flex-col lg:flex-row items-center justify-center flex-wrap gap-6 lg:gap-y-8 lg:gap-x-0'>
                <div className='w-full lg:w-1/2 mx-auto space-y-2'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-cost-saving.svg" alt="" />
                    <p className='font-semibold text-xl lg:text-2xl'>Development Cost Saving</p>
                    <p className='text-xl'>Instead of spending a significant amount of time and money on developing two or more apps for different platforms, we may develop a single app that will perform across both iOS and Android platforms.</p>
                </div>
                <div className='w-full lg:w-1/2 mx-auto space-y-2'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-devices-same-design.svg" alt="" />
                    <p className='font-semibold text-xl lg:text-2xl'>Same Design & Functionality</p>
                    <p className='text-xl'>Cross-platform apps will be adapted for various devices but still having a unified design and functionality. The best thing about it is that users will be familiar with your app on any platform.</p>
                </div>
                <div className='w-full lg:w-1/2 mx-auto space-y-2'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-maintenance.svg" alt="" />
                    <p className='font-semibold text-xl lg:text-2xl'>Maintenance</p>
                    <p className='text-xl'>We provide continued support and maintenance for every app we develop. With cross-platform mobile apps, maintenance covers both iOS and Android platforms at once.</p>
                </div>
                <div className='w-full lg:w-1/2 mx-auto space-y-2 lg:-mt-4'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-audience.svg" alt="" />
                    <p className='font-semibold text-xl lg:text-2xl'>Much Broader Target Audience</p>
                    <p className='text-xl '>Cross-platform applications allow you to attract more people from your target audience. Hence, you may increase your profit two-fold.</p>
                </div>
            </div>
        </div>
    );
};

export default BenefitsOfCrossPlatform;