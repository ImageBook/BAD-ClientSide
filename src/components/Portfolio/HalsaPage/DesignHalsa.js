import React from 'react';

const DesignHalsa = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row items-center justify-center lg:pt-20'>
            <div className='mt-10 lg:mt-0 w-full lg:w-1/2 space-y-4'>
                <div className='flex flex-col sm:flex-row space-y-4 lg:space-y-0 md:space-x-3 items-center justify-center lg:justify-start lg:items-start'>
                    <img className='w-[160px] 2xl:w-[200px] h-[300px] 2xl:h-[375px] lg:-mt-12' src="https://messapps.com/wp-content/themes/twentysixteen/samples/halsa-life/halsa-onboarding@2x.svg" alt="" />
                    <img className='w-[160px] 2xl:w-[200px] h-[300px] 2xl:h-[375px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/halsa-life/halsa-profile-design@2x.svg" alt="" />
                </div>
                <div className='flex flex-col sm:flex-row space-y-4 lg:space-y-0 md:space-x-3 items-center justify-center lg:justify-start lg:items-start'>
                    <img className='w-[160px] 2xl:w-[200px] h-[300px] 2xl:h-[375px] lg:-mt-10' src="https://messapps.com/wp-content/themes/twentysixteen/samples/halsa-life/bla-bla-right-bottom@2x.svg" alt="" />
                    <img className='w-[160px] 2xl:w-[200px] h-[300px] 2xl:h-[375px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/halsa-life/bla-bla-left-bottom@2x.svg" alt="" />
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <p className='uppercase text-[40px] lg:text-[56px] font-black'>Design</p>
                <p className='text-[15px]'>Halsa Life has two main goals: to streamline
                    the medical record-keeping process for users
                    and to introduce a interactive way for patients
                    to communicate with doctors.</p>
            </div>
        </div>
    );
};

export default DesignHalsa;