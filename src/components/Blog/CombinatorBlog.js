import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
// import { FaUserCircle } from 'react-icons/fa';
import ServiceContact from '../Services/ServiceContact';
import ServiceFooter from '../Services/ServiceFooter';

const CombinatorBlog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10 text-[#383841]'>
                <p className='w-full md:w-1/2 mx-auto text-left font-bold leading-none text-[40px] lg:text-[52px] mb-6'>Our client got accepted to Y Combinator!</p>
                <div className='w-full md:w-1/2 mx-auto mb-8'>
                    <div className='flex space-x-3 items-center'>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#allcategories</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mb-12'>
                    <img className='rounded-lg' src="https://messapps.com/wp-content/uploads/2022/02/Y-our-client-1200x400.png" alt="" />
                </div>
                <div className='w-full md:w-1/2 mx-auto text-lg lg:text-xl'>
                    <p className='mb-4'>We are happy to share some really great news. Our client Aeon just got accepted to Y Combinator!</p>
                    <p className='mb-4'>Y Combinator is the top Startup Incubator in the world! Airbnb, Coinbase, Dropbox, Stripe, Zapier, Reddit, and many more came from Y Combinator! Now Aeon has a chance to become a multi-billion company.</p>
                    <p className='mb-4'>We are very proud to be a part of this remarkable project!</p>
                    
                </div>
                <ServiceContact></ServiceContact>
                <ServiceFooter></ServiceFooter>
            </div>
        </div>
    );
};

export default CombinatorBlog;