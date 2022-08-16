import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import { FaUserCircle } from 'react-icons/fa';
import ServiceContact from '../Services/ServiceContact';
import ServiceFooter from '../Services/ServiceFooter';

const AnnouncementBlog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10 text-[#383841]'>
                <p className='w-full md:w-1/2 mx-auto text-left font-bold leading-none text-[40px] lg:text-[52px] mb-6'>Great announcement!</p>
                <div className='w-full md:w-1/2 mx-auto mb-8'>
                    <div className='flex flex-wrap space-y-3 space-x-3 items-center'>
                        <FaUserCircle className='w-12 h-12 text-gray-400'></FaUserCircle>
                        <p className='text-xl font-medium pr-8'>Jaque Kallis</p>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#allcategories</p>
                        </div>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#guides</p>
                        </div>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#marketing</p>
                        </div>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#strategy</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mb-10'>
                    <img className='rounded-lg' src="https://messapps.com/wp-content/uploads/2021/12/cryptocurrency-1200x423.jpg" alt="" />
                </div>
                <div className='w-full md:w-1/2 mx-auto text-lg lg:text-xl'>
                    <p className='mb-4'>Starting October 2021, BAD (Best App Dev) accept cryptocurrency for payments!</p>
                    <p className='mb-4'>There are over 79 million cryptocurrency users worldwide, at the end of 2021, according to Statista.</p>
                    <p className='mb-4'>By January 2020, the number of places that accept cryptocurrency increased to 10 000 (according to Coinmap.org). Europe and the United States have become leaders in cryptocurrency adoption as a means of payment for goods and services. For example, in Italy, paying for online purchases with Bitcoin is more popular today than paying with Visa, Mastercard, and American Express.</p>
                    <p className='mb-8'>Here at BAD (Best App Dev), we always try to keep up with the times, so we decided to be the first app development company with cryptocurrency payments receiving. To make life easier for our clients, we accept any reliable currency, not only Bitcoins.</p>
                </div>
                <ServiceContact></ServiceContact>
                <ServiceFooter></ServiceFooter>
            </div>
        </div>
    );
};

export default AnnouncementBlog;