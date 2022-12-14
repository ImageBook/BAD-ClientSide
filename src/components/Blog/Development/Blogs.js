import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
    const navigate = useNavigate();
    const dev1 = () => {
        navigate('/allcategories/development/flutter/');
    }
    const dev2 = () => {
        navigate('/allcategories/development/kmm-new-approach-to-cross-platform-app-development/');
    }
    const dev3 = () => {
        navigate('/allcategories/development/most-popular-apis-for-seo-software/');
    }
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10 text-[#383841]'>
            <p className='text-[#383841] text-2xl lg:text-3xl text-center mb-8 font-semibold'>Blogs on #development</p>
            <div className='flex flex-col lg:flex-row items-start flex-wrap gap-6 lg:gap-x-0 lg:gap-y-12 2xl:gap-12'>
                <div onClick={dev1} className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto hover:cursor-pointer'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2022/04/Flutter-1200x423.jpg" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#allcategories #development</p>
                    <p className='font-semibold text-xl mb-2'>Flutter - One of the Most Progressing Tech in Market</p>
                    <p>What is Flutter? Flutter is a cross-platform app development framework made by Google. It is based on the Dart language ...</p>
                </div>
                <div onClick={dev2} className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto hover:cursor-pointer'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2022/03/KMM-1200x423.png" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#allcategories #development #strategy</p>
                    <p className='font-semibold text-xl mb-2'>KMM as a New Approach to Cross-platform App Development</p>
                    <p>What is KMM? KMM stands for Kotlin Multi-platform Mobile and it's a new way to develop mobile apps ...</p>
                </div>
                <div onClick={dev3} className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto hover:cursor-pointer'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2022/03/seo-apis-1200x423.png" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#allcategories #development</p>
                    <p className='font-semibold text-xl mb-2'>Top 6 Most Popular APIs for Building An SEO Software</p>
                    <p>Competition is increasing day by day. No matter if you belong to the marketing or SEO software development field. And to get ...</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;