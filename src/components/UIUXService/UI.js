import React from 'react';

const UI = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40 text-[#383841]'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10'>
                <div className='w-full lg:w-1/2 mx-auto flex justify-center lg:justify-start'>
                    <img className='w-4/5' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/vilit-design-illustration.png" alt="" />
                </div>
                <div className='w-full lg:w-1/2 mx-auto'>
                    <p className='text-2xl lg:text-4xl font-semibold mb-3'>User Interface (UI)</p>
                    <p className='text-lg lg:text-[22px] mb-3'>User interface design (UI), by definition, is the design of user interfaces for software such as mobile apps, with a focus on maximizing user experience by employing design principles that concentrate on usability and utility. Good user interface design ensures that interface elements are functional, easy to access, and easy to understand.</p>
                    <hr />
                    <div className='flex space-x-4 my-3'>
                        <p className='font-semibold lg:text-lg w-1/4'>Brand Identity</p>
                        <p className='lg:text-lg w-3/4'>Buttons, text fields, selection boxes, dropdown lists, and toggles.</p>
                    </div>
                    <hr />
                    <div className='flex space-x-4 my-3'>
                        <p className='font-semibold lg:text-lg w-1/4'>Informational Components</p>
                        <p className='lg:text-lg w-3/4'>Loading bar, notifications, and tooltips.</p>
                    </div>
                    <hr />
                    <div className='flex space-x-4 my-3'>
                        <p className='font-semibold lg:text-lg w-1/4'>Navigational Components</p>
                        <p className='lg:text-lg w-3/4'>Tab bar, slider, swipe, and icons.</p>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default UI;