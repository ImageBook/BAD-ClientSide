import React from 'react';
import { CgArrowLongDown } from 'react-icons/cg';
import Navbar from '../Home/Navbar/Navbar';
import AllServices from './AllServices/AllServices';
import DevProcess from './DevProcess';
import Heading from './Heading';
import IndustryService from './IndustryService';
import OurClients from './OurClients';
import OurWork from './OurWork';
import WhyBest from './WhyBest';

const Services = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='hidden lg:block'>
                <div className='flex gap-2 items-center tracking-wider fixed top-28 font-bold right-0 rotate-90 hover:text-[#550b57] hover:cursor-pointer'>
                    <CgArrowLongDown className='-rotate-90 w-10 h-10'></CgArrowLongDown>
                    GET PROPOSAL
                </div>
            </div>
            <Heading></Heading>
            <AllServices></AllServices>
            <DevProcess></DevProcess>
            <OurWork></OurWork>
            <OurClients></OurClients>
            <WhyBest></WhyBest>
            <IndustryService></IndustryService>
        </div>
    );
};

export default Services;