import React from 'react';
import { Link } from 'react-router-dom';
import { CgArrowLongDown } from 'react-icons/cg';
import img1 from '../../images/Digital_Base/Homescreen (A).png';
import img2 from '../../images/Digital_Base/My Profile.png';
import img3 from '../../images/Digital_Base/Nearby.png';
import img4 from '../../images/Digital_Base/Leaderboards.png';

const Vpromise = () => {
    return (
        <div id='0' className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto mt-10 mb-44 lg:mt-40 lg:mb-96 text-[#383841]'>
            <div className='flex flex-col lg:flex-row items-start justify-center gap-20 md:gap-28 lg:gap-0'>
                <div className='w-full lg:w-1/2 overflow-hidden lg:sticky lg:top-24'>
                    <div className=''>
                        <p data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-offset="200" className='font-black text-[40px] lg:text-[90px] tracking-wide leading-none mb-2'>Vpromise</p>
                        <p data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-offset="200" className='text-sm lg:text-xl mb-3'>Vpromise app is like a social media app where you can review any people nearby you. You can review the people via sending a video, audio or text. You can play tournaments of reviewing people and earn rewards!</p>
                        <div className='w-[170px]'>
                            <Link to='/vpromise' className='flex items-center'>
                                <CgArrowLongDown className='-rotate-90 w-10 h-10 mr-2'></CgArrowLongDown>
                                <p className='font-bold text-[17px]'>VIEW PROJECT</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 mx-auto'>
                    <div className='flex flex-col items-center justify-center flex-wrap'>
                        <div data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-offset="50" className='flex gap-x-8 mb-12 lg:mb-20'>
                            <div className='-mt-10 lg:-mt-20'>
                                <img className='w-[140px] sm:w-[180px] md:w-[250px] lg:w-[180px] xl:w-[230px] 2xl:w-[280px] rounded-xl shadow-slate-300 shadow-lg transition-transform duration-500 ease-in-out hover:-translate-y-1' src={img1} alt="" />
                            </div>
                            <img className='w-[140px] sm:w-[180px] md:w-[250px] lg:w-[180px] xl:w-[230px] 2xl:w-[280px] rounded-xl shadow-slate-300 shadow-lg transition duration-500 ease-in-out hover:-translate-y-1' src={img2} alt="" />
                        </div>
                        <div data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-offset="50" className='flex gap-x-8'>
                            <div className='-mt-10 lg:-mt-20'>
                                <img className='w-[140px] sm:w-[180px] md:w-[250px] lg:w-[180px] xl:w-[230px] 2xl:w-[280px] rounded-xl shadow-slate-300 shadow-lg transition duration-500 ease-in-out hover:-translate-y-1' src={img3} alt="" />
                            </div>
                            <img className='w-[140px] sm:w-[180px] md:w-[250px] lg:w-[180px] xl:w-[230px] 2xl:w-[280px] rounded-xl shadow-slate-300 shadow-lg transition duration-500 ease-in-out hover:-translate-y-1' src={img4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vpromise;