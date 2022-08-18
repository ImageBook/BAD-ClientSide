import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
    const navigate = useNavigate();
    const marketing1 = () => {
        navigate('/allcategories/marketing/top-15-mobile-app-ad-networks-and-platforms/');
    }
    const marketing2 = () => {
        navigate('/allcategories/marketing/ios-app-development-submitting-update-2/');
    }
    const marketing3 = () => {
        navigate('/allcategories/accept-cryptocurrency/');
    }
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10 text-[#383841]'>
            <p className='text-[#383841] text-2xl lg:text-3xl text-center mb-8 font-semibold'>Blogs on #marketing</p>
            <div className='flex flex-col lg:flex-row items-start flex-wrap gap-6 lg:gap-x-0 lg:gap-y-12 2xl:gap-12'>
                <div onClick={marketing1} className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto hover:cursor-pointer'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2020/08/App-Ad-Networks-and-Platforms-1200x423.jpg" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#allcategories #marketing</p>
                    <p className='font-semibold text-xl mb-2'>Top 15 Mobile App Ad Networks and Platforms</p>
                    <p>There are so many ways to monetize mobile apps, but perhaps the most simple and popular is in-app ads. If you are going ...</p>
                </div>
                <div onClick={marketing2} className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto hover:cursor-pointer'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2016/08/markus-winkler-cxoR55-bels-unsplash-1200x567.jpg" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#guides #marketing</p>
                    <p className='font-semibold text-xl mb-2'>How to Submit Your App's Latest Version for Review</p>
                    <p>Sign in to iTunes Connect with your Developer account and click My Apps on the main iTunes Connect dashboard; find and ...</p>
                </div>
                <div onClick={marketing3} className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto hover:cursor-pointer'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2021/12/cryptocurrency-1200x423.jpg" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#allcategories #guides #marketing #strategy</p>
                    <p className='font-semibold text-xl mb-2'>Great announcement!</p>
                    <p>Starting October 2021, Messapps accept cryptocurrency for payments! There are over 79 million cryptocurrency users worldwide ...</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;