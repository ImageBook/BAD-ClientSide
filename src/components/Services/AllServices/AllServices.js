import React from 'react';
import { Link } from 'react-router-dom';
import './AllServices.css';

const AllServices = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20'>
            <div className='flex items-center justify-center flex-wrap gap-10'>
                <div className=''>
                    <Link to='/services/iphone-app-development' className='flex items-center space-x-2 style rounded-lg border hover:shadow-lg w-[340px] md:w-[400px] h-[125px]'>
                        <img className='w-[81px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/illustration-iphone-dev.svg" alt="" />
                        <p className='font-semibold text-lg'>iPhone Application Development</p>
                    </Link>
                </div>
                <div className=''>
                    <Link to='/services/android-app-development' className='flex items-center space-x-2 style rounded-lg border w-[340px] md:w-[400px] h-[125px] hover:shadow-lg'>
                        <img className='w-[81px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/illustration-android-dev.svg" alt="" />
                        <p className='font-semibold text-lg'>Android Application Development</p>
                    </Link>
                </div>
                <div className=''>
                    <Link to='/services/ui-ux-design' className='flex items-center space-x-2 style rounded-lg border w-[340px] md:w-[400px] h-[125px] hover:shadow-lg'>
                        <img className='w-[81px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/illustration-cross.svg" alt="" />
                        <p className='font-semibold text-lg'>UI/UX Design Services</p>
                    </Link>
                </div>
                <div className=''>
                    <Link to='/services/cross-platform-app-development' className='flex items-center space-x-2 style rounded-lg border w-[340px] md:w-[400px] h-[125px] hover:shadow-lg'>
                        <img className='w-[81px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/illustration-cross-platform-new.svg" alt="" />
                        <p className='font-semibold text-lg'>Cross Platform Mobile App Development</p>
                    </Link>
                </div>
                <div className=''>
                    <Link to='/services/mobile-app-development' className='flex items-center space-x-2 style rounded-lg border w-[340px] md:w-[400px] h-[125px] hover:shadow-lg'>
                        <img className='w-[81px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/industries/illustration-ecommerce.svg" alt="" />
                        <p className='font-semibold text-lg'>Mobile & E-Commerce Development</p>
                    </Link>
                </div>
                <div className=''>
                    <Link to='/services/website-development' className='flex items-center space-x-2 style rounded-lg border w-[340px] md:w-[400px] h-[125px] hover:shadow-lg'>
                        <img className='w-[81px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/illustration-website.svg" alt="" />
                        <p className='font-semibold text-lg'>Website Development</p>
                    </Link>
                </div>
                <div className=''>
                    <Link to='/services/web-app-development' className='flex items-center space-x-2 style rounded-lg border w-[340px] md:w-[400px] h-[125px] hover:shadow-lg'>
                        <img className='w-[81px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-web-app-dev.svg" alt="" />
                        <p className='font-semibold text-lg'>Web Application Development</p>
                    </Link>
                </div>
                <div className=''>
                    <Link to='/services/ios-app-design' className='flex items-center space-x-2 style rounded-lg border w-[340px] md:w-[400px] h-[125px] hover:shadow-lg'>
                        <img className='w-[81px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/illustration-ios-dev.svg" alt="" />
                        <p className='font-semibold text-lg'>iOS App Design</p>
                    </Link>
                </div>
                <div className=''>
                    <Link to='/services/mobile-app-consulting' className='flex items-center space-x-2 style rounded-lg w-[340px] md:w-[400px] h-[125px] border hover:shadow-lg'>
                        <img className='w-[81px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-web-app-dev.svg" alt="" />
                        <p className='font-semibold text-lg'>Mobile App Consulting</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllServices;