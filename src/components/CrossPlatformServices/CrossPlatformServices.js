import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Navbar from '../Home/Navbar/Navbar';
import { CgArrowLongDown } from 'react-icons/cg';
import Heading7 from './Heading7';
import BenefitsOfCrossPlatform from './BenefitsOfCrossPlatform';
import DevProcess from '../Services/DevProcess';
import WhyChoose7 from './WhyChoose7';
import IndustryService from '../Services/IndustryService';
import CrossPlatformIdeas from './CrossPlatformIdeas';
import OurWork from '../Services/OurWork';
import ClientReview from '../Services/ClientReview';
import ServiceContact from '../Services/ServiceContact';
import { Link } from 'react-router-dom';
import ServiceFooter from '../Services/ServiceFooter';
import { AiOutlineLine } from 'react-icons/ai';

const CrossPlatformServices = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='hidden lg:block'>
                <HashLink to='/#contact' smooth>
                    <div className='flex gap-2 items-center tracking-wider fixed top-28 font-bold right-0 rotate-90 hover:text-[#550b57] hover:cursor-pointer'>
                        <CgArrowLongDown className='-rotate-90 w-10 h-10'></CgArrowLongDown>
                        GET PROPOSAL
                    </div>
                </HashLink>
            </div>
            <Heading7></Heading7>
            <BenefitsOfCrossPlatform></BenefitsOfCrossPlatform>
            <DevProcess></DevProcess>
            <WhyChoose7></WhyChoose7>
            <IndustryService></IndustryService>
            <CrossPlatformIdeas></CrossPlatformIdeas>
            <OurWork></OurWork>
            <ClientReview></ClientReview>
            <ServiceContact></ServiceContact>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-20 lg:my-28'>
                <div className='mt-20 lg:mt-32 flex items-center space-x-2'>
                    <Link to='/'><p className='text-[15px] text-[#383841] tracking-wider font-medium'>Home</p></Link>
                    <AiOutlineLine className='rotate-90 text-gray-600 w-5 h-5'></AiOutlineLine>
                    <Link to='/services'><p className='text-[15px] text-[#383841] tracking-wider font-medium'>Services</p></Link>
                    <AiOutlineLine className='rotate-90 text-gray-600 w-5 h-5'></AiOutlineLine>
                    <p className='font-bold text-[15px] text-[#383841] tracking-wider'>Cross Platform</p>
                </div>
            </div>
            <ServiceFooter></ServiceFooter>
        </div>
    );
};

export default CrossPlatformServices;