import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GiCrossedBones } from 'react-icons/gi';
import { FaFacebookF, FaInstagram, FaBehanceSquare, FaYoutube } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

const ServiceFooter = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    }
    return (
        <div className='bg-white'>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto py-6 '>
                <div className='flex flex-col lg:flex-row items-start justify-between gap-4 lg:gap-0'>
                    <div className='flex flex-col items-start justify-start lg:w-1/6 lg:space-y-3'>
                        <div onClick={goToHome} className='flex space-x-3 items-center justify-center hover:cursor-pointer lg:-mt-1'>
                            <GiCrossedBones className='w-6 h-6'></GiCrossedBones>
                            {/* The name below should be changed! */}
                            <p className='raleway font-extrabold text-2xl hover:text-[#951d97]'>BAD</p>
                        </div>
                        <div className='text-[15px]'>
                            BAD (Best App Dev) is a full service app development company that provides app development, design and consulting services for those who want to be successful.
                        </div>
                    </div>
                    <div className='flex flex-col items-start justify-start lg:w-1/6 lg:space-y-3'>
                        <p className='text-xl font-bold'>Company</p>
                        <div className='flex flex-col items-start space-y-[2px]'>
                            <Link to='/blog'><p className='hover:underline'>Blog</p></Link>
                            <Link to='/about'><p className='hover:underline'>About</p></Link>
                            <Link to='/services'><p className='hover:underline'>Services</p></Link>
                            <Link to='/portfolio'><p className='hover:underline'>Projects</p></Link>
                        </div>
                    </div>
                    <div className='flex flex-col items-start justify-start lg:w-1/6 lg:space-y-3'>
                        <p className='text-xl font-bold'>Community</p>
                        <div className='flex flex-col items-start space-y-[2px]'>
                            <p className='hover:underline'>NYU Contest</p>
                            <p className='hover:underline'>Industries</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-start justify-start lg:w-1/6 lg:space-y-3'>
                        <p className='text-xl font-bold'>Our Blog</p>
                        <div className='flex flex-col items-start space-y-[2px]'>
                            <p className='hover:underline'>#casestudies</p>
                            <p className='hover:underline'>#design</p>
                            <p className='hover:underline'>#development</p>
                            <p className='hover:underline'>#guides</p>
                            <p className='hover:underline'>#marketing</p>
                            <p className='hover:underline'>#strategy</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-start justify-start lg:w-1/6 lg:space-y-3'>
                        <p className='text-xl font-bold'>Contact</p>
                        <div className='flex flex-col items-start space-y-[2px]'>
                            <p className='hover:underline'>we@bestappdev.com</p>
                            <p className='hover:underline'>1440 W. Taylor St #1675, Chicago, Illinois, United States, 60607</p>
                            <p className='hover:underline'>(+1)-773-530-1043</p>
                            <div className='pt-1'>
                                <div className='flex items-center space-x-3 pt-2 lg:pt-0'>
                                    {/* set your social links */}
                                    <Link to='linkedin.com'><BsLinkedin className='w-5 h-5 transition duration-200 ease-linear hover:text-blue-500'></BsLinkedin></Link>
                                    <Link to='behance.com'><FaBehanceSquare className='w-[22px] h-[22px] transition duration-200 ease-linear hover:text-gray-500'></FaBehanceSquare></Link>
                                    <Link to='facebook.com'><FaFacebookF className='w-5 h-5 transition duration-200 ease-linear hover:text-blue-700'></FaFacebookF></Link>
                                    <Link to='instagram.com'><FaInstagram className='w-5 h-5 transition duration-200 ease-linear hover:text-pink-500'></FaInstagram></Link>
                                    <Link to='youtube.com'><FaYoutube className='w-[22px] h-[22px] transition duration-200 ease-linear hover:text-red-500'></FaYoutube></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto py-6'>
                <div className='flex justify-between'>
                    <p className='text-gray-700'>© BAD</p>
                    <p className='font-semibold text-gray-400 hover:text-gray-500'>Privacy Policy</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceFooter;