import React from 'react';

const LatestStrategy = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10'>
            <p className='text-[#383841] text-2xl lg:text-3xl mb-8 lg:text-center xl:text-left xl:pl-2'>Latest in <span className='font-bold'>#strategy</span></p>
            <div className='flex flex-col lg:flex-row items-start flex-wrap gap-6 lg:gap-x-0 lg:gap-y-12 2xl:gap-12'>
                <div className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2021/12/cryptocurrency-1200x423.jpg" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#allcategories #guides #marketing #strategy</p>
                    <p className='font-semibold text-xl mb-2'>Great announcement!</p>
                    <p>Starting October 2021, Messapps accept cryptocurrency for payments! There are over 79 million cryptocurrency users ...</p>
                </div>
                <div className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2017/01/How-Much-Is-App-Worth-1200x423.jpg" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#strategy</p>
                    <p className='font-semibold text-xl mb-2'>How Much Your App Is Worth?</p>
                    <p>Learn how to gauge the value of an app on today's market! How are apps valued? Both an app's time-on-the-market and ...</p>
                </div>
                <div className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2022/03/KMM-1200x423.png" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#allcategories #development #strategy</p>
                    <p className='font-semibold text-xl mb-2'>KMM as a New Approach to Cross-platform App Development</p>
                    <p>What is KMM? KMM stands for Kotlin Multi-platform Mobile and it's a new way to develop mobile apps. It's a combination of ...</p>
                </div>
            </div>
            
        </div>
    );
};

export default LatestStrategy;