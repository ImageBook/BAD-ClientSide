import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import ServiceFooter from '../../Services/ServiceFooter';
import ReviewHalsa from '../HalsaPage/ReviewHalsa';
import DesignGround from './DesignGround';
import IdeaGround from './IdeaGround';
import NewsGround from './NewsGround';
import OrderGround from './OrderGround';
import ReviewGround from './ReviewGround';
import RewardsGround from './RewardsGround';
import ThanksGround from './ThanksGround';
import WireframesGround from './WireframesGround';

const GroundCentralPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto mt-10 mb-44 lg:mt-40 lg:mb-52 text-[#383841]'>
                <div className='flex items-center justify-center'>
                    <img className='w-[220px] lg:w-[260px] lg:-mt-28 mb-16 lg:mb-24' src="https://messapps.com/wp-content/themes/twentysixteen/samples/ground-central/iphone-x-dark@2x.svg" alt="" />
                </div>
                <IdeaGround></IdeaGround>
                <WireframesGround></WireframesGround>
                <DesignGround></DesignGround>
                <OrderGround></OrderGround>
                <NewsGround></NewsGround>
                <RewardsGround></RewardsGround>
                <ReviewGround></ReviewGround>
                <ThanksGround></ThanksGround>
            </div>
            <ServiceFooter></ServiceFooter>
        </div>
    );
};

export default GroundCentralPage;