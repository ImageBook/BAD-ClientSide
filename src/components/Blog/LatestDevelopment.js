import React from 'react';

const LatestDevelopment = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10'>
            <p className='text-[#383841] text-2xl lg:text-3xl mb-8 lg:pl-6'>Latest in <span className='font-bold'>#development</span></p>
            <div className='flex flex-col lg:flex-row items-center flex-wrap gap-6 xl:gap-x-10 xl:gap-y-12'>
                <div className='flex flex-col lg:flex-row items-center lg:w-5/12 mx-auto gap-4'>
                    <div className='lg:w-1/2 mx-auto'>
                        <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover' src="https://messapps.com/wp-content/uploads/2022/04/Flutter-1200x423.jpg" alt="" />
                    </div>
                    <div className='text-[#383841] space-y-2 lg:w-1/2 mx-auto'>
                        <p className='font-semibold text-xl'>Flutter</p>
                        <p className='lg:hidden xl:block'>What is Flutter? Flutter is a cross-platform app development framework made by Google. It is based on the Dart language ...</p>
                        <p className='hidden lg:block xl:hidden'>What is Flutter? Flutter is a cross-platform app ...</p>
                        <p className='text-sm font-semibold text-gray-400 hover:text-purple-400'>#allcategories #development</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center lg:w-5/12 mx-auto gap-4'>
                    <div className='lg:w-1/2 mx-auto'>
                        <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover' src="https://messapps.com/wp-content/uploads/2022/03/KMM-1200x423.png" alt="" />
                    </div>
                    <div className='text-[#383841] space-y-2 lg:w-1/2 mx-auto'>
                        <p className='font-semibold text-xl lg:hidden xl:block'>KMM as a New Approach</p>
                        <p className='font-semibold text-xl hidden lg:block xl:hidden'>KMM as a New Approach</p>
                        <p className='lg:hidden xl:block'>What is KMM? KMM stands for Kotlin Multi-platform Mobile and it's a new way to develop mobile apps ...</p>
                        <p className='hidden lg:block xl:hidden'>What is KMM? KMM stands for Kotlin Multi-platform Mobile ...</p>
                        <p className='text-sm font-semibold text-gray-400 hover:text-purple-400'>#allcategories #development #strategy</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center lg:w-5/12 mx-auto gap-4'>
                    <div className='lg:w-1/2 mx-auto'>
                        <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover' src="https://messapps.com/wp-content/uploads/2022/03/seo-apis-1200x423.png" alt="" />
                    </div>
                    <div className='text-[#383841] space-y-2 lg:w-1/2 mx-auto'>
                        <p className='font-semibold text-xl lg:hidden xl:block'>Top 6 Most Popular APIs for Building An SEO Software</p>
                        <p className='font-semibold text-xl hidden lg:block xl:hidden'>Top 6 Most Popular APIs</p>
                        <p className='lg:hidden xl:block'>Competition is increasing day by day. No matter if you belong to the marketing or ...</p>
                        <p className='hidden lg:block xl:hidden'>Competition is increasing day by day ...</p>
                        <p className='text-sm font-semibold text-gray-400 hover:text-purple-400'>#allcategories #development</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center lg:w-5/12 mx-auto gap-4'>
                    <div className='lg:w-1/2 mx-auto'>
                        <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover' src="https://messapps.com/wp-content/uploads/2021/11/Why-Apps-get-rejected-1200x423.jpg" alt="" />
                    </div>
                    <div className='text-[#383841] space-y-2 lg:w-1/2 mx-auto'>
                        <p className='font-semibold text-xl lg:hidden xl:block'>Why Apps Get Rejected</p>
                        <p className='font-semibold text-xl hidden lg:block xl:hidden'>Why Apps Get Rejected</p>
                        <p className='lg:hidden xl:block'>The App Store is every iOS developer’s best friend until your app is rejected, and then it quickly becomes your enemy ...</p>
                        <p className='hidden lg:block xl:hidden'>Each platform has its own personality. It's ...</p>
                        <p className='text-sm font-semibold text-gray-400 hover:text-purple-400'>#development #strategy</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestDevelopment;