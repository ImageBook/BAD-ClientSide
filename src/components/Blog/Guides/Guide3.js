import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import ServiceContact from '../../Services/ServiceContact';
import ServiceFooter from '../../Services/ServiceFooter';

const Guide3 = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10 text-[#383841]'>
                <p className='w-full md:w-1/2 mx-auto text-left font-bold leading-none text-[40px] lg:text-[52px] mb-6'>How to find iPhone's UDID</p>
                <div className='w-full md:w-1/2 mx-auto mb-8'>
                    <div className='flex space-x-3 items-center'>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#development</p>
                        </div>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#guides</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mb-8'>
                    <img className='rounded-lg' src="https://messapps.com/wp-content/uploads/2016/08/ali-hajian-LPylXWfMpgE-unsplash-1200x487.jpg" alt="" />
                </div>
                <div className='w-full md:w-1/2 mx-auto text-lg lg:text-xl'>
                    <p className='font-semibold text-3xl mb-4'>How to Find Your UDID with Mac</p>
                    <p className='mb-4'>1. Connect your iPhone to Mac.</p>
                    <p className='mb-2'>2. Go to About This Mac.</p>
                    <p className='mb-2'>3. Click on System Report and by USB.</p>
                    <p className='mb-2'>4. Under the USB 3.0 Bus, you’ll see your iPhone between all the other USB devices connected to your Mac.</p>
                    <p className='mb-2'>5. Select your iPhone from the bottom part of the window, copy the Serial Number (you may need to add a dash (-) after the eighth digit in the serial number)</p>
                    
                </div>
                <ServiceContact></ServiceContact>
                <ServiceFooter></ServiceFooter>
            </div>
        </div>
    );
};

export default Guide3;