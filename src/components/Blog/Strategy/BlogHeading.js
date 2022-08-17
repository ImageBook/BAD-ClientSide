import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogHeading = () => {
    const navigate = useNavigate();
    const link1 = () => {
        navigate('/blog/casestudies');
    }
    const link2 = () => {
        navigate('/blog/design');
    }
    const link3 = () => {
        navigate('/blog/development');
    }
    const link4 = () => {
        navigate('/blog/guides');
    }
    const link5 = () => {
        navigate('/blog/marketing');
    }
    const link6 = () => {
        navigate('/blog/strategy');
    }
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10'>
            <div className='flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-16'>
                <div>
                    <p className='text-[40px] lg:text-[60px] font-bold text-[#383841] leading-none tracking-wide'>strategy</p>
                </div>
                <div className='flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-6'>
                    <div onClick={link1} className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[135px] text-center hover:cursor-pointer'>
                        <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#casestudies</p>
                    </div>
                    <div onClick={link2} className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[135px] text-center hover:cursor-pointer'>
                        <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#design</p>
                    </div>
                    <div onClick={link3} className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[135px] text-center hover:cursor-pointer'>
                        <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#development</p>
                    </div>
                    <div onClick={link4} className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[135px] text-center hover:cursor-pointer'>
                        <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#guides</p>
                    </div>
                    <div onClick={link5} className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[135px] text-center hover:cursor-pointer'>
                        <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#marketing</p>
                    </div>
                    <div onClick={link6} className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[135px] text-center hover:cursor-pointer'>
                        <p className='text-[#cc0ccf]'>#strategy</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogHeading;