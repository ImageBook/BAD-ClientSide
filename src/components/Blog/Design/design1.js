import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import ServiceContact from '../../Services/ServiceContact';
import ServiceFooter from '../../Services/ServiceFooter';

const Design1 = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10 text-[#383841]'>
                <p className='w-full md:w-1/2 mx-auto text-left font-bold leading-none text-[40px] lg:text-[52px] mb-6'>Attracting Investors Through Design</p>
                <div className='w-full md:w-1/2 mx-auto mb-8'>
                    <div className='flex space-x-3 items-center'>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#design</p>
                        </div>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#allcategories</p>
                        </div>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#strategy</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mb-8'>
                    <img className='rounded-lg' src="https://messapps.com/wp-content/uploads/2021/09/Attracting-Investors-Through-Design-1200x423.png" alt="" />
                </div>
                <div className='w-full md:w-1/2 mx-auto text-lg lg:text-xl'>
                    <p className='font-semibold text-3xl mb-4'>3 Reasons Why You Should Pay Closer Attention to Design</p>
                    <p className='mb-4'>1. It doesn't matter what kind of innovation we are talking about. Whether it is software or a physical object, remember that the people you want to present it to may not be such qualified as you are. Good design could make easier the perception of your project. </p>
                    <p className='mb-4'>2. If we are talking about software or mobile app, a good design here is crucial. No matter what problem you're solving, a flawless user experience could do half of the job. On the other hand, a bad design could ruin the best idea in the world. There're a lot of various problems hiding. Starting from the onboarding and ending with the use of main features. The onboarding process is needed to teach the user the proper use of a new application for him. If it will be messy, it might confuse people. If your application involves buying mechanism, the checkout process should be as clear and short as possible. </p>
                    <p className='mb-4'>3. Of course, we will not leave aside the presentation of the product itself. The overall impression is formed using a combination of colors, smoothness or sharpness of lines, geometric shapes, typography. Storytelling is a powerful selling tool, but make sure that design supports your story. </p>

                </div>
                <ServiceContact></ServiceContact>
                <ServiceFooter></ServiceFooter>
            </div>
        </div>
    );
};

export default Design1;