import React from 'react';

const WireframesGround = () => {
    return (
        <div className='mb-28 lg:mb-40'>
            <p className='font-black uppercase text-[46px] lg:text-[75px] 2xl:text-[90px] tracking-wide'>Wireframes</p>
            <p className='text-[15px] w-full lg:w-1/2'>The main user story for our app is the ordering process. The flow had to be smooth yet still allow for different customizations such as drink size and additional syrups.</p>
            <div className='flex items-start justify-center gap-x-4 gap-y-8 lg:gap-y-12 mt-16 flex-wrap'>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-splash@2x.svg" alt="" />
                    <p className='text-xl text-center'>Login</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-connect@2x.svg" alt="" />
                    <p className='text-xl text-center'>Pay</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-facebook@2x.svg" alt="" />
                    <p className='text-xl text-center'>Feed</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-facebook@2x.svg" alt="" />
                    <p className='text-xl text-center'>Article</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img className='w-[155px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-select-story@2x.png" alt="" />
                    <p className='text-xl text-center'>Map</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-story@2x.svg" alt="" />
                    <p className='text-xl text-center'>Locations</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-ready@2x.svg" alt="" />
                    <p className='text-xl text-center'>Order</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-running@2x.svg" alt="" />
                    <p className='text-xl text-center'>Rewards</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-finish-run@2x.svg" alt="" />
                    <p className='text-xl text-center'>Add-ons</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-story-progress@2x.svg" alt="" />
                    <p className='text-xl text-center'>Purchase</p>
                </div>
            </div>
        </div>
    );
};

export default WireframesGround;