import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import ServiceFooter from '../../Services/ServiceFooter';
import DesignReefill from './DesignReefill';
import Feature1Reefill from './Feature1Reefill';
import Features2Reefill from './Features2Reefill';
import FeaturesReefill from './FeaturesReefill';
import IdeaReefill from './IdeaReefill';
import ThanksReefill from './ThanksReefill';
import WireframesReefill from './WireframesReefill';

const ReefillPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto mt-10 mb-44 lg:mt-40 lg:mb-52 text-[#383841]'>
                <div className='flex items-center justify-center'>
                    <img className='w-[220px] lg:-mt-28 mb-16 lg:mb-24' src="https://messapps.com/wp-content/themes/twentysixteen/samples/reefill/reefill-phone.png" alt="" />
                </div>
                <IdeaReefill></IdeaReefill>
                <WireframesReefill></WireframesReefill>
                <DesignReefill></DesignReefill>
                <FeaturesReefill></FeaturesReefill>
                <Feature1Reefill></Feature1Reefill>
                <Features2Reefill></Features2Reefill>
                <ThanksReefill></ThanksReefill>
            </div>
            <ServiceFooter></ServiceFooter>
        </div>
    );
};

export default ReefillPage;