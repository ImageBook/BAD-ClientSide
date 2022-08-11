import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Navbar from '../Home/Navbar/Navbar';
import { CgArrowLongDown } from 'react-icons/cg';
import Runon from './Runon';
import ServiceContact from '../Services/ServiceContact';
import ServiceFooter from '../Services/ServiceFooter';
import Halsa from './Halsa';
import ArDart from './ArDart';
import GroundCentral from './GroundCentral';
import Reefill from './Reefill';
import Cakemix from './Cakemix';

const Portfolio = () => {
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
            <Runon></Runon>
            <Halsa></Halsa>
            <ArDart></ArDart>
            <GroundCentral></GroundCentral>
            <Reefill></Reefill>
            <Cakemix></Cakemix>
            <ServiceContact></ServiceContact>
            <ServiceFooter></ServiceFooter>
        </div>
    );
};

export default Portfolio;