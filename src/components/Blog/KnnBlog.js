import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import ServiceContact from '../Services/ServiceContact';
import ServiceFooter from '../Services/ServiceFooter';
import { FaUserCircle } from 'react-icons/fa';

const KnnBlog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10 text-[#383841]'>
                <p className='w-full md:w-1/2 mx-auto text-left font-bold leading-none text-[40px] lg:text-[52px] mb-6'>KMM as a New Approach to Cross-platform App Development</p>
                <div className='w-full md:w-1/2 mx-auto mb-8'>
                    <div className='flex space-x-3 items-center'>
                        <FaUserCircle className='w-12 h-12 text-gray-400'></FaUserCircle>
                        <p className='text-xl font-medium pr-8'>Jaque Kallis</p>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#allcategories</p>
                        </div>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#development</p>
                        </div>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#strategy</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mb-8'>
                    <img className='rounded-lg' src="https://messapps.com/wp-content/uploads/2022/03/KMM-1200x423.png" alt="" />
                </div>
                <div className='w-full md:w-1/2 mx-auto text-lg lg:text-xl'>
                    <p className='font-semibold text-3xl mb-4'>What is KMM?</p>
                    <p className='mb-4'>KMM stands for Kotlin Multi-platform Mobile and it's a new way to develop mobile apps. It's a combination of both native and cross-platform approaches. Within this method, we can write the common server logic for several platforms. By server logic we mean not the backend development but the "server layer". It is a part of the application that exchanges data between the app on the phone and the server.</p>
                    <p className='mb-8'>At the same time, the UI part will be separate for each platform. For example, there will be one code for iOS and a different one for Android. For more detailed information, you can check the official website.</p>
                    <p className='font-semibold text-3xl mb-4'>Advantages</p>
                    <p className='mb-4'>* With KMM you can save your time for development, insofar as server logic needs to be written once for all platforms. That means that iOS developers and Android developers won't need to do the same work twice as it happens now. It can speed up the development process by about 30%.</p>
                    <p className='mb-4'>* Same stands for money. The majority of developers charge money hourly, so if you save your time, hence, you save your money.</p>
                    <p className='mb-8'>* Unlike regular cross-platform applications, KMM allows you to create apps which look native on each platform. This happens because the UI part of the app (visual appearance) developers make separate, for example iOS developer makes visual part for iPhone app, and, at the same time, Android developer creates visual part for an Android app. So, compared to other cross-platform methods, KMM won't let you sacrifice a good UX.</p>
                    <p className='font-semibold text-3xl mb-4'>Disadvantages</p>
                    <p className='mb-4'>* In KMM, they write server logic using Kotlin. Kotlin is originally an Android app development programming language. The problem here is that not a lot of iOS developers know this language to use it in app development. So it could not be very easy to find a team that can handle this approach.</p>
                    <p className='mb-8'>* The novelty of the framework. KMM is still in the beta stage. That means that no one can guarantee its stability. So if you make a decision to create your mobile apps using KMM, you will probably need a maintenance team in case of any errors that may appear. The good news here is that the Kotlin team has promised to release the alpha this year.</p>
                    <p className='text-3xl font-semibold mb-4'>Examples</p>
                    <p className='mb-8'>Despite the fact that KMM appeared quite recently, it already has many fans among the well-known brands. For instance, it helps Netflix optimize speed and product reliability. Leroy Merlin uses KMM in their mobile app. Among the KMM users, you can also find such giants as Philips, Cash App, VMWare, Quizlet, Autodesk, and many others. If you are thinking about cross-platform app development services for your idea, you really should consider KMM.</p>
                </div>
                <ServiceContact></ServiceContact>
                <ServiceFooter></ServiceFooter>
            </div>
        </div>
    );
};

export default KnnBlog;