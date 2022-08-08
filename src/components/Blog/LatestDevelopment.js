import React from 'react';

const LatestDevelopment = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10'>
            <p className='text-[#383841] text-2xl lg:text-3xl mb-8 lg:text-center xl:text-left  xl:pl-2'>Latest in <span className='font-bold'>#development</span></p>
            <div className='flex flex-col lg:flex-row items-start flex-wrap gap-6 lg:gap-x-0 lg:gap-y-12 2xl:gap-12'>
                <div className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2022/03/seo-apis-1200x423.png" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#allcategories #development</p>
                    <p className='font-semibold text-xl mb-2'>Top 6 Most Popular APIs for Building An SEO Software</p>
                    <p>Competition is increasing day by day. No matter if you belong to the marketing or SEO software development field ...</p>
                </div>
                <div className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2021/11/Why-Apps-get-rejected-1200x423.jpg" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#development #strategy</p>
                    <p className='font-semibold text-xl mb-2'>Why Apps Get Rejected</p>
                    <p>The App Store is every iOS developer's best friend until your app is rejected, and then it quickly becomes your enemy ...</p>
                </div>
                <div className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2022/04/Flutter-1200x423.jpg" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#allcategories #development</p>
                    <p className='font-semibold text-xl mb-2'>Flutter - One of the Most Progressing Tech in Market</p>
                    <p>What is Flutter? Flutter is a cross-platform app development framework made by Google. It is based on the Dart language ...</p>
                </div>
            </div>
        </div>
    );
};

export default LatestDevelopment;