import React from 'react';
import { Link } from 'react-router-dom';

const WebsitePortfolio = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40 text-[#383841]'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10 2xl:gap-0'>
                <div className='w-full lg:w-1/2'>
                    <p className='leading-tight lg:leading-none text-[40px] lg:text-[56px] font-medium mb-2'>Our <span className='font-semibold'>Web Development</span> Portfolio</p>
                    <p className='text-lg lg:text-xl mb-4 w-full lg:w-11/12'>In creating a web-presence for our clients, we streamline their selling processes: increasing their revenues, reaching out to a broader audience, acquiring new customers, monitoring analytics, and ultimately realizing their organization’s online goals.</p>
                    <div className='flexjustify-start'>
                        <Link to='/portfolio'>
                            <button className='w-44 rounded-lg py-2 text-white text-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 transition-colors duration-1000 ease-in-out font-bold tracking-wide'>View Portfolio</button>
                        </Link>
                    </div>
                </div>
                <div className='w-full 2xl:w-1/2 mx-auto'>
                    <div className='flex justify-center'>
                        <img className='rounded w-11/12' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/website-portfolio.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebsitePortfolio;