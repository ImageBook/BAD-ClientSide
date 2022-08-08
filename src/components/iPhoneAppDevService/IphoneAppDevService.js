import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Navbar from '../Home/Navbar/Navbar';
import { CgArrowLongDown } from 'react-icons/cg';
import Heading from './Heading';
import WhyChooseTextapps from './WhyChooseTextapps';
import DevProcess from '../Services/DevProcess';
import DevServices from './DevServices';
import IPhoneAppPortfolio from './IPhoneAppPortfolio';
import ExperiencedDevs from './ExperiencedDevs';
import AppsForDevices from './AppsForDevices';
import ClientReview from '../Services/ClientReview';
import IndustryService from '../Services/IndustryService';
import OurClients from '../Services/OurClients';
import GetProposal from '../Home/GetProposal/GetProposal';
import ServiceContact from '../Services/ServiceContact';
import { Link } from 'react-router-dom';
import { AiOutlineLine } from 'react-icons/ai';
import ServiceFooter from '../Services/ServiceFooter';

const IphoneAppDevService = () => {
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
            <Heading></Heading>
            <WhyChooseTextapps></WhyChooseTextapps>
            <DevProcess></DevProcess>
            <DevServices></DevServices>
            <IPhoneAppPortfolio></IPhoneAppPortfolio>
            <ExperiencedDevs></ExperiencedDevs>
            <AppsForDevices></AppsForDevices>
            <ClientReview></ClientReview>
            <IndustryService></IndustryService>
            <OurClients></OurClients>
            <ServiceContact></ServiceContact>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-20 lg:my-28'>
                <div className='mt-20 lg:mt-32 flex items-center space-x-2'>
                    <Link to='/'><p className='text-[15px] text-[#383841] tracking-wider font-medium'>Home</p></Link>
                    <AiOutlineLine className='rotate-90 text-gray-600 w-5 h-5'></AiOutlineLine>
                    <Link to='/services'><p className='text-[15px] text-[#383841] tracking-wider font-medium'>Services</p></Link>
                    <AiOutlineLine className='rotate-90 text-gray-600 w-5 h-5'></AiOutlineLine>
                    <p className='font-bold text-[15px] text-[#383841] tracking-wider'>iPhone App Development</p>
                </div>
            </div>
            <ServiceFooter></ServiceFooter>
        </div>
    );
};

export default IphoneAppDevService;