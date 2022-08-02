import React from 'react';
import Navbar from './Navbar/Navbar';
import { CgArrowLongDown } from 'react-icons/cg';
import Hero from './Hero/Hero';
import GroundCentral from './GroundCentral/GroundCentral';

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
            <Hero></Hero>
            <GroundCentral></GroundCentral>
        </div>
    );
};

export default Home;