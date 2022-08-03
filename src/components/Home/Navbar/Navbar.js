import React, { useState } from 'react';
import './Navbar.css';
import { GiCrossedBones } from 'react-icons/gi';
import { GrMenu } from 'react-icons/gr';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [serviceCheck, setServiceCheck] = useState(false);
    const [aboutCheck, setAboutCheck] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [mobileServices, setMobileServices] = useState(false);
    const [mobileAbout, setMobileAbout] = useState(false);
    const navigate = useNavigate();
    const toggleServiceCheck = () => {
        setServiceCheck(true);
    }
    const toggleServiceCheck2 = () => {
        setServiceCheck(false);
    }
    const toggleAboutCheck = () => {
        setAboutCheck(true);
    }
    const toggleAboutCheck2 = () => {
        setAboutCheck(false);
    }
    // const handleOpenMenu = () => {
    //     setOpenMenu(true);
    // }
    const goToHome = () => {
        navigate('/');
    }

    return (
        <div className='sticky top-0'>
            <div className=' hidden lg:block lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto'>
                <div className='flex items-end py-7'>
                    <div onClick={goToHome} className='flex space-x-3 items-center mr-14  hover:cursor-pointer'>
                        <GiCrossedBones className='w-6 h-6'></GiCrossedBones>
                        {/* The name below should be changed! */}
                        <p className='raleway font-extrabold text-2xl hover:text-[#951d97]'>textapps</p>
                    </div>
                    <div className='flex space-x-8 text-[19px] font-normal tracking-wide'>
                        <Link onMouseEnter={toggleServiceCheck} to='/services'>
                            <p className='style-hover relative'>Services</p>
                            {
                                serviceCheck &&
                                <div onMouseLeave={toggleServiceCheck2} className='absolute top-20 transition transform duration-500 ease-in-out -translate-y-4 border shadow-class rounded-lg text-base bg-white'>
                                    <div className='flex items-center w-[470px] '>
                                        <Link to='/services/iphone-app-development'><p className='hover:bg-gray-100 h-[52px] flex items-center pl-4 w-[225px] mr-[20px]'>iPhone App Development</p></Link>
                                        <Link to='/services/web-design'><p className='hover:bg-gray-100 h-[52px] flex items-center pl-4 w-[225px]'>Web Design</p></Link>
                                    </div>
                                    <div className='flex items-center w-[470px]'>
                                        <Link to='/services/android-app-development'><p className='hover:bg-gray-100 h-[52px] flex items-center pl-4 w-[225px] mr-[20px]'>Android App Development</p></Link>
                                        <Link to='/services/web-app-development'><p className='hover:bg-gray-100 h-[52px] flex items-center pl-4 w-[225px] mr-[20px]'>Web App Development</p></Link>
                                    </div>
                                    <div className='flex items-center w-[470px]'>
                                        <Link to='/services/ui-ux-design'><p className='hover:bg-gray-100 h-[52px] flex items-center pl-4 w-[225px] mr-[20px]'>UI/UX Design</p></Link>
                                        <Link to='/services/website-development'><p className='hover:bg-gray-100 h-[52px] flex items-center pl-4 w-[225px] mr-[20px]'>Website Development</p></Link>
                                    </div>
                                    <div className='flex items-center w-[470px]'>
                                        <Link to='/services/cross-platform-app-development'><p className='hover:bg-gray-100 h-[52px] flex items-center pl-4 w-[225px] mr-[20px]'>Cross-Platform App Development</p></Link>
                                        <Link to='/services/enterprise-app-development'><p className='hover:bg-gray-100 h-[52px] flex items-center pl-4 w-[225px] mr-[20px]'>Enterprise App Development</p></Link>
                                    </div>
                                    <div className='flex items-center w-[470px]'>
                                        <Link to='/services/ios-app-design'><p className='hover:bg-gray-100 h-[52px] flex items-center pl-4 w-[225px] mr-[20px]'>iOS App Design</p></Link>
                                        <Link to='/services/mvp-for-startups'><p className='hover:bg-gray-100 h-[52px] flex items-center pl-4 w-[225px] mr-[20px]'>MVP for Startups</p></Link>
                                    </div>
                                    <div className='flex items-center w-[470px]'>
                                        <Link to='/services/mobile-app-development'><p className='hover:bg-gray-100 h-[52px] flex items-center pl-4 w-[225px] mr-[20px]'>Mobile App Development</p></Link>
                                        <Link to='/services/mobile-app-consulting'><p className='hover:bg-gray-100 h-[52px] flex items-center pl-4 w-[225px] mr-[20px]'>Mobile App Consulting</p></Link>
                                    </div>
                                </div>
                            }
                        </Link>
                        <Link to='/portfolio'><p className='style-hover'>Portfolio</p></Link>
                        <Link onMouseEnter={toggleAboutCheck} to='/about'>
                            <p className='style-hover relative'>About</p>
                            {
                                aboutCheck &&
                                <div onMouseLeave={toggleAboutCheck2} className='absolute top-20 transition transform duration-500 ease-in-out -translate-y-4 border shadow-class rounded-lg  text-base'>
                                    <Link to='/about/team'><p className='hover:bg-gray-100 h-[52px] flex items-center pl-4 w-[220px]'>Our Team</p></Link>
                                    <Link to='/about/careers'><p className='hover:bg-gray-100 h-[52px] flex items-center pl-4 w-[220px] '>Careers</p></Link>
                                </div>
                            }
                        </Link>
                        <Link to='/blog'><p className='style-hover '>Blog</p></Link>
                    </div>

                </div>
            </div>
            <div className='lg:hidden w-11/12 md:w-5/6 mx-auto'>
                <div className='flex justify-between items-center py-3'>
                    <div onClick={goToHome} className='flex space-x-2 items-center hover:cursor-pointer'>
                        <GiCrossedBones className='w-5 h-5'></GiCrossedBones>
                        {/* The name below should be changed! */}
                        <p className='raleway font-extrabold text-[22px] hover:text-[#951d97]'>textapps</p>
                    </div>
                    <div onClick={() => setOpenMenu(!openMenu)} className='font-bold text-sm tracking-widest'>
                        {/* <GrMenu className='w-6 h-6'></GrMenu> */}
                        <p>MENU</p>
                    </div>
                    <div className='font-bold text-sm tracking-wider'>
                        GET PROPOSAL
                    </div>
                </div>
                {
                    openMenu &&
                    <div className={(openMenu ? "top-[75px]" : "-top-full") + 'fixed text-lg rounded bg-gray-50 transition-top duration-500 ease-linear -translate-y-1'}>
                        <div onClick={() => setMobileServices(!mobileServices)} className='flex justify-between items-center h-12 hover:bg-gray-100 px-3 '>
                            <Link to='/services'><p className='hover:text-[#951d97] font-medium'>Services</p></Link>
                            <IoMdArrowDropdown className='w-6 h-6'></IoMdArrowDropdown>
                        </div>
                        <div className={(mobileServices ? 'block' : 'hidden')}>
                            <div className='text-base '>
                                <Link to='/services/iphone-app-development'><p className='h-10 flex items-center px-3 bg-white hover:bg-gray-50 '>iPhone App Development</p></Link>
                                <Link to='/services/android-app-development'><p className='h-10 flex items-center px-3 bg-white hover:bg-gray-50'>Android App Development</p></Link>
                                <Link to='/services/ui-ux-design'><p className='h-10 flex items-center px-3 bg-white hover:bg-gray-50'>UI/UX Design</p></Link>
                                <Link to='/services/cross-platform-app-development'><p className='h-12 flex items-center px-3 bg-white hover:bg-gray-50'>Cross-Platform App Development</p></Link>
                                <Link to='/services/ios-app-design'><p className='h-10 flex items-center px-3 bg-white hover:bg-gray-50'>iOS App Design</p></Link>
                                <Link to='/services/mobile-app-development'><p className='h-10 flex items-center px-3 bg-white hover:bg-gray-50'>Mobile App Development</p></Link>
                                <Link to='/services/web-design'><p className='h-10 flex items-center px-3 bg-white hover:bg-gray-50'>Web Design</p></Link>
                                <Link to='/services/web-app-development'><p className='h-10 flex items-center px-3 bg-white hover:bg-gray-50'>Web App Development</p></Link>
                                <Link to='/services/website-development'><p className='h-10 flex items-center px-3 bg-white hover:bg-gray-50'>Website Development</p></Link>
                                <Link to='/services/enterprise-app-development'><p className='h-10 flex items-center px-3 bg-white hover:bg-gray-50'>Enterprise App Development</p></Link>
                                <Link to='/services/mvp-for-startups'><p className='h-10 flex items-center px-3 bg-white hover:bg-gray-50'>MVP for Startups</p></Link>
                                <Link to='/services/mobile-app-consulting'><p className='h-10 flex items-center px-3 bg-white hover:bg-gray-50'>Mobile App Consulting</p></Link>
                            </div>
                        </div>
                        <div className='flex items-center h-12 hover:bg-gray-100 px-3'>
                            <Link to='/portfolio'><p className='hover:text-[#951d97] font-medium'>Portfolio</p></Link>
                        </div>
                        <div onClick={() => setMobileAbout(!mobileAbout)} className='flex justify-between items-center h-12 hover:bg-gray-100 px-3'>
                            <Link to='/about'><p className='hover:text-[#951d97] font-medium'>About</p></Link>
                            <IoMdArrowDropdown className='w-6 h-6'></IoMdArrowDropdown>
                        </div>
                        <div className={(mobileAbout ? 'block' : 'hidden')}>
                            <div className='text-base'>
                                <Link to='/about/team'><p className='h-10 flex items-center px-3 hover:bg-gray-50'>Our Team</p></Link>
                                <Link to='/about/careers'><p className='h-10 flex items-center px-3 hover:bg-gray-50'>Careers</p></Link>
                            </div>
                        </div>
                        <div className='flex items-center h-12 hover:bg-gray-100 px-3'>
                            <Link to='/blog'><p className='hover:text-[#951d97] font-medium'>Blog</p></Link>
                        </div>
                    </div>
                }


            </div>
        </div>
    );
};

export default Navbar;