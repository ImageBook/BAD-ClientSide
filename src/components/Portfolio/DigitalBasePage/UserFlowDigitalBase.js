import React from 'react';
import img from '../../../images/Digital_Base/Userflow _ Wireflow.png';

const UserFlowDigitalBase = () => {
    return (
        <div className='mb-28 lg:mb-40'>
            <p className='font-black uppercase text-[46px] lg:text-[75px] 2xl:text-[90px] tracking-wide'>Userflow</p>
            <p className='text-[15px] w-full lg:w-1/2'>The goal of DiGiTAL BASE is to make people more engaging to each other. The client wanted to engage people by sharing reviews about nearby people so that people get more socially active.</p>
            <div className='flex items-start justify-center mt-16'>
                <img className='rounded-lg shadow' src={img} alt="" />
            </div>
        </div>
    );
};

export default UserFlowDigitalBase;