import React from 'react';

const DevelopmentProcess = () => {
    return (
            <div className='flex items-center justify-center md:justify-around gap-10 md:gap-0 flex-wrap '>
                <div className='flex flex-col items-center space-y-2 hover:font-semibold transition duration-300 ease-in-out hover:-translate-y-1 '>
                    <img className='w-[70px] h-[70px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-business.svg" alt="" />
                    <p className='text-lg'>Idea</p>
                </div>
                <div className='flex flex-col items-center space-y-2 hover:font-semibold transition duration-300 ease-in-out hover:-translate-y-1'>
                    <img className='w-[70px] h-[70px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-wireframes.svg" alt="" />
                    <p className='text-lg'>Wireframes</p>
                </div>
                <div className='flex flex-col items-center space-y-2 hover:font-semibold transition duration-300 ease-in-out hover:-translate-y-1'>
                    <img className='w-[70px] h-[70px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-design.svg" alt="" />
                    <p className='text-lg'>Design</p>
                </div>
                <div className='flex flex-col items-center space-y-2 hover:font-semibold transition duration-300 ease-in-out hover:-translate-y-1'>
                    <img className='w-[70px] h-[70px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-dev.svg" alt="" />
                    <p className='text-lg'>Development</p>
                </div>
                <div className='flex flex-col items-center space-y-2 hover:font-semibold transition duration-300 ease-in-out hover:-translate-y-1'>
                    <img className='w-[70px] h-[70px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-testing.svg" alt="" />
                    <p className='text-lg'>Testing</p>
                </div>
                <div className='flex flex-col items-center space-y-2 hover:font-semibold transition duration-300 ease-in-out hover:-translate-y-1'>
                    <img className='w-[70px] h-[70px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-launch.svg" alt="" />
                    <p className='text-lg'>Launch</p>
                </div>
            </div>
    );
};

export default DevelopmentProcess;