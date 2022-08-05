import React from 'react';

const Values = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-28'>
            <p className='font-medium text-[32px] lg:text-[56px] text-[#383841] leading-tight mb-6'><span className='font-semibold'>Values</span> we believe in</p>
            <div className='flex flex-col lg:flex-row gap-6 lg:gap-20 mb-5'>
                <div className='flex items-start w-full lg:w-5/12 space-x-7'>
                    <p className='font-semibold text-lg lg:text-xl text-[#383841] w-1/4'>Collaborate</p>
                    <p className='text-lg text-[#383841] w-3/4 mx-auto'>The best work is done when everyone works together. Whether it's an opinion of a designer, developer or our client - the more we know & consider the better the product will be.</p>
                </div>
                <div className='flex items-start w-full lg:w-5/12 space-x-7'>
                    <p className='font-semibold text-lg lg:text-xl text-[#383841] w-1/4'>Trust and respect</p>
                    <p className='text-lg text-[#383841] w-3/4 mx-auto'>No team can be build without trust and respect. It's important to always respect each other, even when opinions are different, and be able to trust that your teammate will do the right thing.</p>
                    
                </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-6 lg:gap-20 mb-5'>
                <div className='flex items-start w-full lg:w-5/12 space-x-7'>
                    <p className='font-semibold text-lg lg:text-xl text-[#383841] w-1/4'>Have fun</p>
                    <p className='text-lg text-[#383841] w-3/4 mx-auto'>Hey, we live once. Doesn't make sense to suffer at work. You got to love what you do and have fun doing it.</p>
                    <hr />
                </div>
                <div className='flex items-start w-full lg:w-5/12 space-x-7'>
                    <p className='font-semibold text-lg lg:text-xl text-[#383841] w-1/4'>Know your shit</p>
                    <p className='text-lg text-[#383841] w-3/4 mx-auto'>The tone is no mistake. If you come to work you got to know what you're doing and do it right. Learn, grow and improve your skills constantly.</p>
                    <hr />
                </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-6 lg:gap-20'>
                <div className='flex items-start w-full lg:w-5/12 space-x-7'>
                    <p className='font-semibold text-lg lg:text-xl text-[#383841] w-1/4'>Don't just be good. Be the best.</p>
                    <p className='text-lg text-[#383841] w-3/4 mx-auto'>Being “good enough” doesn't get you anywhere in life. We came here because we want to be the best. Through passion and hard work we're grinding our way to the top and you should too.</p>
                    <hr />
                </div>
                <div className='flex items-start w-full lg:w-5/12 space-x-7'>
                    <p className='font-semibold text-lg lg:text-xl text-[#383841] w-1/4'>Focus on the solution</p>
                    <p className='text-lg text-[#383841] w-3/4 mx-auto'>No matter how hard the task may seem always focus on finding a solution. Don't say something is impossible and focus on solving a problem at hand instead of finding reasons why it can't be done.</p>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default Values;