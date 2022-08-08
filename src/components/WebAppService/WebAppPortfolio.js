import React from 'react';
import { Link } from 'react-router-dom';

const WebAppPortfolio = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40 text-[#383841]'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10 2xl:gap-0'>
                <div className='w-full lg:w-1/2'>
                    <p className='leading-tight lg:leading-none text-[40px] lg:text-[56px] font-medium mb-2'>Our <span className='font-semibold'>Web Application Portfolio</span></p>
                    <p className='text-lg lg:text-xl mb-4 w-full lg:w-11/12'>While mobile apps live and run on the device itself, enabling offline use, web applications require a web browser and an active internet connection in order to run. It takes a bit more effort to summon this type of app as it's not neatly packaged on your phone's screen, but if the functionality is your only keyword, a great web app would suffice.</p>
                    <div className='flex justify-center lg:justify-start'>
                        <Link to='/portfolio'>
                            <button className='w-44 rounded-lg py-2 text-white text-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 transition-colors duration-1000 ease-in-out font-bold tracking-wide'>View Portfolio</button>
                        </Link>
                    </div>
                </div>
                <div className='w-full 2xl:w-1/2 mx-auto'>
                    <img className='rounded-lg' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/web-app-portfolio.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default WebAppPortfolio;