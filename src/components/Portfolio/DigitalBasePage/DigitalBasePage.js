import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import ServiceFooter from '../../Services/ServiceFooter';
import img from '../../../images/Digital_Base/Homescreen (A).png'
import IdeaDigitalBase from './IdeaDigitalBase';
import UserFlowDigitalBase from './UserFlowDigitalBase';
import DesignDigitalBase from './DesignDigitalBase';

const DigitalBasePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto mt-10 mb-44 lg:mt-40 lg:mb-52 text-[#383841]'>
                <div className='flex items-center justify-center '>
                    <img className='w-[220px] lg:w-[260px] lg:-mt-28 mb-16 lg:mb-24 rounded-xl shadow-xl shadow-slate-400' src={img} alt="" />
                </div>
                <IdeaDigitalBase></IdeaDigitalBase>
                <UserFlowDigitalBase></UserFlowDigitalBase>
                <DesignDigitalBase></DesignDigitalBase>
            </div>
            <ServiceFooter></ServiceFooter>
        </div>
    );
};

export default DigitalBasePage;