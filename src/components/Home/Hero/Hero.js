import React from 'react';
import phone from '../../../images/iphone_x-removebg-preview 1.png';
import background from '../../../images/bubble1.png';
import './Hero.css';

const Hero = () => {
    return (
        <div className='flex flex-col lg:flex-row lg:justify-between items-center gap-20 lg:gap-0 lg:h-screen mt-10 md:mt-16 lg:-mt-28 w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto'>
            <div>
                {/* add your own text */}
                <p className='text-[56px] md:text-[128px] font-black  text-[#383841] leading-none'>BUILD</p>
                <p className='text-[56px] md:text-[128px] font-black  text-[#383841] leading-none md:-mt-5'>YOUR</p>
                <p className='text-[56px] md:text-[128px] font-black  text-[#383841] leading-none md:-mt-5'>DREAM</p>
                <p className='text-[#383841] font-normal text-[16px] md:text-2xl mt-1'>Mobile app development, design and <br /> consulting company for those who <br /> want to be successful</p>
            </div>
            {/* add background image in hero.css file */}
            <div className='bg' >
                {/* add another background image in hero.css */}
                <div className='bg-phone'>
                    <div className='flex items-center justify-center'>
                        <video controls autoPlay muted className='w-[155px] h-[330px] md:w-[220px] md:h-[475px] rounded-3xl ' >
                            {/* put video link in src attribute */}
                            <source src='https://messapps.com/wp-content/themes/twentysixteen/samples/messapps.mp4' type='video/mp4' />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;