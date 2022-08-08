import React from 'react';

const LatestDesign = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10'>
            <p className='text-[#383841] text-2xl lg:text-3xl mb-8 lg:text-center xl:text-left  xl:pl-2'>Latest in <span className='font-bold'>#design</span></p>
            <div className='flex flex-col lg:flex-row items-start flex-wrap gap-6 lg:gap-x-0 lg:gap-y-12 2xl:gap-12'>
                <div className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2016/07/kelly-sikkema-gcHFXsdcmJE-unsplash-1200x585.jpg" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#design</p>
                    <p className='font-semibold text-xl mb-2'>Your First Mobile App Wireframe</p>
                    <p>Unfortunately, when trying to turn your dream into a reality, misunderstandings and poor designs plague the ...</p>
                </div>
                <div className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2020/10/Making-a-Mockup-1200x423.jpg" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#design #strategy</p>
                    <p className='font-semibold text-xl mb-2'>Top 5 Mistakes in Making a Mockup</p>
                    <p>After you figure out what you want your app to do and who you want it to be for, the next step is getting a rough idea ...</p>
                </div>
                <div className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2018/09/iOS-Design-1-1200x371.jpg" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#design</p>
                    <p className='font-semibold text-xl mb-2'>Overview Of iOS Design Guidelines</p>
                    <p>Each platform has its own personality. It's always best to design elements that are cohesive to the platform's ...</p>
                </div>
            </div>
        </div>
    );
};

export default LatestDesign;