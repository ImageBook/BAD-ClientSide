import React from 'react';
import { HashLink } from 'react-router-hash-link';

const ExperiencedDevs = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40 text-[#383841]'>
            <div className='flex flex-col lg:flex-row items-start justify-center gap-6 md:gap-10'>
                <div className='w-full lg:w-1/2 space-y-4'>
                    <img className='rounded-lg' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/iPhone-design-illustration.png" alt="" />
                    <p className='text-[32px] lg:text-[44px] font-medium leading-tight lg:leading-none pb-3'><span className='font-semibold'>Experienced</span> iOS App Developers</p>
                    <HashLink to='/#contact' smooth>
                        <button className='w-40 rounded-lg py-2 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition-colors duration-1000 ease-in-out font-bold tracking-wide'>Contact Us</button>
                    </HashLink>
                </div>
                <div className='w-full lg:w-1/2 mx-auto space-y-4 lg:space-y-10'>
                    <p className='text-lg lg:text-[22px]'>BAD (Best App Dev) is one of the few iOS app development companies that work with you through the full application lifecycle. From business consulting, mobile app design, and custom app development, to marketing and promotion—we got you covered.
                    </p>
                    <p className='text-lg lg:text-[22px]'>Apps allow customers to be connected to your company 24/7, and act as a prominent marketing/sales channel. For example, if a product goes on sale, you can push a notification that will appear on a potential customer's phone in the instant of the discount.</p>
                    <p className='text-lg lg:text-[22px]'>Our team of professional app developers and creative designers will build you a successful iPhone application. Let's do it!</p>
                </div>
            </div>
        </div>
    );
};

export default ExperiencedDevs;