import React from 'react';
import { GiCrossedBones } from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaBehanceSquare, FaYoutube } from 'react-icons/fa';
// import { RiYoutubeLine } from 'react-icons/ri';
// import { AiOutlineBehance } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    }

    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto flex flex-col lg:flex-row items-center justify-between py-8 mt-16 lg:mt-0 space-y-4 lg:space-y-0'>
            <div onClick={goToHome} className='flex space-x-3 items-center justify-center hover:cursor-pointer'>
                <GiCrossedBones className='w-6 h-6'></GiCrossedBones>
                {/* The name below should be changed! */}
                <p className='raleway font-extrabold text-2xl hover:text-[#951d97]'>textapps</p>
            </div>
            <div className='flex flex-col lg:flex-row items-center lg:space-x-6 space-y-1 lg:space-y-0 font-medium'>
                {/* give your contact details */}
                <p className='hover:underline'>team@textapps.com</p>
                <p className='hover:underline'>digilabstechnologies@gmail.com</p>
                <p className='hover:underline'>(+91)-90051-75380</p>
            </div>
            <div className='flex items-center lg:space-x-3 pt-2 lg:pt-0'>
                {/* set your social links */}
                <Link to='linkedin.com'><BsLinkedin className='w-5 h-5 transition duration-200 ease-linear hover:text-blue-500'></BsLinkedin></Link>
                <Link to='behance.com'><FaBehanceSquare className='w-[22px] h-[22px] transition duration-200 ease-linear hover:text-gray-500'></FaBehanceSquare></Link>
                <Link to='facebook.com'><FaFacebookF className='w-5 h-5 transition duration-200 ease-linear hover:text-blue-700'></FaFacebookF></Link>
                <Link to='instagram.com'><FaInstagram className='w-5 h-5 transition duration-200 ease-linear hover:text-pink-500'></FaInstagram></Link>
                <Link to='youtube.com'><FaYoutube className='w-[22px] h-[22px] transition duration-200 ease-linear hover:text-red-500'></FaYoutube></Link>
            </div>
        </div>
    );
};

export default Footer;