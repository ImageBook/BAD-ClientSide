import React from 'react';
import Navbar from './Navbar/Navbar';
import { CgArrowLongDown } from 'react-icons/cg';
import Hero from './Hero/Hero';
import GroundCentral from './GroundCentral/GroundCentral';
import Runon from './Runon/Runon';
import Cakemix from './Cakemix/Cakemix';
import { GoPrimitiveDot } from 'react-icons/go';
import { TbCircleDot } from 'react-icons/tb';
import { HashLink } from 'react-router-hash-link';
import HomeServices from './HomeServices/HomeServices';
import Clients from './Clients/Clients';
import GetProposal from './GetProposal/GetProposal';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='hidden lg:block'>
                <div className='flex gap-2 items-center tracking-wider fixed top-28 font-bold right-0 rotate-90 hover:text-[#550b57] hover:cursor-pointer'>
                    <CgArrowLongDown className='-rotate-90 w-10 h-10'></CgArrowLongDown>
                    GET PROPOSAL
                </div>
            </div>
            <div className='hidden lg:block'>
                <div className='fixed bottom-16 left-16   '>
                    <HashLink to='/#ground-central' smooth><GoPrimitiveDot className='w-[14px] h-[14px] mb-1 text-[#550b57] hover:text-[#b217b8]'></GoPrimitiveDot></HashLink>
                    <HashLink to='/#runon' smooth><GoPrimitiveDot className='w-[14px] h-[14px] mb-1 text-[#550b57] hover:text-[#b217b8]'></GoPrimitiveDot></HashLink>
                    <HashLink to='/#cakemix' smooth><GoPrimitiveDot className='w-[14px] h-[14px] text-[#550b57] hover:text-[#b217b8]'></GoPrimitiveDot></HashLink>
                </div>
            </div>
            <Hero></Hero>
            <GroundCentral></GroundCentral>
            <Runon></Runon>
            <Cakemix></Cakemix>
            <HomeServices></HomeServices>
            <Clients></Clients>
            <GetProposal></GetProposal>
            <Footer></Footer>
        </div>
    );
};

export default Home;