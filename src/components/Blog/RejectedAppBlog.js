import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
// import { FaUserCircle } from 'react-icons/fa';
import ServiceContact from '../Services/ServiceContact';
import ServiceFooter from '../Services/ServiceFooter';

const RejectedAppBlog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10 text-[#383841]'>
                <p className='w-full md:w-1/2 mx-auto text-left font-bold leading-none text-[40px] lg:text-[52px] mb-6'>Why Apps Get Rejected</p>
                <div className='w-full md:w-1/2 mx-auto mb-8'>
                    <div className='flex space-x-3 items-center'>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#development</p>
                        </div>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#strategy</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mb-10'>
                    <img className='rounded-lg' src="https://messapps.com/wp-content/uploads/2021/11/Why-Apps-get-rejected-1200x423.jpg" alt="" />
                </div>
                <div className='w-full md:w-1/2 mx-auto text-lg lg:text-xl'>
                    <p className='mb-4'>The reasons for an app's rejection are varying and represented across the four key areas listed above, however the following detailed reasons are the most common culprits.</p>
                    <p className='font-semibold text-3xl mb-4'>“More information needed”</p>
                    <p className='mb-8'>According to Apple, the most common reason for rejection, accounting for 14%, was “more information needed”. This occurs when an app is submitted to the App Store for review and the developer does not provide enough information or materials for the app to be tested by the App Store review team. For instance, not providing any additionally needed hardware that pairs with the app like an accessory will result in a failed submission. Additionally, if the app requires a special environment, it is necessary to send a video demo showing the app's functionality in this unique environment. The App Store team will not seek out a beautiful mountain range to test your panorama landscape app, it's your role as a developer to show them your app in action!</p>
                    <p className='font-semibold text-3xl mb-4'>“Exhibit bugs”</p>
                    <p className='mb-8'>An astonishing 8% of apps are rejected because they still “exhibit bugs”. These problems must be addressed, tested, and solved before you submit your app to the App Store. Any issues related to long load times or crashes will be grounds for rejection. It is important that you extensively test every feature and each screen in a comprehensive manner amongst your dedicated team of developers. An effective method for testing any bugs is also through a beta version released to a limited audience. These users/testers can either be friends and family of the client or ideally potential early adopters of the app.</p>
                    <p className='font-semibold text-3xl mb-4'>Not complying with Apple's Developer Program License Agreement</p>
                    <p className='mb-8'>Developer's failing to comply with Apple's 'Developer Program License Agreement' account for 6% of total app rejections. This agreement is a legal document between the developer and Apple with the purpose of detailing the allowable channels of distribution, which are outlined as:
                        “ (1) through the App Store, if selected by Apple, (2) through the VPP/B2B Program Site, if selected by Apple, (3) on a limited basis for use on Registered Devices (as defined below), and (4) for beta testing through Apple's TestFlight Program.”</p>
                    <p className='text-3xl font-semibold mb-4'>Poor UI</p>
                    <p className='mb-8'>Also accounting for 6% of rejections is an inability to meet Guideline 10.6 in the UI section outlined in the App Store Review Guidelines. The guideline says, “If your user interface is complex or less than very good, it may be rejected”. This is a challenging reason for rejection because developers are unsure exactly what needs to be fixed or changed. Developer's first test should be ensuring their app's UI reflects Apple's resource on 'Designing Great Apps', which it says allows you to, “build the polished, engaging, and intuitive apps that Apple customers expect”. Additionally, Apple clearly outlines the user interface specifications in their iOS Human Interface Guidelines to ensure consistency and ease of use.</p>
                    <p className='text-3xl font-semibold mb-4'>Metadata issues</p>
                    <p className='mb-8'>Lastly, 5% of apps are rejected for not complying with Guideline 3.3 under the 'Metadata' section. The guideline says, “Apps with names, descriptions, screenshots, or previews not relevant to the content and functionality of the App will be rejected”. This can take the form of misleading information or inconsistencies between the description and the functionality of the app.</p>
                </div>
                <ServiceContact></ServiceContact>
                <ServiceFooter></ServiceFooter>
            </div>
        </div>
    );
};

export default RejectedAppBlog;