import React from 'react';
import { Link } from 'react-router-dom';

const IndustryService = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-20 lg:my-40'>
            <p className='font-medium text-[49px] lg:text-[56px] text-[#383841] text-center leading-tight'><span className='font-semibold'>Industries</span> We Serve</p>
            <p className='text-[#383841] text-center lg:w-1/2 2xl:w-5/12 mx-auto lg:text-lg mb-10'>We create incredible apps for both: small startups and giant corporation - so if you have a great idea and you're passionate about it, we'll be happy to help you build the app of your dreams.</p>
            <div className='flex items-center justify-center flex-wrap gap-10'>
                <div className='flex items-center space-x-2 style rounded-lg border hover:shadow-lg w-[340px] md:w-[400px] h-[125px]'>
                    {/* <Link to='/services/iphone-app-development' className=''> */}
                    <img className='w-[81px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/industries/illustration-transport.svg" alt="" />
                    <p className='font-semibold text-lg xl:text-[19px]'>Transport and Logistics</p>
                    {/* </Link> */}
                </div>
                <div className='flex items-center space-x-2 style rounded-lg border w-[340px] md:w-[400px] h-[125px] hover:shadow-lg'>
                    {/* <Link to='/services/android-app-development' className=''> */}
                    <img className='w-[81px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/industries/illustration-enterprise.svg
" alt="" />
                    <p className='font-semibold text-lg xl:text-[19px]'>Enterprise Development</p>
                    {/* </Link> */}
                </div>
                <div className='flex items-center space-x-2 style rounded-lg border w-[340px] md:w-[400px] h-[125px] hover:shadow-lg'>
                    {/* <Link to='/services/ui-ux-design' className=''> */}
                    <img className='w-[81px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/industries/illustration-education.svg" alt="" />
                    <p className='font-semibold text-lg xl:text-[19px]'>Education and Training</p>
                    {/* </Link> */}
                </div>
                <div className='flex items-center space-x-2 style rounded-lg border w-[340px] md:w-[400px] h-[125px] hover:shadow-lg'>
                    {/* <Link to='/services/cross-platform-app-development' className=''> */}
                    <img className='w-[81px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/industries/illustration-marketing.svg" alt="" />
                    <p className='font-semibold text-lg xl:text-[19px]'>Custom Apps for Marketing</p>
                    {/* </Link> */}
                </div>
                <div className='flex items-center space-x-2 style rounded-lg border w-[340px] md:w-[400px] h-[125px] hover:shadow-lg'>
                    {/* <Link to='/services/mobile-app-development' className=''> */}
                    <img className='w-[81px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/industries/illustration-mvp.svg" alt="" />
                    <p className='font-semibold text-lg xl:text-[19px]'>MVP for Startups</p>
                    {/* </Link> */}
                </div>
                <div className='flex items-center space-x-2 style rounded-lg border w-[340px] md:w-[400px] h-[125px] hover:shadow-lg'>
                    {/* <Link to='/services/website-development' className=''> */}
                    <img className='w-[81px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/industries/illustration-entertainment.svg" alt="" />
                    <p className='font-semibold text-lg xl:text-[19px]'>Entertainment Apps</p>
                    {/* </Link> */}
                </div>
                <div className='flex items-center space-x-2 style rounded-lg border w-[340px] md:w-[400px] h-[125px] hover:shadow-lg'>
                    {/* <Link to='/services/web-app-development' className=''> */}
                    <img className='w-[81px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/industries/illustration-healthcare.svg" alt="" />
                    <p className='font-semibold text-lg xl:text-[19px]'>Healthcare App Development</p>
                    {/* </Link> */}
                </div>
                <div className='flex items-center space-x-2 style rounded-lg border w-[340px] md:w-[400px] h-[125px] hover:shadow-lg'>
                    {/* <Link to='/services/ios-app-design' className=''> */}
                    <img className='w-[81px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/industries/illustration-fitness.svg" alt="" />
                    <p className='font-semibold text-lg xl:text-[19px]'>Fitness and Wellness App Development</p>
                    {/* </Link> */}
                </div>
                <div className='flex items-center space-x-2 style rounded-lg w-[340px] md:w-[400px] h-[125px] border hover:shadow-lg'>
                    {/* <Link to='/services/mobile-app-consulting' className=''> */}
                    <img className='w-[81px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/industries/illustration-property.svg" alt="" />
                    <p className='font-semibold text-lg xl:text-[19px]'>Property Management and Real Estate Apps</p>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    );
};

export default IndustryService;