import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import ServiceFooter from '../../Services/ServiceFooter';
import BrandingRunon from './BrandingRunon';
import DesignRunon from './DesignRunon';
import FeaturesRunon from './FeaturesRunon';
import IdeaRunon from './IdeaRunon';
import ThanksRunon from './ThanksRunon';
import WireframeRunon from './WireframeRunon';

const RunonPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto mt-10 mb-44 lg:mt-40 lg:mb-52 text-[#383841]'>
                <div className='flex items-center justify-center '>
                    <img className='w-[220px] lg:w-[260px] lg:-mt-28 mb-16 lg:mb-24' src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-mock-up-main@2x.svg" alt="" />
                </div>
                <IdeaRunon></IdeaRunon>
                <WireframeRunon></WireframeRunon>
                <DesignRunon></DesignRunon>
                <FeaturesRunon></FeaturesRunon>
                <BrandingRunon></BrandingRunon>
                <ThanksRunon></ThanksRunon>
            </div>
            <ServiceFooter></ServiceFooter>
        </div>
    );
};

export default RunonPage;