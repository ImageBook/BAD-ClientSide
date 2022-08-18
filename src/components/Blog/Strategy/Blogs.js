import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
    const navigate = useNavigate();
    const strategy1 = () => {
        navigate('/allcategories/development/kmm-new-approach-to-cross-platform-app-development/');
    }
    const strategy2 = () => {
        navigate('/allcategories/accept-cryptocurrency/');
    }
    const strategy3 = () => {
        navigate('/allcategories/strategy/apps-get-rejected/');
    }
    const strategy4 = () => {
        navigate('/allcategories/strategy/how-much-app-worth/');
    }
    const strategy5 = () => {
        navigate('/allcategories/strategy/making-a-mockup/');
    }
    const strategy6 = () => {
        navigate('/allcategories/strategy/attracting-investors-through-design/');
    }
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10 text-[#383841]'>
            <p className='text-[#383841] text-2xl lg:text-3xl text-center mb-8 font-semibold'>Blogs on #strategy</p>
            <div className='flex flex-col lg:flex-row items-start flex-wrap gap-6 lg:gap-x-0 lg:gap-y-12 2xl:gap-12'>
                <div onClick={strategy1} className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto hover:cursor-pointer'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2022/03/KMM-1200x423.png" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#allcategories #development #strategy</p>
                    <p className='font-semibold text-xl mb-2'>KMM as a New Approach to Cross-platform App Development</p>
                    <p>What is KMM? KMM stands for Kotlin Multi-platform Mobile and it's a new way to develop mobile apps...</p>
                </div>
                <div onClick={strategy2} className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto hover:cursor-pointer'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2021/12/cryptocurrency-1200x423.jpg" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#allcategories #guides #marketing #strategy</p>
                    <p className='font-semibold text-xl mb-2'>Great announcement!</p>
                    <p>Starting October 2021, Messapps accept cryptocurrency for payments! There are over 79 million cryptocurrency users worldwide ...</p>
                </div>
                <div onClick={strategy3} className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto hover:cursor-pointer'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2021/11/Why-Apps-get-rejected-1200x423.jpg" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#development #strategy</p>
                    <p className='font-semibold text-xl mb-2'>Why Apps Get Rejected</p>
                    <p>The App Store is every iOS developer's best friend until your app is rejected, and then it quickly becomes your enemy ...</p>
                </div>
                <div onClick={strategy4} className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto  hover:cursor-pointer'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2017/01/How-Much-Is-App-Worth-1200x423.jpg" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#strategy</p>
                    <p className='font-semibold text-xl mb-2'>How Much Your App Is Worth?</p>
                    <p>Learn how to gauge the value of an app on today's market! How are apps valued? Both an app's time-on-the-market and ...</p>
                </div>
                <div onClick={strategy5} className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto hover:cursor-pointer'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2020/10/Making-a-Mockup-1200x423.jpg" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#design #strategy</p>
                    <p className='font-semibold text-xl mb-2'>Top 5 Mistakes in Making a Mockup</p>
                    <p>After you figure out what you want your app to do and who you want it to be for, the next step is getting a rough idea ...</p>
                </div>
                <div onClick={strategy6} className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto hover:cursor-pointer'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2021/09/Attracting-Investors-Through-Design-1200x423.png" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#allcategories #design #strategy</p>
                    <p className='font-semibold text-xl mb-2'>Attracting Investors Through Design</p>
                    <p>New technologies can be amazing. They can help people solve their problems, or simplify their lives. Despite all this, they can ...</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;