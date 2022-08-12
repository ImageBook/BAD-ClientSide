import React from 'react';

const DesignRunon = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-center lg:pt-20'>
            <div className='hidden lg:block w-full lg:w-1/2 space-y-4'>
                <div className='flex space-x-3'>
                    <img className='w-[160px] 2xl:w-[200px] h-[300px] 2xl:h-[375px] -mt-8' src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-phone3@2x.png" alt="" />
                    <img className='w-[160px] 2xl:w-[200px] h-[300px] 2xl:h-[375px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-phone1@2x.png" alt="" />
                </div>
                <div className='flex space-x-3'>
                    <img className='w-[160px] 2xl:w-[200px] h-[300px] 2xl:h-[375px] -mt-8' src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-phone4@2x.png" alt="" />
                    <img className='w-[160px] 2xl:w-[200px] h-[300px] 2xl:h-[375px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-phone2@2x.png" alt="" />
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <p className='uppercase text-[40px] lg:text-[56px] font-black'>Design</p>
                <div>
                    <p className='font-bold text-[22px]'>Goal</p>
                    <p className='text-[15px] mb-2'>The goal of the application was to introduce stories in a colorful format and make the interface be easy to use on the go. This called for minimalistic UI with focus on the content.</p>
                </div>
                <div>
                    <p className='font-bold text-[22px]'>How we achieved it</p>
                    <p className='text-[15px] mb-1'>RunOn consists of cards that represent different stories. User can initiate a running story with just two steps:</p>
                    <p className='text-[15px] italic'>1. Find a story</p>
                    <p className='text-[15px] italic'>2.Tap on start button and start running!</p>
                </div>
            </div>
        </div>
    );
};

export default DesignRunon;