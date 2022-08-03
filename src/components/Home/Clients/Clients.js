import React from 'react';
import { motion } from "framer-motion";
import './Clients.css';

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

const Clients = () => {
    return (
        <motion.div variants={container} initial='hidden' animate='visible' className='flex flex-col lg:flex-row lg:justify-between items-center gap-10 lg:gap-0 lg:h-screen mt-10 md:mt-16 lg:-mt-10 w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto'>
            <div className='text-center lg:text-left w-full lg:w-1/2 mx-auto'>
                {/* add your own text */}
                <motion.p variants={child} className='text-[56px] md:text-[100px] font-black  text-[#383841] leading-none'>OUR</motion.p>
                <motion.p variants={child} className='text-[56px] md:text-[100px] font-black  text-[#383841] leading-none md:-mt-2'>CLIENTS</motion.p>
                <motion.p variants={child} className='text-[#383841] font-normal text-[16px] md:text-2xl mt-1'>Take a look at our most honorable clients who are happy with our services</motion.p>
            </div>

            <motion.div variants={child} className='w-full lg:w-1/2 mx-auto'>
                <div className='flex items-center justify-center gap-14'>
                    <div className='flex flex-col space-y-8'>
                        <div className='rounded-[70px] bg-white shadow-class hover:-translate-y-1 transition duration-300 ease-linear w-[100px] 2xl:w-[140px] h-[100px] 2xl:h-[140px]'>
                            <img src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/huffpost.svg" alt="" />
                        </div>
                        <div className='rounded-[70px] bg-white shadow-class hover:-translate-y-1 transition duration-300 ease-linear w-[100px] 2xl:w-[140px] h-[100px] 2xl:h-[140px]'>
                            <img src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/tech-crunch.svg" alt="" />
                        </div>
                        <div className='rounded-[70px] bg-white shadow-class hover:-translate-y-1 transition duration-300 ease-linear w-[100px] 2xl:w-[140px] h-[100px] 2xl:h-[140px]'>
                            <img src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/vanity.svg" alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col space-y-16'>
                        <div className='rounded-[70px] bg-white shadow-class hover:-translate-y-1 transition duration-300 ease-linear w-[100px] 2xl:w-[140px] h-[100px] 2xl:h-[140px]'>
                            <img src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/mashable.svg" alt="" />
                        </div>
                        <div className='rounded-[70px] bg-white shadow-class hover:-translate-y-1 transition duration-300 ease-linear w-[100px] 2xl:w-[140px] h-[100px] 2xl:h-[140px]'>
                            <img src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/guardian.svg" alt="" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Clients;