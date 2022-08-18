import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import { FaUserCircle } from 'react-icons/fa';
import ServiceContact from '../Services/ServiceContact';
import ServiceFooter from '../Services/ServiceFooter';

const Flutter = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10 text-[#383841]'>
                <p className='w-full md:w-1/2 mx-auto text-left font-bold leading-none text-[40px] lg:text-[52px] mb-6'>Flutter - One of the Most Progressing Tech in Market</p>
                <div className='w-full md:w-1/2 mx-auto mb-8'>
                    <div className='flex space-x-3 items-center'>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#allcategories</p>
                        </div>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#development</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mb-8'>
                    <img className='rounded-lg' src="https://messapps.com/wp-content/uploads/2022/04/Flutter-1200x423.jpg" alt="" />
                </div>
                <div className='w-full md:w-1/2 mx-auto text-lg lg:text-xl'>
                    <p className='font-semibold text-3xl mb-4'>What is Flutter?</p>
                    <p className='mb-4'>Flutter is a cross-platform app development framework made by Google. It is based on the Dart language. Release of the first stable version was in 2018.</p>
                    <p className='mb-8'>Cross-platform development means that your app could be deployed simultaneously to both Android and iOS using a single codebase. The main components of this framework are the Dart platform, the Flutter engine, the Foundation library, widget sets and development tools (Flutter DevTools).</p>
                    <p className='font-semibold text-3xl mb-4'>Why use it?</p>
                    <p className='mb-4'>As with any other cross-platform framework, it significantly simplifies the development process. In other words, by writing code for only one application, Flutter allows you to have an application for several different platforms.</p>
                    <p className='mb-4'>Apps built on Flutter are better for industries where how the interface looks is not super important. For example, it would be perfect for internal use by employees. It's very common in the retail industry, when a shop assistant may tell customers which sizes are available or if they have a similar shirt in different color using the company's internal app.</p>
                    <p className='mb-8'>Another field for cross-platform mobile apps is startup or small new company. This method is faster and cheaper. For example, if it is necessary for a business to release the MVP to the market as a pilot version. Or, when the market is formed, but the company wants to overtake competitors with a new feature. You do not need a lot of time for writing code, testing, and you can save resources.</p>
                    <p className='font-semibold text-3xl mb-4'>Pros and cons of using Flutter framework</p>
                    <p className='mb-4'>As any other development tool, Flutter has its own advantages and disadvantages. Because of that, it could be perfect for one business and terrible for another. Everything depends on your needs.</p>
                    <p className='text-2xl font-semibold mb-4'>iOS vs. Android</p>
                    <p className='mb-8'>Flutter was made by Google. Hence, it works perfectly fine with the Android platform but has some issues on iOS. For example, on iOS, it will be a little noticeable that the application is not native. Animation and scrolling made on Flutter will be displayed differently on the iPhone, more like in Android.</p>
                    <p className='text-2xl font-semibold mb-4'>Performance</p>
                    <p className='mb-8'>In spite of minor iOS issues, Flutter is the best cross-platform framework that exists today. This is achieved through AOT (Ahead-of-time) compilation. It means that the whole compilation process is performed before the program is executed. It takes a minimum load on the system and does not require additional memory allocation.</p>
                    <p className='text-2xl font-semibold mb-4'>Popularity</p>
                    <p className='mb-8'>Popularity is an undeniable advantage of this framework. Because of that, you can find a lot of plugins which allows to work with phone hardware, such as camera, bluetooth, wifi, etc.Another good reason is big community around the world with meetups, events, and exclusive resources.</p>
                </div>
                <ServiceContact></ServiceContact>
                <ServiceFooter></ServiceFooter>
            </div>
        </div>
    );
};

export default Flutter;