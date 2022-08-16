import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';

const ColioPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto mt-10 mb-44 lg:mt-40 lg:mb-52 text-[#383841]'>
                <div className='flex items-center justify-center '>
                    <p className='font-bold text-[35px] md:text-[40px] lg:text-[56px]'>Coming Soon...</p>
                </div>
            </div>
        </div>
    );
};

export default ColioPage;