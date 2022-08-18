import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import ServiceContact from '../../Services/ServiceContact';
import ServiceFooter from '../../Services/ServiceFooter';

const CaseStudies4 = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10 text-[#383841]'>
                <p className='w-full md:w-1/2 mx-auto text-left font-bold leading-none text-[40px] lg:text-[52px] mb-6'>Recent Media Mentions For Apps Built By Best App Dev</p>
                <div className='w-full md:w-1/2 mx-auto mb-8'>
                    <div className='flex space-x-3 items-center'>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#casestudies</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mb-8'>
                    <img className='rounded-lg' src="https://messapps.com/wp-content/uploads/2019/03/dragonfruit-1200x880.jpg" alt="" />
                </div>
                <div className='w-full md:w-1/2 mx-auto text-lg lg:text-xl'>
                    <p className='mb-4'>Best App Dev team has won numerous prizes and awards for app & web design in the last couple of years. We decided to boast a bit about our successes - we believe it is allowed, when your work gets published on TechCrunch, Mashable and other major media.</p>
                    <p className='mb-8'>Let us start with Reefill - an app that changes the way you interact with water, which has been mentioned on TechCrunch in 2017. Actually, Reefill provokes you to drink more tap water so that you could contribute to saving our planet from plastic bottles. This system lets you refill your water bottle in one of the cafes, coffee shops or any other approved locations in New York for free. Normally, you would get this water from water fountains, however, these are quite dirty in NYC. We, at BAD, managed to create a mobile application for Reefill and guys are actively using it, as we see from the statistics available to developers.</p>
                    <p className='mb-4'>CarPo, an app for college students to travel together was invented by Alec Aronwald in summer of 2017, when it was nearly impossible to travel easily in New Jersey, since many of traditional transport ways have been closed. During the same time it's been mentioned by FOX5 as one of the promising services of that summer. The service connects New Jersey drivers with commuters who have to get to NYC every single day, most of which are students getting to colleges. Together with Alec, we designed and developed CarPo's landing page and mobile app for both iOS & Android. </p>

                </div>
                <ServiceContact></ServiceContact>
                <ServiceFooter></ServiceFooter>
            </div>
        </div>
    );
};

export default CaseStudies4;