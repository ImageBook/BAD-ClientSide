import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogCard from './BlogCard';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [blogs]);

    const navigate = useNavigate();
    const goToFlutterBlog = () => {
        navigate('/allcategories/development/flutter/');
    }
    const goToBlog2 = () => {
        navigate('/allcategories/development/kmm-new-approach-to-cross-platform-app-development/');
    }
    const goToBlog3 = () => {
        navigate('/allcategories/development/most-popular-apis-for-seo-software/');
    }
    const goToBlog4 = () => {
        navigate('/allcategories/marketing/top-15-mobile-app-ad-networks-and-platforms/');
    }
    const goToBlog5 = () => {
        navigate('/allcategories/our-client-got-accepted-to-y-combinator/');
    }
    const goToBlog6 = () => {
        navigate('/allcategories/bi-in-mobile-app-development/');
    }
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10 text-[#383841]'>
            <p className='text-[#383841] text-2xl lg:text-3xl text-center mb-8 font-semibold'>All Latest Blogs</p>
            <div className='flex flex-col lg:flex-row items-start flex-wrap gap-6 lg:gap-x-0 lg:gap-y-12 2xl:gap-12'>
                <div onClick={goToFlutterBlog} className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto hover:cursor-pointer'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2022/04/Flutter-1200x423.jpg" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#allcategories #development</p>
                    <p className='font-semibold text-xl mb-2'>Flutter - One of the Most Progressing Tech in Market</p>
                    <p>What is Flutter? Flutter is a cross-platform app development framework made by Google. It is based on the Dart language ...</p>
                </div>
                <div onClick={goToBlog2} className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto hover:cursor-pointer'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2022/03/KMM-1200x423.png" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#allcategories #development #strategy</p>
                    <p className='font-semibold text-xl mb-2'>KMM as a New Approach to Cross-platform App Development</p>
                    <p>What is KMM? KMM stands for Kotlin Multi-platform Mobile and it's a new way to develop mobile apps...</p>
                </div>
                <div onClick={goToBlog3} className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto hover:cursor-pointer'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2022/03/seo-apis-1200x423.png" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#allcategories #development</p>
                    <p className='font-semibold text-xl mb-2'>Top 6 Most Popular APIs for Building An SEO Software</p>
                    <p>Competition is increasing day by day. No matter if you belong to the marketing or SEO software development field ...</p>
                </div>
                <div onClick={goToBlog4} className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto hover:cursor-pointer'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2020/08/App-Ad-Networks-and-Platforms-1200x423.jpg" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#allcategories #marketing</p>
                    <p className='font-semibold text-xl mb-2'>Top 15 Mobile App Ad Networks and Platforms</p>
                    <p>There are so many ways to monetize mobile apps, but perhaps the most simple and popular is in-app ads. If you are ...</p>
                </div>
                <div onClick={goToBlog5} className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto hover:cursor-pointer'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2022/02/Y-our-client-1200x400.png" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#allcategories</p>
                    <p className='font-semibold text-xl mb-2'>Our client got accepted to Y Combinator!</p>
                    <p>We are happy to share some really great news. Our client Aeon just got accepted to Y Combinator! Y Combinator is the ...</p>
                </div>
                <div onClick={goToBlog6} className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto hover:cursor-pointer'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2022/01/Business-Intelligence-1200x423.png" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#allcategories</p>
                    <p className='font-semibold text-xl mb-2'>Business Intelligence in Mobile App Development</p>
                    <p>Business intelligence is an integrated software platform that is used for business data analysis and management ...</p>
                </div>
                {
                    blogs.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
            {/* <div className='flex items-center justify-center mt-10 lg:mt-16'>
                <button className='w-40 py-2 border bg-gray-50 rounded-lg font-semibold hover:bg-gray-100'>Show All</button>
            </div> */}
        </div>
    );
};

export default Blogs;