import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import ServiceContact from '../../Services/ServiceContact';
import ServiceFooter from '../../Services/ServiceFooter';

const CaseStudies5 = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10 text-[#383841]'>
                <p className='w-full md:w-1/2 mx-auto text-left font-bold leading-none text-[40px] lg:text-[52px] mb-6'>Making a Healthy Daily Routine More Enjoyable with Runon</p>
                <div className='w-full md:w-1/2 mx-auto mb-8'>
                    <div className='flex space-x-3 items-center'>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#casestudies</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mb-8'>
                    <img className='rounded-lg' src="https://messapps.com/wp-content/uploads/2018/09/runonpic.png" alt="" />
                </div>
                <div className='w-full md:w-1/2 mx-auto text-lg lg:text-xl'>
                    <p className='font-semibold text-3xl mb-4'>An unusual idea called for an unusual app</p>
                    <p className='mb-4'>Naturally, any app which calls for something unusual or unique is going to come with its own set of challenges. Runon’s idea was to create a running app which their users could open while out on their daily jog, and which would allow them to listen to a story of their choosing in order to make their exercise routine more enjoyable.</p>
                    <p className='mb-8'>Now, there’s nothing particularly unusual about that – indeed, there are plenty of apps out there which do more or less the same thing. Runon’s unique angle, however, was to make the stories being told adapt to the heart rate of the user. As such, when the user would be running faster (and their heart would be pumping and beating more quickly), the level of tension and drama etc in the story would be intensified. This injects a fascinating and highly enjoyable angle to an otherwise fairly run-of-the-mill app, and certainly makes it stand out from the crowd to an audience who are constantly looking for the next level in usability, gamification, and enjoyability. Needless to say, we were hooked from the very first consultation, and quickly set about brainstorming how we’d go about turning this idea into a highly successful and efficient application for a growing market.</p>
                    <p className='font-semibold text-3xl mb-4'>The challenge</p>
                    <p className='mb-4'>The key challenge we faced with Runon’s app was how to bring together its key components. On the one hand, there needed to be a story (which is selected by the user) feeding into the user’s headphones. On the other, that story needed to be influenced by the user’s heart rate. Our mission, therefore, was to find a way of sending the user’s heart rate into the app, and making sure it influenced the story appropriately in order to heighten their running experience.</p>

                </div>
                <ServiceContact></ServiceContact>
                <ServiceFooter></ServiceFooter>
            </div>
        </div>
    );
};

export default CaseStudies5;