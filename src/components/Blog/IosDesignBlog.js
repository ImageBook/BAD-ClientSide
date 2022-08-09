import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import { FaUserCircle } from 'react-icons/fa';
import ServiceContact from '../Services/ServiceContact';
import ServiceFooter from '../Services/ServiceFooter';

const IosDesignBlog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10 text-[#383841]'>
                <p className='w-full md:w-1/2 mx-auto text-left font-bold leading-none text-[40px] lg:text-[52px] mb-6'>Overview Of iOS Design Guidelines</p>
                <div className='w-full md:w-1/2 mx-auto mb-8'>
                    <div className='flex space-x-3 items-center'>
                        <FaUserCircle className='w-12 h-12 text-gray-400'></FaUserCircle>
                        <p className='text-xl font-medium pr-8'>Jaque Kallis</p>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#design</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mb-8'>
                    <img className='rounded-lg' src="https://messapps.com/wp-content/uploads/2018/09/iOS-Design-1-1200x371.jpg" alt="" />
                </div>
                <div className='w-full md:w-1/2 mx-auto text-lg lg:text-xl'>
                    <p className='mb-4'>Like every piece of software, iOS has its own themes that set it apart from the rest. If you want your product to topple the charts on the Apple App Store, these are the themes that you need to take into account:</p>
                    <p className='font-semibold text-xl mb-4'>1. Clarity</p>
                    <p className='mb-8'>Throughout the app, everything is legible, clean, symmetrical, and organized. Each function serves a purpose, and each function is easy to navigate. There should be no ambiguities regarding app functionality. The use of space, color, graphics, and interface elements help stage important content.</p>
                    <p className='font-semibold text-xl mb-4'>2. Obedience</p>
                    <p className='mb-8'>An interface that submits does not fight back. The user is in control. This isn't a “Tesla takes the wheel situation,” giving the user control of what they came for. Gradients, intense shadowing, and frames, 9 times out of 10, distract the user from what's important and fail to even perform what they were set to today which was look pretty.</p>
                    <p className='font-semibold text-xl mb-4'>3. Depth</p>
                    <p className='mb-8'>Visual layers give the app a realistic motion. Touch gestures add to interactivity and a screen becomes more than just a screen, it becomes a command center. Smooth transitions also heighten interactivity and give the user a sense of floating from function to function.</p>
                    <p className='text-3xl font-semibold mb-4'>Proper Layout</p>
                    <p className='mb-8'>Your users want the ability to use the app in any context. iOS is one, but Apple devices are many. And your device respects how you hold it; turning it to the side doesn't mean your head must also follow at 90 degrees, the device is kind enough to flip the image on the screen for you. Be sure to take into account these dimensions when you're designing elements and laying them out.</p>
                    <p className='text-3xl font-semibold mb-4'>Sensitive to the Touch</p>
                    <p className='mb-8'>Buttons are the name of the game here; they initiate actions and can be represented in the form of text or a simple symbol. Fortunately, Apple includes a number of ready-to-go commands for most cases if you're not up for designing them yourself.</p>
                    <p className='text-3xl font-semibold mb-4'>Get that Type Right</p>
                    <p className='mb-8'>The native system typeface for iOS, San Francisco (SF), is ever so pleasing. This typeface will ensure clarity and legibility. You may use whatever typeface you desire of course, but San Francisco is a good tried-and-true default. Combine type weight, size, and color to make prominent things pop and lesser things fall into the shadows (but not too much!). Don't get too crazy. With millions of unique typefaces out there your inner artist might want you to get real creative. But hold back. Mixing various typefaces will make your app look sloppy and that is certainly not one of the iOS design themes.</p>
                    <p className='text-3xl font-semibold mb-4'>Paint the app</p>
                    <p className='mb-8'>Color can convey messages without the use of words. It's a great way to communicate the importance, failure, and completion. In terms of design, the less color you use is more. For example, a red symbol in an app will hold more weight and significance in terms of something being wrong, when the rest of the app omits the use of red for non-critical reasons. iOS system apps each take one color to represent interactive elements effectively. For example, all the key interactive elements in the Notes app are denoted in yellow. When a user sees a potential function in a certain color, he/she does not have to think twice about whether or not it is, in fact, a function.</p>
                    <p className='text-3xl font-semibold mb-4'>The More Pixels the Better</p>
                    <p className='mb-8'>The iOS system is based on measurement points that translate to pixels. With standard resolution screens, one point = one pixel; higher resolution screens hold a greater number of pixels. However, the physical space on-screen still remains the same, the pixels are just more densely populated on the screen. Therefore, a higher resolution requires images with a greater amount of pixels. </p>
                    <p className='text-3xl font-semibold mb-4'>Shouldn't Need a GPS to Navigate</p>
                    <p className='mb-8'>Navigating through an app is expected to be a seamless process. People never seem to think much much of it until something doesn't feel right or they find themselves deep inside the app, trying to retrace their steps, but having to take emergency measures and restart.</p>
                    <p className='text-4xl font-semibold mb-4'>Conclusion</p>
                    <p className='mb-8'>Following a platform's design guidelines will only benefit metrics such as user retention and customer satisfaction. Your users will feel right at home as opposed to in some foreign country as they use your app. In order to gain a following, instilling comfort is a must. Cozy users up, and they may just make a permanent residence in your app.</p>
                </div>
                <ServiceContact></ServiceContact>
                <ServiceFooter></ServiceFooter>
            </div>
        </div>
    );
};

export default IosDesignBlog;