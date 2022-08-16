import React from 'react';

const OurStory = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20'>
            <p className='text-center font-medium text-[32px] lg:text-[56px] text-[#383841] leading-tight'>Our <span className='font-semibold'>Story</span></p>
            <p className='text-center font-medium text-[#383841] text-lg lg:text-xl w-full lg:w-2/6 mx-auto leading-tight mb-16'>As with many startups, our story began with a
                spotted opportunity.</p>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0 mb-10 lg:mb-20'>
                <div className='w-full lg:w-1/2 mx-auto flex justify-center items-center'>
                    <img className='w-[300px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/illustration-why-love.svg" alt="" />
                </div>
                <div className='w-full lg:w-1/2 text-[#383841] text-lg lg:text-xl'>
                    <p>In 2010, our founder, Vasily, couldn't find time to prepare for the Law School Admission Test (LSAT). This test was the only thing standing in front of his goal of becoming a lawyer. Yet, with an internship during the day in one city and classes in the evening, in another - it was pretty hard to find the time or even a place to prepare for the exam.</p>
                    <br />
                    <p>Then, one day, sitting on the train he thought: "If only there was something on my phone that would help me study for the LSAT". Back then there was nothing. So Vasily went ahead and built one of the first and certainly the most comprehensive LSAT apps in the market at that time. It was the #1 paid LSAT app for over a year.</p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row-reverse items-center justify-center gap-10 lg:gap-0'>
                <div className='w-full lg:w-1/2 mx-auto flex justify-center items-center'>
                    <img className='w-[300px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/illustration-why-love.svg" alt="" />
                </div>
                <div className='w-full lg:w-1/2 text-[#383841] text-lg lg:text-xl'>
                    <p>BAD (Best App Dev) - an app development company that focusses on creating successful profitable apps. After the success of the first application, Vasily moved on to building more educational apps for other exams such as SAT, GMAT, MCAT, and others.</p>
                    <br />
                    <p>With time, it becomes apparent that there is more to this industry than just building apps for different tests. More and more people around started asking how they can build an app, what they need to know, how to make it successful. That lead to creating BAD (Best App Dev).</p>
                </div>
            </div>
        </div>
    );
};

export default OurStory;