import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
// import { FaUserCircle } from 'react-icons/fa';
import ServiceContact from '../Services/ServiceContact';
import ServiceFooter from '../Services/ServiceFooter';

const FirstMobileAppBlog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10 text-[#383841]'>
                <p className='w-full md:w-1/2 mx-auto text-left font-bold leading-none text-[40px] lg:text-[52px] mb-6'>Your First Mobile App Wireframe</p>
                <div className='w-full md:w-1/2 mx-auto mb-8'>
                    <div className='flex space-x-3 items-center'>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#design</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mb-8'>
                    <img className='rounded-lg' src="https://messapps.com/wp-content/uploads/2016/07/kelly-sikkema-gcHFXsdcmJE-unsplash-1200x585.jpg" alt="" />
                </div>
                <div className='w-full md:w-1/2 mx-auto text-lg lg:text-xl'>
                    <p className='font-semibold text-3xl mb-4'>What is a wireframe?</p>
                    <p className='mb-8'>A wireframe is a visual representation of the individual elements homed by an application or website. Wireframes are typically created in black and white but are not limited to. They can be both hand-drawn and created using software programs as well as online tools.</p>
                    <p className='font-semibold text-2xl mb-4'>Why is a wireframe important?</p>
                    <p className='mb-4'>Wireframes are important as a means of function and communication. The wireframe directly translates to the blueprint of the app. It represents the naked body of the app while the design can be considered clothes. Wireframes also help communicate your vision of a mobile app or website that you're attempting to create clearly to the designer or developer you are working with.</p>
                    <p className='mb-8'>The wireframing stage is done at the very beginning of the design process and takes much less time than the bulk of the design work. Wireframes are used to point the designer in the right direction when turning your idea into a fully functional product.</p>
                    <p className='font-semibold text-3xl mb-4'>The Role of Paper Prototyping</p>
                    <p className='mb-4'>The terms “paper prototyping” and “wireframing” can be used interchangeably even though form and function vary between the two. Paper prototyping should commence directly after you establish the who, why, and how of the app. Today, many people will question the significance of paper prototyping. There are some who claim paper is dead and swear by the benefits of digital prototyping. But still, others argue that pencil and paper strengthen design.</p>
                    <p className='text-3xl font-semibold mb-4'>Here are some steps to get you started:</p>
                    <p className='text-2xl font-semibold mb-4'>1. Treat it like a blueprint, include descriptions</p>
                    <p className='mb-8'>Take an office building, for example, without a blueprint, builders don't have any idea of how many floors to add, where to build various offices, where to place electrical outlets, plumbing, doorways, etc. If the only resources you throw at them include a few images of other offices you find appealing, the probability that it will fall in place with your vision is one in a million. The same thinking applies to app designers. Without a detailed wireframe, your designers won't know how to structure navigation menus and how to layout the imagery in popular design platforms such as Sketch or Photoshop.</p>
                    <p className='text-2xl font-semibold mb-4'>2. Hi-Fi is the way to go</p>
                    <p className='mb-8'>Hi-Fi or high-fidelity wireframing translates not only the structure of the app but also the color and tone you want the app to embody. This, in turn, leaves less to imagine in comparison to a simple hand-drawn sketch or a lo-fi wireframe. Now, this can be either viewed as a pitfall or a positive. On one hand, time can be wasted and the creativity of the designers can be subdued. On the other, since your designer has to rely less on their imagination, they can create a product that better aligns with your vision.</p>
                    <p className='text-2xl font-semibold mb-4'>3. Check the flow, interactive prototyping</p>
                    <p className='mb-8'>Go over the wireframes and make sure all functions land at their intended screens. Make sure you've highlighted all the possible error messages found on a particular screen. For example, "Incorrect password." This is where interactive prototyping comes in. Transforming your static designs into fully interactive prototypes is extremely beneficial. There are great tools available to everyone that enable you to create a clickable mockup of the app. Here at Messapp's our personal favorite tools to use are Invision and Figma.</p>
                    <p className='text-2xl font-semibold mb-4'>4. Cite your inspirations</p>
                    <p className='mb-8'>If you have a particular app or maybe even a few that you took inspiration from, let your designer know. App elements such as design, user experience, and emotional feel are things you can pick apart and home in your own app. Your designer can use these references to better understand your intended outcome.</p>
                    <p className='text-3xl font-semibold mb-4'>Conclusion</p>
                    <p className='mb-8'>Translating your dream to the designer and developer is vital. The wireframing stage is the app before its glamour, a body without flesh. If you point the ship in the right direction its destination is almost promised.</p>
                </div>
                <ServiceContact></ServiceContact>
                <ServiceFooter></ServiceFooter>
            </div>
        </div>
    );
};

export default FirstMobileAppBlog;