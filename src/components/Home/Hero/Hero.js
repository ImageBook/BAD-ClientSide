import React, { useState } from 'react';
import phone from '../../../images/iphone_x-removebg-preview 1.png';
import background from '../../../images/bubble1.png';
import './Hero.css';
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.5,
            staggerDirection: -1
        },
    },
}

const child = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0, opacity: 1
    }
}

const Hero = () => {
    return (
        <motion.div variants={container} initial='hidden' animate='visible' className='flex flex-col lg:flex-row lg:justify-between items-center gap-20 lg:gap-0 lg:h-screen mt-10 md:mt-16 lg:-mt-10 w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto'>
            <div className='text-center lg:text-left'>
                {/* add your own text */}
                <motion.p variants={child} className='text-[56px] md:text-[128px] font-black  text-[#383841] leading-none tracking-wider'>BEST</motion.p>
                <motion.p variants={child} className='text-[56px] md:text-[128px] font-black  text-[#383841] leading-none md:-mt-5 tracking-wider'>APP</motion.p>
                <motion.p variants={child} className='text-[56px] md:text-[128px] font-black  text-[#383841] leading-none md:-mt-5 tracking-wider'>DEV</motion.p>
                <motion.p variants={child} className='text-[#383841] font-normal text-xl md:text-2xl mt-1 font-medium'>We Are Bad For Your Competitors! <br /> <span className='text-lg font-normal'>Mobile app development, design and
                    consulting <br className='hidden sm:block' /> company for those who
                    want to be successful</span></motion.p>
            </div>
            {/* add background image in hero.css file */}
            <motion.div variants={child} className='bg' >
                {/* add another background image in hero.css */}
                <motion.div variants={child} className='bg-phone'>
                    <div className='hidden lg:block'>
                        <div className='flex items-center justify-center'>
                            <video controls autoPlay muted className='w-[142px] h-[288px] md:w-[220px] md:h-[475px] rounded-2xl md:rounded-3xl ' >
                                {/* put video link in src attribute */}
                                <source src='https://messapps.com/wp-content/themes/twentysixteen/samples/messapps.mp4' type='video/mp4' />
                            </video>
                        </div>
                    </div>
                    <div className='lg:hidden'>
                        <div className='flex items-center justify-center'>

                            <video controls muted className='w-[142px] h-[288px] md:w-[220px] md:h-[475px] rounded-2xl md:rounded-3xl ' >
                                {/* put video link in src attribute */}
                                <source src='https://messapps.com/wp-content/themes/twentysixteen/samples/messapps.mp4' type='video/mp4' />
                            </video>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Hero;