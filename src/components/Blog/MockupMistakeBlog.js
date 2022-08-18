import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
// import { FaUserCircle } from 'react-icons/fa';
import ServiceContact from '../Services/ServiceContact';
import ServiceFooter from '../Services/ServiceFooter';

const MockupMistakeBlog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10 text-[#383841]'>
                <p className='w-full md:w-1/2 mx-auto text-left font-bold leading-none text-[40px] lg:text-[52px] mb-6'>Top 5 Mistakes in Making a Mockup</p>
                <div className='w-full md:w-1/2 mx-auto mb-8'>
                    <div className='flex space-x-3 items-center'>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#design</p>
                        </div>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#strategy</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mb-10'>
                    <img className='rounded-lg' src="https://messapps.com/wp-content/uploads/2020/10/Making-a-Mockup-1200x423.jpg" alt="" />
                </div>
                <div className='w-full md:w-1/2 mx-auto text-lg lg:text-xl'>
                    <p className='mb-4'>After you figure out what you want your app to do and who you want it to be for, the next step is getting a rough idea of how it will look and work. For this, you make a mockup, a black and white outline for all of the screens in your app, with all of the buttons and as much of the text as possible.</p>
                    <p className='mb-4'>Final mockups should be done by a professional, but you can get off to good start with the template in this article. It will help you understand how your app translates from an idea formulated in words, to an idea formulated in screens on a smartphone. You will get to see how your app looks in the screen-to-screen layout in which it will actually be presented. You might see things that look great and decide to add some more of them, or you might see that there is not enough room on the screen to add in all of the buttons and features you want.</p>
                    <p className='mb-8'>Here are 5 mistakes that are easy to make when doing mockups:</p>
                    <p className='font-semibold text-3xl mb-4'>Mistake 1: Leaving out screens</p>
                    <p className='mb-8'>This is an obvious one. It is a problem because your mockup is supposed to include a representation of every screen that will be on your app. If it is missing screens your mockup is not complete. That confirmation screen after login? Yep, you need it. The reset password screen? You need that one in the mockup too. Even if the background screen is the same, any change to the picture requires its own separate representation in the mockup, and it is considered a separate screen. When you are making your own mockups, including things like Terms and Conditions and confirmation screens will not be as important. But, when you get a mockup done professionally, make sure you are getting every single screen, according to the definition above.</p>
                    <p className='font-semibold text-3xl mb-4'>Mistake 2: Including buttons that don't lead anywhere</p>
                    <p className='mb-8'>Anything that will not be on the app, should not be in the mockup. All of your buttons and screens should be connected in a logical way.</p>
                    <p className='font-semibold text-3xl mb-4'>Mistake 3: Including screens with no way to get to them</p>
                    <p className='mb-8'>Make sure you mentally run through all possible user actions within your app. This will help you to keep all of the screens connected. When you imagine changing the settings and realize there is no way to get to that screen, you will see that you have to add some buttons in!</p>
                    <p className='text-3xl font-semibold mb-4'>Mistake 4: Including screens with no way to navigate away from them</p>
                    <p className='mb-8'>Imagining the full tree of user behaviors is also useful for detecting sticky screens. If you add a button to get to your settings screen, there has to be a button to leave the screen also. This might not just be a back button either, it could mean an extra icon for all of your screens. This touches on another of the values to make a mockup, which is that you can make sure your screen is not getting too cluttered.</p>
                    <p className='text-3xl font-semibold mb-4'>Mistake 5: Failing to number pages</p>
                    <p className='mb-8'>Numbering pages is a great way to keep your mockup organized and ensure good logic and flow. The pages should be numbered in a sequence that is representative of the user's behavior when using the app. The mockup screens should be numbered in the order users would see them. The first screen users see should be page 1. If you have to go through the homepage to get to the profile, the homepage should be a lower number. This is intuitive but easy to mess up. When you reach intersection screens, and there are a number of different paths the user could take, you will have to assign numbers semi-arbitrarily. In these cases, try to start with the screens most central to the app, with the most buttons leading to other screens.</p>
                </div>
                <ServiceContact></ServiceContact>
                <ServiceFooter></ServiceFooter>
            </div>
        </div>
    );
};

export default MockupMistakeBlog;