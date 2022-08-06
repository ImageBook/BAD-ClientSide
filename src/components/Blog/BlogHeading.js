import React from 'react';

const BlogHeading = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10'>
            <div className='flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-16'>
                <div>
                    <p className='text-[48px] lg:text-[88px] font-black text-[#383841] leading-none tracking-wide'>BLOG</p>
                </div>
                <div className='flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-6'>
                    <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[135px] text-center'>
                        <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#casestudies</p>
                    </div>
                    <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[135px] text-center'>
                        <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#design</p>
                    </div>
                    <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[135px] text-center'>
                        <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#development</p>
                    </div>
                    <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[135px] text-center'>
                        <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#guides</p>
                    </div>
                    <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[135px] text-center'>
                        <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#marketing</p>
                    </div>
                    <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[135px] text-center'>
                        <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#strategy</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogHeading;