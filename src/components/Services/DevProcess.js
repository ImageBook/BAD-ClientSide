import React from 'react';
import { HashLink } from 'react-router-hash-link';

const DevProcess = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-12 lg:my-40'>
            <p className='text-center font-medium text-[49px] lg:text-[56px] text-[#383841] mb-14'>Our Development <span className='font-semibold'>Process</span></p>
            <div className='flex items-center justify-center md:justify-around gap-10 md:gap-0 flex-wrap '>
                <div className='flex flex-col items-center space-y-2 hover:font-semibold transition duration-300 ease-in-out hover:-translate-y-1 '>
                    <img className='w-[70px] h-[70px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-business.svg" alt="" />
                    <p className='text-lg'>Idea</p>
                </div>
                <div className='flex flex-col items-center space-y-2 hover:font-semibold transition duration-300 ease-in-out hover:-translate-y-1'>
                    <img className='w-[70px] h-[70px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-wireframes.svg" alt="" />
                    <p className='text-lg'>Wireframes</p>
                </div>
                <div className='flex flex-col items-center space-y-2 hover:font-semibold transition duration-300 ease-in-out hover:-translate-y-1'>
                    <img className='w-[70px] h-[70px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-design.svg" alt="" />
                    <p className='text-lg'>Design</p>
                </div>
                <div className='flex flex-col items-center space-y-2 hover:font-semibold transition duration-300 ease-in-out hover:-translate-y-1'>
                    <img className='w-[70px] h-[70px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-dev.svg" alt="" />
                    <p className='text-lg'>Development</p>
                </div>
                <div className='flex flex-col items-center space-y-2 hover:font-semibold transition duration-300 ease-in-out hover:-translate-y-1'>
                    <img className='w-[70px] h-[70px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-testing.svg" alt="" />
                    <p className='text-lg'>Testing</p>
                </div>
                <div className='flex flex-col items-center space-y-2 hover:font-semibold transition duration-300 ease-in-out hover:-translate-y-1'>
                    <img className='w-[70px] h-[70px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-launch.svg" alt="" />
                    <p className='text-lg'>Launch</p>
                </div>
            </div>
            <hr className='mt-20 lg:mt-28 xl:mt-36 mb-10 lg:mb-14 xl:mb-16' />
            <p className='lg:w-1/2 mx-auto text-center text-[#383841] text-lg lg:text-[20px] mb-6'>Even the most groundbreaking app ideas need careful planning and strategy implementation. Together with you we’ll jump into your industry, brainstorm and mind map your idea to develop it into a one of a kind app.</p>
            <div className='flex justify-center'>
                <HashLink to='/#contact' smooth>
                    <button className='w-40 rounded-lg py-2 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition-colors duration-1000 ease-in-out font-bold tracking-wide'>Let's Talk</button>
                </HashLink>
            </div>
        </div >
    );
};

export default DevProcess;