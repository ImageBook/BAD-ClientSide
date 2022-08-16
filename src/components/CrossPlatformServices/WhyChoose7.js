import React from 'react';

const WhyChoose7 = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40 text-[#383841]'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10'>
                <div className='w-full lg:w-1/2'>
                    <p className='leading-none text-[40px] lg:text-[56px] font-medium mb-2'>Why choose <br className='hidden lg:block' /> <span className='font-bold'>BAD (Best App Dev)</span> for Cross Platform App Development?</p>
                    <p className='text-lg lg:text-xl mb-3'>We are one of the top app development companies in the World. The reason is simple. We always try to deliver the best possible solution to our clients for creating a quality innovative product.</p>
                    <button className='w-40 rounded-lg py-2 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition-colors duration-1000 ease-in-out font-bold tracking-wide'>Contact Us</button>
                </div>
                <div className='w-full lg:w-1/2 mx-auto'>
                    <div className='flex flex-col md:flex-row items-center justify-center flex-wrap gap-6 md:gap-10'>
                        <div className='flex flex-col items-center justify-center border shadow rounded-lg bg-[#fafafa] w-full md:w-5/12 lg:h-[225px] p-2 space-y-2'>
                            <img className='w-[300px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-full-service.svg" alt="" />
                            <p className='font-semibold text-lg lg:text-xl text-center leading-none'>Full-Service App Development Company</p>
                        </div>
                        <div className='flex flex-col items-center justify-center border shadow rounded-lg bg-[#fafafa] w-full md:w-5/12 lg:h-[225px] p-2 space-y-2'>
                            <img className='w-[300px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-design-new.svg" alt="" />
                            <p className='font-semibold text-lg lg:text-xl text-center leading-none'>Experienced Cross Platform Developers</p>
                        </div>
                        <div className='flex flex-col items-center justify-center border shadow rounded-lg bg-[#fafafa] w-full md:w-5/12 lg:h-[225px] p-2 space-y-2'>
                            <img className='w-[300px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-top.svg" alt="" />
                            <p className='font-semibold text-lg lg:text-xl text-center leading-none'>Products We've Built are Featured in the Top Tech Media</p>
                        </div>
                        <div className='flex flex-col items-center justify-center border shadow rounded-lg bg-[#fafafa] w-full md:w-5/12 lg:h-[225px] p-2 space-y-2'>
                            <img className='w-[300px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-ranked.svg" alt="" />
                            <p className='font-semibold text-lg lg:text-xl text-center leading-none'>Ranked Top
                                Development
                                Company</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose7;