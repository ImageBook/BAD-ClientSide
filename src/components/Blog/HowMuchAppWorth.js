import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import { FaUserCircle } from 'react-icons/fa';
import ServiceContact from '../Services/ServiceContact';
import ServiceFooter from '../Services/ServiceFooter';

const HowMuchAppWorth = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10 text-[#383841]'>
                <p className='w-full md:w-1/2 mx-auto text-left font-bold leading-none text-[40px] lg:text-[52px] mb-6'>How Much Your App Is Worth?</p>
                <div className='w-full md:w-1/2 mx-auto mb-8'>
                    <div className='flex space-x-3 items-center'>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[120px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#strategy</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mb-8'>
                    <img className='rounded-lg' src="https://messapps.com/wp-content/uploads/2017/01/How-Much-Is-App-Worth-1200x423.jpg" alt="" />
                </div>
                <div className='w-full md:w-1/2 mx-auto text-lg lg:text-xl'>
                    <p className='mb-6'>Learn how to gauge the value of an app on today's market!</p>
                    <p className='font-semibold text-3xl mb-4'>How are apps valued?</p>
                    <p className='mb-4'>Both an app's time-on-the-market and its overall userbase share a leading role in determining its total value. Although there exists more than just one method for evaluating an app, the majority tends to estimate an app's value based on its average monthly revenue multiplied by a specified number of months</p>
                    <p className='mb-4'>For instance, if an app generates $500 a month, its owner may expect to sell it for the price of 6 months' worth of revenue, or $3,000. The total amount of time that your app has been published on the app store determines the value of that Return of Investment (ROI) or the “months worth of revenue” multiplier.</p>
                    <p className='mb-4'>To rehash the previous example, if your app generates $500 a month, and it has occupied the app store for less than 6 months, then you may venture to sell it for 8-9 months worth of revenue, or $4,000. Conversely, if the same app that generates $500 a month occupied the app store for more than 6 months, then you may expected to sell for 14-15 months worth of revenue, or $7,000.</p>
                    <p className='mb-8'>Other owners with apps that are still in their nymph stage may not choose to monetize their apps right away. These apps tend to be valued based on the worth of an individual user. The same rule of ROI is applied to the worth of the app's individual users: the formula for this is [total users or downloads/total revenue]. Other and more complex valuation algorithms consider additional elements, including an app's daily or weekly ratings, ranking, engagement, etc.</p>
                    <p className='font-semibold text-3xl mb-4'>How should you value your app?</p>
                    <p className='mb-4'>Circumstances vary, and yours will determine your app's final verdict. Perhaps your app pales in comparison to its most relevant competitor; perhaps it still generates enough revenue to stay ahead of the rest. With that in mind, if you're trying to sell your app to another appreneur, then perhaps a slight devaluation of your app's worth is justifiable.</p>
                    <p className='mb-4'>In any case, many websites offer their own unique algorithms that function in-full or in-part to estimate a published app's accumulated value. Most appreneurs base their app's value on these websites, and oftentimes reference their unbiased output before buying and selling apps.</p>
                </div>
                <ServiceContact></ServiceContact>
                <ServiceFooter></ServiceFooter>
            </div>
        </div>
    );
};

export default HowMuchAppWorth;