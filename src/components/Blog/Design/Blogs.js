import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
    const navigate = useNavigate();
    const design1 = () => {
        navigate('/allcategories/strategy/attracting-investors-through-design/');
    }
    const design2 = () => {
        navigate('/allcategories/design/first-wireframe/');
    }
    const design3 = () => {
        navigate('/allcategories/strategy/making-a-mockup/');
    }

    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10 text-[#383841]'>
            <p className='text-[#383841] text-2xl lg:text-3xl text-center mb-8 font-semibold'>Blogs on #design</p>
            <div className='flex flex-col lg:flex-row items-start flex-wrap gap-6 lg:gap-x-0 lg:gap-y-12 2xl:gap-12'>
                <div onClick={design1} className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto hover:cursor-pointer'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2021/09/Attracting-Investors-Through-Design-1200x423.png" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#allcategories #design #strategy</p>
                    <p className='font-semibold text-xl mb-2'>Attracting Investors Through Design</p>
                    <p>New technologies can be amazing. They can help people solve their problems, or simplify their lives. Despite all this, they can ...</p>
                </div>
                <div onClick={design2} className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto hover:cursor-pointer'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2016/07/kelly-sikkema-gcHFXsdcmJE-unsplash-1200x585.jpg" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#design</p>
                    <p className='font-semibold text-xl mb-2'>Your First Mobile App Wireframe</p>
                    <p>Unfortunately, when trying to turn your dream into a reality, misunderstandings and poor designs plague the industry ...</p>
                </div>
                <div onClick={design3} className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto hover:cursor-pointer'>
                    <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src="https://messapps.com/wp-content/uploads/2020/10/Making-a-Mockup-1200x423.jpg" alt="" />
                    <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#design #strategy</p>
                    <p className='font-semibold text-xl mb-2'>Top 5 Mistakes in Making a Mockup</p>
                    <p>After you figure out what you want your app to do and who you want it to be for, the next step is getting a rough idea of how ...</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;