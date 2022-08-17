import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import ServiceFooter from '../../Services/ServiceFooter';
import DesignColio from './DesignColio';
import IdeaColio from './IdeaColio';
import WireframesColio from './WireframesColio';

const ColioPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto mt-10 mb-44 lg:mt-40 lg:mb-52 text-[#383841]'>
                <div className='flex flex-col items-center justify-center lg:-mt-36'>
                    <p className='text-[40px] lg:text-[56px] font-extrabold mb-3'>Colio</p>
                    <img className='w-[220px] lg:w-[260px] mb-16 lg:mb-24' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/phone-halsa-small-left-top2x.svg" alt="" />
                </div>
                <IdeaColio></IdeaColio>
                <WireframesColio></WireframesColio>
                <DesignColio></DesignColio>
            </div>
            <ServiceFooter></ServiceFooter>
        </div>
    );
};

export default ColioPage;