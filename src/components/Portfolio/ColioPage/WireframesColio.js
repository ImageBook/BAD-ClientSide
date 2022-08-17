import React from 'react';

const WireframesColio = () => {
    return (
        <div className='mb-28 lg:mb-40'>
            <p className='font-black uppercase text-[46px] lg:text-[75px] 2xl:text-[90px] tracking-wide'>Wireframes</p>
            <p className='text-[15px] w-full lg:w-1/2'>Colio is an interesting application in that most of the time when it is used our user would not actually look at the app. Our users would be running. Hence, the goal was to make an easy to use interface that would allow users to easily re-engage with the app when they stop.</p>
            <div className='flex items-start justify-center gap-x-4 gap-y-8 lg:gap-y-12 mt-16 flex-wrap'>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-splash@2x.svg" alt="" />
                    <p className='text-xl text-center'>Onboarding</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-connect@2x.svg" alt="" />
                    <p className='text-xl text-center'>Connect Apple Watch</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-facebook@2x.svg" alt="" />
                    <p className='text-xl text-center'>Facebook Login</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-facebook@2x.svg" alt="" />
                    <p className='text-xl text-center'>Age Choice</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img className='w-[155px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-select-story@2x.png" alt="" />
                    <p className='text-xl text-center'>Story Library</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-story@2x.svg" alt="" />
                    <p className='text-xl text-center'>Story Info</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-ready@2x.svg" alt="" />
                    <p className='text-xl text-center'>Reminder</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-running@2x.svg" alt="" />
                    <p className='text-xl text-center'>Active Story</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-finish-run@2x.svg" alt="" />
                    <p className='text-xl text-center'>Next Chapter</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-story-progress@2x.svg" alt="" />
                    <p className='text-xl text-center'>Overview</p>
                </div>
            </div>
        </div>
    );
};

export default WireframesColio;