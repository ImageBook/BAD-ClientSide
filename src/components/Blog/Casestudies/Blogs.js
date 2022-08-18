import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
    const navigate = useNavigate();

    const casestudies1 = () => {
        navigate('/casestudies/ground-central-double-revenue/');
    }
    const casestudies2 = () => {
        navigate('/casestudies/mobile-apps-saving-lives/');
    }
    const casestudies3 = () => {
        navigate('/guides-allcategories/make-your-business-as-successfull-as-uber/');
    }
    const casestudies4 = () => {
        navigate('/casestudies/recent-media-mentions-for-apps-built-by-messapps/');
    }
    const casestudies5 = () => {
        navigate('/casestudies/runon-healthy-daily-routine/');
    }
    const casestudies6 = () => {
        navigate('/strategy/restaurant-apps-closer-look-numbers-2/');
    }

    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10 text-[#383841]'>
            <p className='text-[#383841] text-2xl lg:text-3xl text-center mb-8 font-semibold'>Blogs on #casestudies</p>
            <div className='flex flex-col lg:flex-row items-start flex-wrap gap-6 lg:gap-x-0 lg:gap-y-12 2xl:gap-12'>
                <div onClick={casestudies1} className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto hover:cursor-pointer'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2018/09/GC.png" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#casestudies</p>
                    <p className='font-semibold text-xl mb-2'>How We Helped Ground Central Coffee Double Their Revenue</p>
                    <p>Here at one of the top NYC app development companies, we're always keen to help savvy and innovative businesses ...</p>
                </div>
                <div onClick={casestudies2} className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto hover:cursor-pointer'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2019/05/bg-monitor-1200x834.jpg" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#casestudies</p>
                    <p className='font-semibold text-xl mb-2'>Mobile Apps That Can Save Your Life</p>
                    <p>Technology is penetrating every part of our everyday life, including healthcare, and many medicine-connected apps are being used...</p>
                </div>
                <div onClick={casestudies3} className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto hover:cursor-pointer'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2019/05/Screenshot-2019-05-13-at-17.31.10-1200x574.png" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#casestudies</p>
                    <p className='font-semibold text-xl mb-2'>Business Uberization — A Full How-To Guide</p>
                    <p>You must have heard of Uber Uber is an app that allows you to order a cab to ride from one place to another in minutes ...</p>
                </div>
                <div onClick={casestudies4} className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto hover:cursor-pointer'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2019/03/dragonfruit-1200x880.jpg" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#casestudies</p>
                    <p className='font-semibold text-xl mb-2'>Recent Media Mentions For Apps Built By Best App Dev</p>
                    <p>BAD team has won numerous prizes and awards for app & web design in the last couple of years. We decided to boast a bit ...</p>
                </div>
                <div onClick={casestudies5} className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto hover:cursor-pointer'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2018/09/runonpic.png" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#casestudies</p>
                    <p className='font-semibold text-xl mb-2'>Making a Healthy Daily Routine More Enjoyable with Runon</p>
                    <p>Here at Messapps, we pride ourselves greatly in our ability to create the perfect custom apps for all our clients, no matter ...</p>
                </div>
                <div onClick={casestudies6} className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto hover:cursor-pointer'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2016/06/rod-long-I79Pgmhmy5M-unsplash-1200x449.jpg" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#casestudies #strategy</p>
                    <p className='font-semibold text-xl mb-2'>Restaurant Apps - A Closer Look At The Numbers</p>
                    <p>As more and more customers plug into the grid, your restaurant's internet presence becomes that much more crucial ...</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;