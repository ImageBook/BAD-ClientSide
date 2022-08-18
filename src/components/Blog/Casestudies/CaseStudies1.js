import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import ServiceContact from '../../Services/ServiceContact';
import ServiceFooter from '../../Services/ServiceFooter';

const CaseStudies1 = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10 text-[#383841]'>
                <p className='w-full md:w-1/2 mx-auto text-left font-bold leading-none text-[40px] lg:text-[52px] mb-6'>How We Helped Ground Central Coffee Double Their Revenue</p>
                <div className='w-full md:w-1/2 mx-auto mb-8'>
                    <div className='flex space-x-3 items-center'>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#casestudies</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mb-8'>
                    <img className='rounded-lg' src="https://messapps.com/wp-content/uploads/2018/09/GC.png" alt="" />
                </div>
                <div className='w-full md:w-1/2 mx-auto text-lg lg:text-xl'>
                    <p className='mb-4'>As coffee shop apps continue to become more popular and widely adopted, we felt it would be the perfect moment to take you through the journey of this particular successful app and look at its various features from conception to delivery, and how it resulted in such a successful outcome. The Ground Central Coffee app contained all of the essential app features we'd recommend for any cafe or small food and drinks businesses - so if you are seeking a custom app for a company in this particular industry, it's a fantastic example of how such apps can be easy to implement. What's more, this case study shows how to bring about great rewards, while enhancing the loyalty of your customers and their brand awareness for your business. Read on to find out more!</p>
                    <p className='font-semibold text-3xl mb-4'>The Client Requests</p>
                    <p className='mb-8'>When Ground Central Coffee got in touch with the Messapps custom app development team, they had a clear set of objections in mind. They felt (and we heartily agreed) that the key to increasing their revenue and profits lay in a trio of fundamental factors. These were:
                        Reducing customer waiting times and lines;
                        Introducing a rewards system to offer loyal customers freebies and discounts;
                        Creating a community around the coffee chain.</p>
                    <p className='font-semibold text-3xl mb-4'>Branding</p>
                    <p className='mb-4'>One of the first things we needed to consider when working on the Ground Central Coffee app was how to include the company branding in the app itself. Luckily, this particular coffee shop was already well established, and had a clear and distinctive image that we could work with - and creating that seamless connection (between the physical coffee shop and the virtual space of the app) is key to the success of any app of this kind.

                        With their bold, modern, and avant-garde monochrome color palette, and clear use of certain fonts and typefaces, it wasn't much of a challenge to bring the Ground Central Coffee themes and branding into the app itself. The result templates for the app, therefore, were as distinctive as the branding of the cafe and helped to boost that sense of connection between the custom app and the coffee drinker's 'real world' experience.</p>

                </div>
                <ServiceContact></ServiceContact>
                <ServiceFooter></ServiceFooter>
            </div>
        </div>
    );
};

export default CaseStudies1;