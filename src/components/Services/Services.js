import React from 'react';
import { CgArrowLongDown } from 'react-icons/cg';
import { HashLink } from 'react-router-hash-link';
import Navbar from '../Home/Navbar/Navbar';
import AllServices from './AllServices/AllServices';
import BreadcumbService from './BreadcumbService';
import ClientReview from './ClientReview';
import DevProcess from './DevProcess';
import Heading from './Heading';
import IndustryService from './IndustryService';
import OurClients from './OurClients';
import OurWork from './OurWork';
import ServiceContact from './ServiceContact';
import ServiceFooter from './ServiceFooter';
import WhyBest from './WhyBest';


const Services = () => {

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
            <AllServices></AllServices>
            <DevProcess></DevProcess>
            <OurWork></OurWork>
            <OurClients></OurClients>
            <WhyBest></WhyBest>
            <IndustryService></IndustryService>
            <ClientReview></ClientReview>
            <ServiceContact></ServiceContact>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-20 lg:my-40'>
                <BreadcumbService></BreadcumbService>
            </div>
            <ServiceFooter></ServiceFooter>
        </div>
    );
};

export default Services;