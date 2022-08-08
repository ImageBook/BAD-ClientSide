import React from 'react';

const FaqOfIos = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40 text-[#383841]'>
            <p className=' text-[40px] lg:text-[56px] text-center mb-2 leading-tight'><span className='font-semibold'>We Know</span> Our Stuff</p>
            <p className='text-center text-lg lg:text-xl mb-6 lg:w-1/2 mx-auto'>Per our roots as an iOS app design company, our team of exceptionally bright designers were practically birthed from Apple's Human Interface Guidelines. Without adhering to Apple's themes of clarity, obedience, and depth, defined below, it's almost impossible to get featured in the marketplace.</p>
            <div className='flex items-center justify-center'>
                <img src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/sports-app.png" alt="" />
            </div>
            <div className='flex flex-col items-center justify-center flex-wrap gap-8 lg:gap-x-4 lg:gap-y-8 mt-8 lg:mt-12'>
                <div className='w-full lg:w-5/12 mx-auto'>
                    <div className='flex flex-col lg:flex-row items-start justify-center text-lg lg:gap-x-8 xl:gap-x-4'>
                        <p className='font-semibold w-full lg:w-1/4 text-left'>Clarity</p>
                        <p className='w-full lg:w-3/4 text-left'>Throughout the app, everything is legible, clean, symmetrical, and organized. Each function serves a purpose, and each function is easy to navigate to and from. There should be no ambiguities regarding app functionality. Use of space, color, graphics, and interface elements help stage important content.</p>
                    </div>
                    <hr className='mt-6 lg:mt-3' />
                </div>
                <div className='w-full lg:w-5/12 mx-auto'>
                    <div className='flex flex-col lg:flex-row items-start justify-center text-lg lg:gap-x-8 xl:gap-x-4'>
                        <p className='font-semibold w-full lg:w-1/4 text-left'>Obedience</p>
                        <p className='w-full lg:w-3/4 text-left'>Interface that submits not fights back. Gradients, intense shadowing, and framing, 9 times out of 10, distract the user from what's important.
</p>
                    </div>
                    <hr className='mt-6 lg:mt-3' />
                </div>
                <div className='w-full lg:w-5/12 mx-auto'>
                    <div className='flex flex-col lg:flex-row items-start justify-center text-lg lg:gap-x-8 xl:gap-x-4'>
                        <p className='font-semibold w-full lg:w-1/4 text-left'>Depth</p>
                        <p className='w-full lg:w-3/4 text-left'>Visual layers give the application a realistic motion. Touch gestures add to interactivity turning the screen into a command center.</p>
                    </div>
                    <hr className='mt-6 lg:mt-3' />
                </div>
                
            </div>
        </div>
    );
};

export default FaqOfIos;