import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineLine} from 'react-icons/ai';

const ServiceContact = () => {
    const handleContact = event => {
        event.preventDefault();
        event.target.reset();
    }

    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-20 lg:my-48'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0'>
                <div className='w-full lg:w-1/2'>
                    <p className='text-center lg:text-left font-black text-[49px] lg:text-[56px] 2xl:text-[75px] text-[#383841] leading-tight'>Make Your</p>
                    <p className='text-center lg:text-left font-black text-[49px] lg:text-[56px] 2xl:text-[75px] text-[#383841] leading-tight lg:-mt-3'>Dream a Reality</p>
                    <p className='text-[#383841] text-lg xl:text-xl text-center lg:text-left mt-2'>At Textapps, we don't just develop apps. We build dreams. Let's build yours!</p>
                </div>
                <div className='w-full lg:w-1/2 mx-auto'>
                    <form onSubmit={handleContact} className='flex flex-col items-center justify-center space-y-3 mt-6'>
                        <input className='w-80 lg:w-[400px] 2xl:w-[500px] h-16 border border-gray-500 rounded p-2 focus:outline-none' type="text" name="" id="" placeholder='Your Name *' required />
                        <input className='w-80 lg:w-[400px] 2xl:w-[500px] h-16 border border-gray-500 rounded p-2 focus:outline-none' type="email" name="" id="" placeholder='Your Email *' required />
                        <input className='w-80 lg:w-[400px] 2xl:w-[500px] h-16 border border-gray-500 rounded p-2 focus:outline-none' type="text" name="" id="" placeholder='Subject *' required />
                        <textarea className='w-80 lg:w-[400px] 2xl:w-[500px] h-28 border border-gray-500 rounded p-2 focus:outline-none mb-2' name="" id="" placeholder='Your Message *' required></textarea>
                        <div className='pt-2 lg:-ml-60 2xl:-ml-[340px]'>
                            <button type='submit' className='w-40 rounded-lg py-3 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition-colors duration-1000 ease-in-out font-bold uppercase tracking-wide'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='mt-20 lg:mt-32 flex items-center space-x-2'>
                <Link to='/'><p className='text-[15px] text-[#383841] tracking-wider font-medium'>Home</p></Link>
                <AiOutlineLine className='rotate-90 text-gray-600 w-5 h-5'></AiOutlineLine>
                <p className='font-bold text-[15px] text-[#383841] tracking-wider'>Services</p>
            </div>
        </div>
    );
};

export default ServiceContact;