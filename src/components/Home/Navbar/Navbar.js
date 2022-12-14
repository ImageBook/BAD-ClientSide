import React, { useState } from 'react';
import './Navbar.css';
// import { GiCrossedBones } from 'react-icons/gi';
// import { GrMenu } from 'react-icons/gr';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
// import { useEffect } from 'react';
import useAdmin from '../../Dashboard/useAdmin';
import { MdOutlinePublish, MdPublish } from 'react-icons/md';


const Navbar = () => {
    const [serviceCheck, setServiceCheck] = useState(false);
    const [serviceCheck2, setServiceCheck2] = useState(false);
    const [aboutCheck, setAboutCheck] = useState(false);
    const [aboutCheck2, setAboutCheck2] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [mobileServices, setMobileServices] = useState(false);
    const [mobileAbout, setMobileAbout] = useState(false);
    const [user] = useAuthState(auth);
    // const [admin, setAdmin] = useState(false);
    const navigate = useNavigate();
    const [admin] = useAdmin(user);
    console.log('isAdmin nav', admin);

    const goToDashboard = () => {
        navigate('/dashboard');
    }

    const toggleServiceCheck = () => {
        setServiceCheck(true);
        setServiceCheck2(true);
    }
    const toggleServiceCheck2 = () => {
        setServiceCheck(false);
        setServiceCheck2(false);
    }
    const toggleAboutCheck = () => {
        setAboutCheck(true);
        setAboutCheck2(true);
    }
    const toggleAboutCheck2 = () => {
        setAboutCheck(false);
        setAboutCheck2(false);
    }

    const goToHome = () => {
        navigate('/');
    }
    const doSignOut = () => {
        signOut(auth);
        navigate('/login');
    }

    return (
        <div className='sticky top-0 bg-white'>
            <div className='hidden lg:block lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto'>
                <div className='flex items-center py-7'>
                    <div onClick={goToHome} className='flex items-center hover:cursor-pointer'>
                        {/* <GiCrossedBones className='w-6 h-6'></GiCrossedBones> */}
                        {/* The name below should be changed! */}
                        <p className='raleway font-extrabold text-2xl hover:text-[#951d97]'>BAD</p>
                    </div>
                    <div className='flex items-center justify-between w-3/4 mx-auto'>
                        <div className='flex space-x-8 text-[19px] font-normal tracking-wide'>
                            <NavLink to='/services'>
                                <div className='relative'>
                                    <p onMouseEnter={toggleServiceCheck} onMouseLeave={toggleServiceCheck2} className='style-hover'>Services</p>
                                    {
                                        ((serviceCheck && serviceCheck2) || (serviceCheck && !serviceCheck2) || (!serviceCheck && serviceCheck2)) &&
                                        <div onMouseEnter={toggleServiceCheck} onMouseLeave={toggleServiceCheck2} className='absolute top-[44px] -left-4 transition transform duration-500 ease-in-out -translate-y-4 border shadow-class rounded-lg text-base bg-white'>
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
                                </div>
                            </NavLink>

                            <NavLink to='/portfolio'><p className='style-hover'>Portfolio</p></NavLink>
                            <NavLink to='/about'>
                                <div className='relative'>
                                    <p onMouseEnter={toggleAboutCheck} onMouseLeave={toggleAboutCheck2} className='style-hover'>About</p>
                                    {
                                        ((aboutCheck && aboutCheck2) || (aboutCheck && !aboutCheck2) || (!aboutCheck && aboutCheck2)) &&
                                        <div onMouseEnter={toggleAboutCheck} onMouseLeave={toggleAboutCheck2} className='absolute top-[44px] -left-4 transition transform duration-500 ease-in-out -translate-y-4 border shadow-class rounded-lg bg-white text-base'>
                                            <Link to='/about/team'><p className='hover:bg-gray-100 h-[52px] flex items-center pl-4 w-[220px]'>Our Team</p></Link>
                                            <Link to='/about/careers'><p className='hover:bg-gray-100 h-[52px] flex items-center pl-4 w-[220px] '>Careers</p></Link>
                                        </div>
                                    }
                                </div>
                            </NavLink>
                            <NavLink to='/blog'><p className='style-hover '>Blog</p></NavLink>
                            {/* {
                            user ? <div onClick={doSignOut}><NavLink to='/logout'><p className='style-hover '>Logout</p></NavLink></div>
                                :
                                <NavLink to='/login'><p className='style-hover '>Login</p></NavLink>
                        }
                        {
                            (user && admin) && <NavLink to='/dashboard'><p className='style-hover '>Dashboard</p></NavLink>
                        } */}
                        </div>
                        {
                            (user && admin) &&
                            <div className='flex items-center justify-end space-x-3 text-[19px] text-white hover:text-white tracking-wide bg-purple-500 px-5 py-2 hover:bg-purple-600 font-medium rounded-lg'>
                                <NavLink to='/dashboard' className="flex space-x-2">
                                    <p className=''>Post Blog</p>
                                    <MdPublish className='w-7 h-7'></MdPublish>
                                </NavLink>
                            </div>
                        }
                    </div>

                </div>
            </div>
            <div className='bg-white sticky top-0'>
                <div className='lg:hidden w-11/12 md:w-5/6 mx-auto'>
                    <div className='flex justify-between items-center py-3'>
                        <div onClick={goToHome} className='flex items-center hover:cursor-pointer'>
                            {/* <GiCrossedBones className='w-5 h-5'></GiCrossedBones> */}
                            {/* The name below should be changed! */}
                            <p className='raleway font-extrabold text-[22px] hover:text-[#951d97]'>BAD</p>
                        </div>
                        <div onClick={() => setOpenMenu(!openMenu)} className='font-bold text-sm tracking-widest'>
                            {/* <GrMenu className='w-6 h-6'></GrMenu> */}
                            <p>MENU</p>
                        </div>
                        <div className='font-bold text-sm tracking-wider'>
                            <HashLink to='/#contact' smooth>GET PROPOSAL</HashLink>
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
                            {/* {
                                user ? <div onClick={doSignOut} className='flex items-center h-12 hover:bg-gray-100 px-3'>
                                    <Link to='/logout'><p className='hover:text-[#951d97] font-medium'>Logout</p></Link>
                                </div>
                                    :
                                    <div className='flex items-center h-12 hover:bg-gray-100 px-3'>
                                        <Link to='/login'><p className='hover:text-[#951d97] font-medium'>Login</p></Link>
                                    </div>
                            }
                             */}
                            {
                                (user && admin) && <div onClick={goToDashboard} className='flex items-center h-12 hover:bg-gray-100 px-3 -ml-[2px]'>
                                    <Link to='/dashboard'><p className='text-white hover:text-[#951d97] font-bold bg-purple-500 px-4 py-2 rounded-lg'>Post Blog</p></Link>
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;