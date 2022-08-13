import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import ServiceFooter from '../../Services/ServiceFooter';
import DesignCakemix from './DesignCakemix';
import Feature1Cakemix from './Feature1Cakemix';
import Feature2Cakemix from './Feature2Cakemix';
import FeaturesCakemix from './FeaturesCakemix';
import IdeaCakemix from './IdeaCakemix';
import ReviewCakemix from './ReviewCakemix';
import ThanksCakemix from './ThanksCakemix';
import WireframesCakemix from './WireframesCakemix';

const CakemixPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto mt-10 mb-44 lg:mt-40 lg:mb-52 text-[#383841]'>
                <div className='flex items-center justify-center'>
                    <img className='w-[220px] lg:w-[260px] lg:-mt-28 mb-16 lg:mb-24' src="https://messapps.com/wp-content/themes/twentysixteen/samples/cakemix/iphone-x-dark@2x.svg" alt="" />
                </div>
                <IdeaCakemix></IdeaCakemix>
                <WireframesCakemix></WireframesCakemix>
                <DesignCakemix></DesignCakemix>
                <FeaturesCakemix></FeaturesCakemix>
                <Feature1Cakemix></Feature1Cakemix>
                <Feature2Cakemix></Feature2Cakemix>
                <ReviewCakemix></ReviewCakemix>
                <ThanksCakemix></ThanksCakemix>
            </div>
            <ServiceFooter></ServiceFooter>
        </div>
    );
};

export default CakemixPage;