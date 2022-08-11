import React from 'react';
import { Link } from 'react-router-dom';
import { CgArrowLongDown } from 'react-icons/cg';
import runon1 from '../../images/runon1.png';
import runon2 from '../../images/runon2.png';
import runon3 from '../../images/runon3.png';
import runon4 from '../../images/runon4.png';

const Cakemix = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto mt-10 mb-44 lg:mt-40 lg:mb-96 text-[#383841]'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-20 md:gap-28 lg:gap-0'>
                <div className='w-full lg:w-1/2 overflow-hidden'>
                    <div className=''>
                        <p data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-offset="200" className='font-black text-[40px] lg:text-[90px] uppercase tracking-wide leading-none mb-2'>Cakemix</p>
                        <p data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-offset="200" className='text-sm lg:text-xl mb-3 lg:w-1/3'>The idea behind Cakemix app is to improve
                            your running & workout experience by creating
                            music playlists with custom BPM ranges.</p>
                        <div data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-offset="200" className='w-[170px]'>
                            <Link to='/cakemix' className='flex items-center'>
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
                            data-aos-offset="50" className='flex mb-12 lg:mb-20'>
                            <div className='-mt-10 lg:-mt-20'>
                                <img className='w-[140px] sm:w-[180px] md:w-[250px] xl:w-[250px] 2xl:w-[300px]' src={runon1} alt="" />
                            </div>
                            <img className='w-[140px] sm:w-[180px] md:w-[250px] xl:w-[250px] 2xl:w-[300px]' src={runon2} alt="" />
                        </div>
                        <div data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-offset="50" className='flex'>
                            <div className='-mt-10 lg:-mt-20'>
                                <img className='w-[140px] sm:w-[180px] md:w-[250px] xl:w-[250px] 2xl:w-[300px]' src={runon3} alt="" />
                            </div>
                            <img className='w-[140px] sm:w-[180px] md:w-[250px] xl:w-[250px] 2xl:w-[300px]' src={runon4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cakemix;