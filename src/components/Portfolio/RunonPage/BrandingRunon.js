import React from 'react';

const BrandingRunon = () => {
    return (
        <div className='pt-12 lg:pt-32 mb-28 lg:mb-52'>
            <p className='uppercase text-[50px] lg:text-[90px] font-black text-center tracking-wide mb-16'>Branding</p>
            <div className='flex flex-col-reverse sm:flex-row items-center justify-center gap-6'>
                <div className='w-full sm:w-1/2 mx-auto flex items-center justify-center'>
                    <img className='w-[320px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-all-app-icons-mockup@2x.png" alt="" />
                </div>
                <div className='w-full sm:w-1/2 mx-auto'>
                    <p className='text-[40px] lg:text-[50px] font-bold'>App Icon</p>
                    <p className='text-[15px] lg:w-1/2'>The icon for RunOn represents it's
                        name and plays with the idea of pressing
                        the "ON" button to start running.</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center gap-6 mt-16 lg:mt-28'>
                <div className='w-full sm:w-1/2 mx-auto flex flex-col lg:items-center'>
                    <p className='text-[40px] lg:text-[50px] font-bold'>Typography</p>
                    <p className='text-[15px] lg:w-1/2 mx-auto 2xl:ml-44'>Minimalistic interface calls for similar fonts.
                        That's why we went with Apple's
                        San Francisco font.</p>
                </div>
                <div className='w-full md:w-1/2 mx-auto flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6'>
                    <img className='w-[175px] lg:w-auto' src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-type-sfdis.png" alt="" />
                    <img className='w-[175px] lg:w-auto' src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-type-sfpro.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default BrandingRunon;