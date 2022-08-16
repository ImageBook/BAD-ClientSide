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
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs';
import DigitalBase from './DigitalBase';
import Hirebuddy from './Hirebuddy';
import Colio from './Colio';
import Vpromise from './Vpromise';

const Portfolio = () => {
    // let component = 1;
    // const handleUp = () => {
    //     if (component > 1) {
    //         component--;
    //         console.log('component', component);
    //         window.scrollTo()
    //     }
    // }
    // const handleDown = () => {
    //     if (component < 6) {
    //         component++;
    //         console.log('component', component);
    //     }
    // }

    return (
        <div className=''>
            <Navbar></Navbar>
            <div className='hidden lg:block'>
                <HashLink to='/#contact' smooth>
                    <div className='flex gap-2 items-center tracking-wider fixed top-28 font-bold right-0 rotate-90 hover:text-[#550b57] hover:cursor-pointer'>
                        <CgArrowLongDown className='-rotate-90 w-10 h-10'></CgArrowLongDown>
                        GET PROPOSAL
                    </div>
                </HashLink>
            </div>
            {/* <div className='hidden lg:block'>
                <div className='flex flex-col space-y-2 fixed bottom-10 left-16'>
                    <div>
                        <HashLink to='/#`${component}`' smooth>
                            <BsChevronDoubleUp onClick={handleUp} className='w-8 h-8 bg-[#303035] text-white p-[6px] rounded-full hover:bg-black hover:cursor-pointer'></BsChevronDoubleUp>
                        </HashLink>
                    </div>
                    <div>
                        <BsChevronDoubleDown onClick={handleDown} className='w-8 h-8 bg-[#303035] text-white p-[6px] rounded-full hover:bg-black hover:cursor-pointer'></BsChevronDoubleDown>
                    </div>
                </div>
            </div> */}
            <DigitalBase></DigitalBase>
            <Hirebuddy></Hirebuddy>
            <Colio></Colio>
            <Vpromise></Vpromise>
            {/* <Runon></Runon> */}
            {/* <Halsa></Halsa> */}
            {/* <ArDart></ArDart> */}
            {/* <GroundCentral></GroundCentral> */}
            {/* <Reefill></Reefill> */}
            {/* <Cakemix></Cakemix> */}
            <ServiceContact></ServiceContact>
            <ServiceFooter></ServiceFooter>
        </div>
    );
};

export default Portfolio;