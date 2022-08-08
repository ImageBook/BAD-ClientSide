import React from 'react';

const ToolsTechs = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40 text-[#383841]'>
            <p className='text-[40px] lg:text-[56px] text-center mb-2 leading-tight'><span className='font-semibold'>Tools & Technologies</span> We Use to Develop Android Apps</p>
            <p className='text-lg lg:text-xl mb-10 text-center'>We make sure to use the most advanced tools in order to achieve the best results.</p>
            <div className='flex flex-col md:flex-row items-center justify-center flex-wrap gap-6'>
                <div className='border rounded-lg shadow flex space-x-4 items-center justify-center hover:bg-[#f8f8f8] w-[275px] h-[90px]'>
                    <img className='rounded w-[70px] ' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/icon-kotlin.png" alt="" />
                    <p className='text-xl lg:text-2xl font-medium'>Kotlin</p>
                </div>
                <div className='border rounded-lg shadow flex space-x-4 items-center justify-center hover:bg-[#f8f8f8] w-[275px] h-[90px]'>
                    <img className='rounded w-[70px] ' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/icon-php1.png" alt="" />
                    <p className='text-xl lg:text-2xl font-medium'>PHP</p>
                </div>
                <div className='border rounded-lg shadow flex space-x-4 items-center justify-center hover:bg-[#f8f8f8] w-[275px] h-[90px]'>
                    <img className='rounded w-[70px] ' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/icon-node-js1.png" alt="" />
                    <p className='text-xl lg:text-2xl font-medium'>Node.JS</p>
                </div>
                <div className='border rounded-lg shadow flex space-x-4 items-center justify-center hover:bg-[#f8f8f8] w-[275px] h-[90px]'>
                    <img className='rounded w-[50px] ' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/icon-java.png" alt="" />
                    <p className='text-xl lg:text-2xl font-medium'>Java</p>
                </div>
                <div className='border rounded-lg shadow flex space-x-4 items-center justify-center hover:bg-[#f8f8f8] w-[275px] h-[90px]'>
                    <img className='rounded w-[55px] ' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/icon-Android_Studio.png" alt="" />
                    <p className='text-xl lg:text-2xl font-medium'>Android Studio</p>
                </div>
                <div className='border rounded-lg shadow flex space-x-4 items-center justify-center hover:bg-[#f8f8f8] w-[275px] h-[90px]'>
                    <img className='rounded w-[55px] ' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/icon-androidSDK.png" alt="" />
                    <p className='text-xl lg:text-2xl font-medium'>Android SDK</p>
                </div>
                <div className='border rounded-lg shadow flex space-x-4 items-center justify-center hover:bg-[#f8f8f8] w-[275px] h-[90px]'>
                    <img className='rounded w-[55px] ' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/icon-figma.png" alt="" />
                    <p className='text-xl lg:text-2xl font-medium'>Figma</p>
                </div>
                <div className='border rounded-lg shadow flex space-x-4 items-center justify-center hover:bg-[#f8f8f8] w-[275px] h-[90px]'>
                    <img className='rounded w-[55px] ' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/icon-MySQL1.png" alt="" />
                    <p className='text-xl lg:text-2xl font-medium'>MySQL</p>
                </div>
            </div>
        </div>
    );
};

export default ToolsTechs;