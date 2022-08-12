import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import ServiceFooter from '../../Services/ServiceFooter';
import ApproachHalsa from './ApproachHalsa';
import DesignHalsa from './DesignHalsa';
import FeaturesHalsa from './FeaturesHalsa';
import IdeaHalsa from './IdeaHalsa';
import ReviewHalsa from './ReviewHalsa';
import ThanksHalsa from './ThanksHalsa';
import WireframeHalsa from './WireframeHalsa';

const HalsaPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto mt-10 mb-44 lg:mt-40 lg:mb-52 text-[#383841]'>
                <div className='flex items-center justify-center '>
                    <img className='w-[220px] lg:w-[260px] lg:-mt-28 mb-16 lg:mb-24' src="https://messapps.com/wp-content/themes/twentysixteen/samples/halsa-life/phone@2x.svg" alt="" />
                </div>
                <IdeaHalsa></IdeaHalsa>
                <WireframeHalsa></WireframeHalsa>
                <DesignHalsa></DesignHalsa>
                <ApproachHalsa></ApproachHalsa>
                <FeaturesHalsa></FeaturesHalsa>
                <ReviewHalsa></ReviewHalsa>
                <ThanksHalsa></ThanksHalsa>
            </div>
            <ServiceFooter></ServiceFooter>
        </div>
    );
};

export default HalsaPage;