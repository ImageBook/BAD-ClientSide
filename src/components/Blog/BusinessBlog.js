import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
// import { FaUserCircle } from 'react-icons/fa';
import ServiceContact from '../Services/ServiceContact';
import ServiceFooter from '../Services/ServiceFooter';

const BusinessBlog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10 text-[#383841]'>
                <p className='w-full md:w-1/2 mx-auto text-left font-bold leading-none text-[40px] lg:text-[52px] mb-6'>Business Intelligence in Mobile App Development</p>
                <div className='w-full md:w-1/2 mx-auto mb-8'>
                    <div className='flex space-x-3 items-center'>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#allcategories</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mb-10'>
                    <img className='rounded-lg' src="https://messapps.com/wp-content/uploads/2022/01/Business-Intelligence-1200x423.png" alt="" />
                </div>
                <div className='w-full md:w-1/2 mx-auto text-lg lg:text-xl'>
                    <p className='mb-4'>Business intelligence is an integrated software platform that is used for business data analysis and management. With the help of BI mobile app development, many businesses can analyze their data, without the help of any IT departments. Thus, BI mobile app development has taken mobile applications to a new level.</p>
                    <p className='font-semibold text-3xl mb-4'>What Is Mobile Business Intelligence?</p>
                    <p className='mb-4'>Mobile Intelligence is the power of mobile devices to learn, adapt, analyze and understand user behavior through various aspects. For example, if any mobile user switches off the vibrate option with silent mode more frequently, the next time the user turns on the silent mode, the vibrate option gets disabled itself. In this example, the smartphone analyzed and understood settings to be set to make it easier for the user.</p>
                    <p className='mb-8'>A business intelligence roadmaps in mobile app development is also referred to as accessing the information and using it. Today, thousands of mobile apps are integrated with analytics tools and business intelligence to serve smart information to the end-user.</p> 
                    <p className='font-semibold text-3xl mb-4'>Benefits Of Mobile BI</p>
                    <p className='mb-8'>The major benefit of mobile BI is that your customers can access their data at any time and from anywhere. It enhances the functioning of mobile applications. Here are some awesome benefits of mobile BI for your business. This has initiated a new era in the BI industry and has offered several benefits to users across the globe.</p>
                    <p className='font-semibold text-2xl mb-4'>#Information Gathering</p>
                    <p className='mb-8'>When you integrate the machine learning model with your mobile app, you probably get the data more frequently or in real-time. With the help of this data, you can perform various operations in less time with efficiency.</p>
                    <p className='text-2xl font-semibold mb-4'>#Decision Making</p>
                    <p className='mb-8'>When the gathered information is available to you all the time, and it is also analyzed using various analysis tools, it makes it easier for business owners to make any decision effectively and in less or no time.</p>
                    <p className='text-2xl font-semibold mb-4'>#Advantage In Competition</p>
                    <p className='mb-8'>In today's world, every business owner wants to make their business responsive, flexible and want to make it have a unique identity in the competition. Having access to the data in real-time increases the opportunity to reach out to clients more frequently and amplify your sales higher.</p>
                    <p className='text-2xl font-semibold mb-4'>#Increase In Productivity</p>
                    <p className='mb-8'>As we already have access to real-time data, it makes it easier for quick decision making, and when the decision-making process takes less time, it means there is ample time to make that decision which ultimately results in increased productivity.</p>
                    <p className='text-2xl font-semibold mb-4'>#Improved Customer Satisfaction</p>
                    <p className='mb-8'>When your performance is commendable and you are certainly ahead of your competition, your productivity increases and with increased productivity, you will reach your customers faster and can serve better. Once you connect with your customers, it will fulfill their requirements and make them satisfied with your services.</p>
                    <p className='text-3xl font-semibold mb-4'>Conclusion</p>
                    <p className='mb-8'>Business Intelligence has given a new definition to businesses today and made them reach the paradigm of success. The term Business Intelligence - refers to technologies and processes that enable a business to acquire data from internal and external systems. All of this comprises query building, analysis, data visualization, analytical report creation, and report generation in order to maximize corporate decision-making for improved performance and incorporate decisions based on current demand.</p>
                </div>
                <ServiceContact></ServiceContact>
                <ServiceFooter></ServiceFooter>
            </div>
        </div>
    );
};

export default BusinessBlog;