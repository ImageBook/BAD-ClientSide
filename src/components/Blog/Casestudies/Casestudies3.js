import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import ServiceContact from '../../Services/ServiceContact';
import ServiceFooter from '../../Services/ServiceFooter';

const CaseStudies3 = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10 text-[#383841]'>
                <p className='w-full md:w-1/2 mx-auto text-left font-bold leading-none text-[40px] lg:text-[52px] mb-6'>Business Uberization — A Full How-To Guide</p>
                <div className='w-full md:w-1/2 mx-auto mb-8'>
                    <div className='flex space-x-3 items-center'>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#casestudies</p>
                        </div>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#guides</p>
                        </div>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#strategy</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mb-8'>
                    <img className='rounded-lg' src="https://messapps.com/wp-content/uploads/2019/05/Screenshot-2019-05-13-at-17.31.10-1200x574.png" alt="" />
                </div>
                <div className='w-full md:w-1/2 mx-auto text-lg lg:text-xl'>
                    <p className='font-semibold text-3xl mb-4'>You must have heard of Uber</p>
                    <p className='mb-4'>Uber is an app that allows you to order a cab to ride from one place to another in minutes. Uber's business model is a bit different than a taxi service's though. The main idea of Uber, as a business, is about the facilitation of peer-to-peer transactions between service providers and customers. Usually, this facilitation is enabled through a special mobile or web service, connected to both clients and providers. This kind of business is viable for transportation companies, the hospitality industry, project funding, retail, and even some of the service companies. This kind of project usually embraces the idea of individual entrepreneurs or small businesses, which is very interesting for the younger generation entering the labor market.</p>
                    <p className='mb-8'>Moreover, a record-breaking number of people work in the service sector than ever before. In developed countries, this number comes closer to 2/3 of the labor market. Therefore, “Uberized” businesses in the service economic sector usually enjoy the highest profits.</p>
                    <p className='font-semibold text-3xl mb-4'>So what do you need to do in order to “Uberize” your business? Here are the main three steps:</p>
                    <p className='mb-4'>Your business needs to have a possibility of real-time booking which involves the estimated time of arrival of your service so that the client could be ready to meet with the service provider. Your business needs to provide a seamless experience from mobile and web applications - cashless payments would be a great advantage! Your company needs to ensure there is a rating system to enable the best clients to interact with the best workers so that both parties share the best possible experience. </p>

                </div>
                <ServiceContact></ServiceContact>
                <ServiceFooter></ServiceFooter>
            </div>
        </div>
    );
};

export default CaseStudies3;