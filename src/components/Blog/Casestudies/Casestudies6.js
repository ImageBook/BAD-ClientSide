import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import ServiceContact from '../../Services/ServiceContact';
import ServiceFooter from '../../Services/ServiceFooter';

const CaseStudies6 = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10 text-[#383841]'>
                <p className='w-full md:w-1/2 mx-auto text-left font-bold leading-none text-[40px] lg:text-[52px] mb-6'>Restaurant Apps - A Closer Look At The Numbers</p>
                <div className='w-full md:w-1/2 mx-auto mb-8'>
                    <div className='flex space-x-3 items-center'>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#casestudies</p>
                        </div>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#strategy</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mb-8'>
                    <img className='rounded-lg' src="https://messapps.com/wp-content/uploads/2016/06/rod-long-I79Pgmhmy5M-unsplash-1200x449.jpg" alt="" />
                </div>
                <div className='w-full md:w-1/2 mx-auto text-lg lg:text-xl'>
                    <p className='mb-4'>As more and more customers plug into the grid, your restaurant’s internet presence becomes that much more crucial.
                        OpenTable an app with a 4.5 star rating and over 50,000+ reviews that lets users make reservations at local restaurants – conducted a survey in 2015 to help restaurants understand how diners would like their mobile apps to function. Over 6,000 adults were surveyed in different metropolitan areas around the United States and approximately 76% of those surveyed agreed that incorporating technology into their dining experience would be a tremendous improvement.</p>
                    <p className='mb-4'>To debunk what restaurants think diners might expect out of the restaurant’s app, a surprising 86% of respondents could not see themselves pre-ordering a meal and an even higher 88% said they probably wouldn’t make a purchase beforehand. So what are some of the things diners seek in mobile apps? The results were surprisingly unanimous:</p>
                    <p className='mb-4'>87% wanted an app that could find local restaurants
                        86% simply wished to view a restaurant’s menu
                        85% wanted to know how long the wait would be
                        83% wished they could add themselves to the wait-list before arriving
                        68% thought it’d be convenient to choose their own table
                        60% wanted to read reviews for the restaurant
                        48% would prefer to read reviews from professional critics</p>
                    <p className='mb-4'>Diners seem to have nothing but great things to say about technology, so why not plug into the grid with an app of your own? If you aren’t already aware, the large majority of restaurants are adapting touch-screen technology into their services to help both improve and expedite the ordering process.</p>

                </div>
                <ServiceContact></ServiceContact>
                <ServiceFooter></ServiceFooter>
            </div>
        </div>
    );
};

export default CaseStudies6;