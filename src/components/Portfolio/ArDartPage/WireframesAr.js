import React from 'react';

const WireframesAr = () => {
    return (
        <div className='mb-28 lg:mb-40 '>
            <p className='font-black uppercase text-[46px] lg:text-[75px] 2xl:text-[90px] tracking-wide'>Wireframes</p>
            <p className='text-[15px] w-full lg:w-1/2'>The wireframes presented us with a familiar task of creating a game user interface that would match players around the world. As always our main goal here was to ensure that people can get to their goal in as few taps as possible.</p>
            <div className='flex items-start justify-center gap-x-4 gap-y-8 lg:gap-y-12 mt-16 flex-wrap'>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-splash@2x.svg" alt="" />
                    <p className='text-xl text-center'>Splash</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-connect@2x.svg" alt="" />
                    <p className='text-xl text-center'>Home</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-facebook@2x.svg" alt="" />
                    <p className='text-xl text-center'>Sign In</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-facebook@2x.svg" alt="" />
                    <p className='text-xl text-center'>Game Settings</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img className='w-[155px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-select-story@2x.png" alt="" />
                    <p className='text-xl text-center'>Multi-player</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-story@2x.svg" alt="" />
                    <p className='text-xl text-center'>Game Loading</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-ready@2x.svg" alt="" />
                    <p className='text-xl text-center'>Game Count Down</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-running@2x.svg" alt="" />
                    <p className='text-xl text-center'>Game Setup</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-finish-run@2x.svg" alt="" />
                    <p className='text-xl text-center'>Player's turn</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-story-progress@2x.svg" alt="" />
                    <p className='text-xl text-center'>Gameplay</p>
                </div>
            </div>
        </div>
    );
};

export default WireframesAr;