import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { CgArrowLongDown } from 'react-icons/cg';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import './Runon.css';

const Runon = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div id='runon'>
            <div ref={ref}>
                <div className='flex flex-col-reverse lg:flex-row lg:justify-between items-center gap-16 lg:gap-0 lg:h-screen mt-32 w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto'>
                    <div style={{
                        transform: isInView ? "none" : "translateX(200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }} className='lg:w-1/2 mx-auto'>
                        {/* add your own text */}
                        <p className='text-[28px] lg:text-[75px] 2xl:text-[128px] font-black  text-[#383841] leading-none text-center lg:text-left'>RUNON</p>
                        <p className='text-[#383841] font-normal text-sm md:text-xl mt-1 text-center lg:text-left'>As app developers we are fueled by coffee. Together with Ground Central we made enjoying our favorite drink even better by helping them cut wait times in stores and increase user loyalty.</p>
                        <div className='flex justify-center lg:justify-start'>
                            <Link to='/runon' className='flex items-center pt-4'>
                                <CgArrowLongDown className='-rotate-90 w-10 h-10 mr-2'></CgArrowLongDown>
                                <p className='font-bold text-[17px]'>VIEW PROJECT</p>
                            </Link>
                        </div>
                    </div>

                    {/* add background image in runon.css file */}
                    <div style={{
                        transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }} className='bg lg:w-1/2 ' >
                        {/* add another background image in runon.css */}
                        <div className='bg-phone'>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Runon;