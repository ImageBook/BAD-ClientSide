import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import ServiceContact from '../../Services/ServiceContact';
import ServiceFooter from '../../Services/ServiceFooter';

const CaseStudies2 = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10 text-[#383841]'>
                <p className='w-full md:w-1/2 mx-auto text-left font-bold leading-none text-[40px] lg:text-[52px] mb-6'>Mobile Apps That Can Save Your Life</p>
                <div className='w-full md:w-1/2 mx-auto mb-8'>
                    <div className='flex space-x-3 items-center'>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#casestudies</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mb-8'>
                    <img className='rounded-lg' src="https://messapps.com/wp-content/uploads/2019/05/bg-monitor-1200x834.jpg" alt="" />
                </div>
                <div className='w-full md:w-1/2 mx-auto text-lg lg:text-xl'>
                    <p className='mb-4'>We at Best App Dev have selected 5 apps that could help you track your medical information, nutrition, and, potentially, even save your life if you're suffering from diabetes:</p>
                    <p className='mb-4'>1. Fooducate - an application that allows you to eliminate unhealthy foods from your everyday diet. The app is also incredibly easy-to-use as you only need to scan a barcode on the product you eat or drink in order to know whether it is healthy or not.</p>
                    <p className='mb-4'>2. Glooko - this app helps you monitor your medications & the amount of carbs you have in your nutrition plan. It also integrates with fitness trackers and glucose meters so that you can monitor your health situation live.</p>
                    <p className='mb-4'>3. Diabetes: M - this app lets you track sugar level in your blood, as well as many other factors related to your health. Within this app, you can set reminders to check your blood sugar and log exercise time.</p>
                    <p className='mb-4'>4. BG Monitor - through this app you can monitor insulin level in your blood, as well as the blood pressure you have at the moment. The good side of the app is that it can work with both US and international units of measurement, and it also integrates with multiple glucometers and insulin pumps to stock your medical data.</p>

                </div>
                <ServiceContact></ServiceContact>
                <ServiceFooter></ServiceFooter>
            </div>
        </div>
    );
};

export default CaseStudies2;