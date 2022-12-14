import React from 'react';
import { Link } from 'react-router-dom';

const OurWork = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-20 lg:my-40'>
            <div className='flex flex-col 2xl:flex-row items-center gap-16 2xl:gap-0'>
                <div className='w-full 2xl:w-1/2 mx-auto'>
                    <p className='font-medium text-[49px] lg:text-[56px] text-[#383841] leading-tight text-center 2xl:text-left'>Explore Our <span className='font-semibold'>Work</span></p>
                    <p className='text-lg lg:text-xl text-[#383841] mb-4 text-center 2xl:text-left'>We create award winning apps!</p>
                    <div className='flex justify-center 2xl:justify-start'>
                        <Link to='/portfolio'>
                            <button className='w-44 rounded-lg py-2 text-white text-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 transition-colors duration-1000 ease-in-out font-bold tracking-wide'>View Portfolio</button>
                        </Link>
                    </div>
                </div>
                <div className='w-full 2xl:w-1/2 mx-auto'>
                    <div className='flex flex-col items-center justify-center lg:flex-row flex-wrap gap-10'>
                        <div className='flex flex-col items-center justify-center w-[300px] bg-[#FAFAFA] p-2 rounded-lg shadow-lg h-[360px] transition duration-500 ease-in-out hover:translate-x-1'>
                            <img className='w-[275px] h-[240px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/illustration-runon-work.svg" alt="" />
                            <p className='font-bold text-lg lg:text-xl'>RunOn</p>
                            <p className='text-center text-[15px] px-6'>Wanted to start running but
                                couldn't force yourself? Try
                                Runon.</p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-[300px] bg-[#FAFAFA] p-2 rounded-lg shadow-lg h-[360px] transition duration-500 ease-in-out hover:translate-x-1'>
                            <img className='w-[275px] h-[240px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/illustration-reefill-work.svg" alt="" />
                            <p className='font-bold text-lg lg:text-xl'>Reefill</p>
                            <p className='text-center text-[15px] px-6'>We are fascinated by ability to
                                save our environment. Reefill
                                does exactly this.</p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-[300px] bg-[#FAFAFA] p-2 rounded-lg shadow-lg h-[360px] transition duration-500 ease-in-out hover:translate-x-1'>
                            <img className='w-[275px] h-[240px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/illustration-gc-work.svg" alt="" />
                            <p className='font-bold text-lg lg:text-xl'>Ground Central</p>
                            <p className='text-center text-[15px] px-6'>Our goal was to cut waiting time,
                                so people could enjoy their
                                favorite drink faster.</p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-[300px] bg-[#FAFAFA] p-2 rounded-lg shadow-lg h-[360px] transition duration-500 ease-in-out hover:translate-x-1'>
                            <img className='w-[275px] h-[240px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/illustration-cakemix.svg" alt="" />
                            <p className='font-bold text-lg lg:text-xl'>Cakemix</p>
                            <p className='text-center text-[15px] px-6'>Cakemix is a great fitness app
                                with beat-based playlists.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWork;