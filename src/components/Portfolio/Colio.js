import React from 'react';
import { Link } from 'react-router-dom';
import { CgArrowLongDown } from 'react-icons/cg';
// import img1 from '../../images/Digital_Base/Homescreen (A).png';
// import img2 from '../../images/Digital_Base/My Profile.png';
// import img3 from '../../images/Digital_Base/Nearby.png';
// import img4 from '../../images/Digital_Base/Leaderboards.png';
import runon1 from '../../images/runon1.png';
import runon2 from '../../images/runon2.png';
import runon3 from '../../images/runon3.png';
import runon4 from '../../images/runon4.png';

const Colio = () => {
    return (
        <div id='0' className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto mt-10 mb-44 lg:mt-40 lg:mb-96 text-[#383841]'>
            <div className='flex flex-col lg:flex-row items-start justify-center gap-20 md:gap-28 lg:gap-0'>
                <div className='w-full lg:w-1/2 overflow-hidden lg:sticky lg:top-24'>
                    <div className=''>
                        <p data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-offset="200" className='font-black text-[40px] lg:text-[90px] tracking-wide leading-none mb-2'>Colio</p>
                        <p data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-offset="200" className='text-sm lg:text-xl mb-3'>Colio app is like a social media app where you can review any people nearby you. You can review the people via sending a video, audio or text. You can play tournaments of reviewing people and earn rewards!</p>
                        <div className='w-[170px]'>
                            <Link to='/colio' className='flex items-center'>
                                <CgArrowLongDown className='-rotate-90 w-10 h-10 mr-2'></CgArrowLongDown>
                                <p className='font-bold text-[17px]'>VIEW PROJECT</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center justify-center flex-wrap'>
                        <div data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-offset="50" className='flex mb-12 lg:mb-20 space-x-6'>
                            <div className='-mt-10 lg:-mt-20'>
                                <img className='w-[140px] sm:w-[180px] md:w-[250px] lg:w-[180px] xl:w-[230px] 2xl:w-[280px] transition duration-500 ease-in-out hover:-translate-y-1' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/phone-halsa-small-left-top2x.svg" alt="" />
                            </div>
                            <img className='w-[140px] sm:w-[180px] md:w-[250px] lg:w-[180px] xl:w-[230px] 2xl:w-[280px] transition duration-500 ease-in-out hover:-translate-y-1' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/phone-halsa-small-right-top2x.svg" alt="" />
                        </div>
                        <div data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-offset="50" className='flex space-x-6'>
                            <div className='-mt-10 lg:-mt-20'>
                                <img className='w-[140px] sm:w-[180px] md:w-[250px] lg:w-[180px] xl:w-[230px] 2xl:w-[280px] transition duration-500 ease-in-out hover:-translate-y-1' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/phone-halsa-small-left-bottom2x.svg" alt="" />
                            </div>
                            <img className='w-[140px] sm:w-[180px] md:w-[250px] lg:w-[180px] xl:w-[230px] 2xl:w-[280px] transition duration-500 ease-in-out hover:-translate-y-1' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/phone-halsa-small-right-bottom2x.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Colio;