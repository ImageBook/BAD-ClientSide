import React from 'react';
import Navbar from './Navbar/Navbar';
import { CgArrowLongDown } from 'react-icons/cg';
import Hero from './Hero/Hero';
// import GroundCentral from './GroundCentral/GroundCentral';
// import Runon from './Runon/Runon';
// import Cakemix from './Cakemix/Cakemix';
import { GoPrimitiveDot } from 'react-icons/go';
// import { TbCircleDot } from 'react-icons/tb';
import { HashLink } from 'react-router-hash-link';
import HomeServices from './HomeServices/HomeServices';
import Clients from './Clients/Clients';
import GetProposal from './GetProposal/GetProposal';
// import Footer from './Footer/Footer';
import ServiceFooter from '../Services/ServiceFooter';
import DiGiTALBase from './DiGiTALBase/DiGiTALBase';
import Hirebuddy from './Hirebuddy/Hirebuddy';
import Colio from './Colio/Colio';

const Home = () => {
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
            <div className='bg-white'>
                <div className='hidden lg:block'>
                    <div className='fixed bottom-16 lg:left-3 xl:left-10 2xl:left-16'>
                        <HashLink to='/#digital-base' smooth><GoPrimitiveDot className='w-[14px] h-[14px] mb-1 text-[#550b57] hover:text-[#b217b8]'></GoPrimitiveDot></HashLink>
                        <HashLink to='/#hirebuddy' smooth><GoPrimitiveDot className='w-[14px] h-[14px] mb-1 text-[#550b57] hover:text-[#b217b8]'></GoPrimitiveDot></HashLink>
                        <HashLink to='/#colio' smooth><GoPrimitiveDot className='w-[14px] h-[14px] text-[#550b57] hover:text-[#b217b8]'></GoPrimitiveDot></HashLink>
                    </div>
                </div>
            </div>
            <Hero></Hero>
            {/* <GroundCentral></GroundCentral> */}
            <DiGiTALBase></DiGiTALBase>
            <Hirebuddy></Hirebuddy>
            <Colio></Colio>
            {/* <Runon></Runon> */}
            {/* <Cakemix></Cakemix> */}
            <HomeServices></HomeServices>
            <Clients></Clients>
            <GetProposal></GetProposal>
            {/* <Footer></Footer> */}
            <div className='mt-28'>
                <ServiceFooter></ServiceFooter>
            </div>
        </div>
    );
};

export default Home;