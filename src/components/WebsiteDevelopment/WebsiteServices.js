import React from 'react';

const WebsiteServices = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40 text-[#383841]'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center'>
                        <p className='leading-tight text-[40px] lg:text-[56px] font-medium mb-10'>Website Design and
                            Development Services</p>
                        <img className='rounded' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/websites-examples.png" alt="" />
                    </div>
                </div>
                <div className='w-full lg:w-1/2 mx-auto'>
                    <div className='flex flex-col items-start space-y-8'>
                        <div className='space-y-1 border p-5 rounded-lg bg-[#fafafa] hover:bg-[#f8f8f8] w-full'>
                            <p className='text-lg lg:text-[22px] font-semibold'>Website architecture</p>
                            <p className='text-lg lg:text-[22px]'>We do initial business analytics and create architecture of the future product.</p>
                        </div>
                        <div className='space-y-1 border p-5 rounded-lg bg-[#fafafa] hover:bg-[#f8f8f8] w-full'>
                            <p className='text-lg lg:text-[22px] font-semibold'>Website Wireframing</p>
                            <p className='text-lg lg:text-[22px]'>We create detailed structure of the website in order to cover all user stories.</p>
                        </div>
                        <div className='space-y-1 border p-5 rounded-lg bg-[#fafafa] hover:bg-[#f8f8f8] w-full'>
                            <p className='text-lg lg:text-[22px] font-semibold'>Website design</p>
                            <p className='text-lg lg:text-[22px]'>Every project is unique, that's why we do researches to make perfect user interface design and the best user experience.</p>
                        </div>
                        <div className='space-y-1 border p-5 rounded-lg bg-[#fafafa] hover:bg-[#f8f8f8] w-full'>
                            <p className='text-lg lg:text-[22px] font-semibold'>Mobile-friendly website development</p>
                            <p className='text-lg lg:text-[22px]'>We turn our designed prototype into the final product that your users will love.</p>
                        </div>
                        <div className='space-y-1 border p-5 rounded-lg bg-[#fafafa] hover:bg-[#f8f8f8] w-full'>
                            <p className='text-lg lg:text-[22px] font-semibold'>Maintenance</p>
                            <p className='text-lg lg:text-[22px]'>We provide continued support and maintenance for every website we develop.</p>
                        </div>
                        <div className='space-y-1 border p-5 rounded-lg bg-[#fafafa] hover:bg-[#f8f8f8] w-full'>
                            <p className='text-lg lg:text-[22px] font-semibold'>E-commerce website development</p>
                            <p className='text-lg lg:text-[22px]'>We provide an eCommerce web solutions that will maximize your sales.</p>
                        </div>
                        <div className='space-y-1 border p-5 rounded-lg bg-[#fafafa] hover:bg-[#f8f8f8] w-full'>
                            <p className='text-lg lg:text-[22px] font-semibold'>Filling the website with the content</p>
                            <p className='text-lg lg:text-[22px]'>Don't worry about the content - we'll create a completely finished website.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-8'>
                <button className='w-72 rounded-lg py-2 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition-colors duration-1000 ease-in-out font-bold tracking-wide'>Hire Web Developers</button>
            </div>
        </div>
    );
};

export default WebsiteServices;