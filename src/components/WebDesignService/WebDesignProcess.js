import React from 'react';

const WebDesignProcess = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40 text-[#383841]'>
            <p className='leading-tight lg:leading-none text-[40px] lg:text-[56px] font-medium mb-16 lg:mb-20 text-center'><span className='font-semibold'>Web Design <br className='hidden 2xl:block' /></span> Process In Our Company</p>
            <div className='flex items-center justify-center md:justify-around gap-10 md:gap-x-0 md:gap-y-16 flex-wrap '>
                <div className='flex flex-col items-center space-y-4 hover:font-semibold transition duration-300 ease-in-out hover:-translate-y-1 w-full md:w-1/2 lg:w-1/4 mx-auto'>
                    <img className='w-[90px] h-[90px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-business.svg" alt="" />
                    <p className='text-lg lg:text-xl xl:text-[22px] text-center'>User Flow Creation</p>
                </div>
                <div className='flex flex-col items-center space-y-4 hover:font-semibold transition duration-300 ease-in-out hover:-translate-y-1 w-full md:w-1/2 lg:w-1/4 mx-auto'>
                    <img className='w-[90px] h-[90px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/gathering-content-web.svg" alt="" />
                    <p className='text-lg lg:text-xl xl:text-[22px] text-center'>Gathering Content</p>
                </div>
                <div className='flex flex-col items-center space-y-4 hover:font-semibold transition duration-300 ease-in-out hover:-translate-y-1 w-full md:w-1/2 lg:w-1/4 mx-auto'>
                    <img className='w-[90px] h-[90px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-wireframes.svg" alt="" />
                    <p className='text-lg lg:text-xl xl:text-[22px] text-center'>UX design research and wireframing</p>
                </div>
                <div className='flex flex-col items-center space-y-4 hover:font-semibold transition duration-300 ease-in-out hover:-translate-y-1 w-full md:w-1/2 lg:w-1/4 mx-auto'>
                    <img className='w-[90px] h-[90px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/ui-design-web.svg" alt="" />
                    <p className='text-lg lg:text-xl xl:text-[22px] text-center'>Web Design</p>
                </div>
                <div className='flex flex-col items-center space-y-4 hover:font-semibold transition duration-300 ease-in-out hover:-translate-y-1 w-full md:w-1/2 lg:w-1/4 mx-auto'>
                    <img className='w-[90px] h-[90px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-dev.svg" alt="" />
                    <p className='text-lg lg:text-xl xl:text-[22px] text-center'>Website Development</p>
                </div>
                <div className='flex flex-col items-center space-y-4 hover:font-semibold transition duration-300 ease-in-out hover:-translate-y-1 w-full md:w-1/2 lg:w-1/4 mx-auto'>
                    <img className='w-[90px] h-[90px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-testing.svg" alt="" />
                    <p className='text-lg lg:text-xl xl:text-[22px] text-center'>Testing</p>
                </div>
                <div className='flex flex-col items-center space-y-4 hover:font-semibold transition duration-300 ease-in-out hover:-translate-y-1 w-full md:w-1/2 lg:w-1/4 mx-auto'>
                    <img className='w-[90px] h-[90px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-launch.svg" alt="" />
                    <p className='text-lg lg:text-xl xl:text-[22px] text-center'>Placing a website in the global network</p>
                </div>
                <div className='flex flex-col items-center space-y-4 hover:font-semibold transition duration-300 ease-in-out hover:-translate-y-1 w-full md:w-1/2 lg:w-1/4 mx-auto'>
                    <img className='w-[90px] h-[90px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-maintenance.svg" alt="" />
                    <p className='text-lg lg:text-xl xl:text-[22px] text-center'>Maintenance</p>
                </div>
            </div>
        </div>
    );
};

export default WebDesignProcess;