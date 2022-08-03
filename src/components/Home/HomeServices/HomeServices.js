import React from 'react';
import { motion } from "framer-motion";
import { serviceData } from './ServiceData';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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

const HomeServices = () => {

    return (
        <motion.div variants={container} initial='hidden' animate='visible' className='flex flex-col lg:flex-row lg:justify-between items-center gap-20 lg:gap-0 lg:h-screen mt-10 md:mt-16 lg:-mt-10 w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto'>
            <div className='text-center lg:text-left w-full lg:w-1/2'>
                {/* add your own text */}
                <motion.p variants={child} className='text-[56px] md:text-[100px] font-black  text-[#383841] leading-none'>OUR</motion.p>
                <motion.p variants={child} className='text-[56px] md:text-[100px] font-black  text-[#383841] leading-none md:-mt-2'>SERVICES</motion.p>
                <motion.p variants={child} className='text-[#383841] font-normal text-[16px] md:text-2xl mt-1'>As a mobile app development company, <br /> we have a wide range of services that <br /> will help your business.</motion.p>
            </div>

            <motion.div variants={child} className='w-full lg:w-1/2 mx-auto'>
                <Carousel autoPlay infiniteLoop interval={2000} showThumbs={false} showStatus={false}>
                    {
                        serviceData.map((item) => (
                            <div className="w-[250px] lg:w-[300px] 2xl:w-[400px] mx-auto h-[250px] lg:h-[300px] 2xl:h-[400px]">
                                <Link to={item.link}>
                                    <div className='flex flex-col items-center justify-center rounded-lg shadow-xl hover:-translate-y-1 transition duration-500 ease-in-out bg-[#F8F8FF] w-[250px] lg:w-[300px] 2xl:w-[400px] mx-auto h-[250px] lg:h-[300px] 2xl:h-[400px]'>
                                        <img className='w-full mx-auto' src={item.img} alt="" />
                                        <p className='text-sm md:text-lg font-semibold text-center'>{item.title}</p>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </Carousel>
            </motion.div>
        </motion.div>
    );
};

export default HomeServices;