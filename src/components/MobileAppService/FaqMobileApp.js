import React from 'react';

const FaqMobileApp = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40 text-[#383841]'>
            <p className=' text-[40px] lg:text-[56px] text-center mb-6 leading-tight'><span className='font-semibold'>F.A.Q.</span> about Mobile App Development Services</p>
            <div className='flex items-center justify-center'>
                <img src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/UI-UX-apps.png" alt="" />
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-center flex-wrap gap-8 lg:gap-x-4 lg:gap-y-8 mt-8 lg:mt-12'>
                <div className='w-full lg:w-5/12 mx-auto'>
                    <div className='flex flex-col lg:flex-row items-start justify-center text-lg lg:h-[260px] xl:h-[200px] 2xl:h-[180px] lg:gap-x-8 xl:gap-x-4'>
                        <p className='font-semibold w-full lg:w-1/4 text-left'>Do you offer maintenance?</p>
                        <p className='w-full lg:w-3/4 text-left'>Once the product is live, maintenance is essential to ensure your custom mobile app continues to work flawlessly. That is why we offer maintenance services that will protect your application or website from any unexpected problems.</p>
                    </div>
                    <hr className='mt-6 lg:mt-0' />
                </div>
                <div className='w-full lg:w-5/12 mx-auto'>
                    <div className='flex flex-col lg:flex-row items-start justify-center text-lg lg:h-[260px] xl:h-[200px] 2xl:h-[180px] lg:gap-x-8 xl:gap-x-4'>
                        <p className='font-semibold w-full lg:w-1/4 text-left'>How much time does it take to develop an app?</p>
                        <p className='w-full lg:w-3/4 text-left'>Same as for budget the average time depends on the size and complexity of the app. On average, the whole mobile app design and development process take about 4-5 months.</p>
                    </div>
                    <hr className='mt-6 lg:mt-0' />
                </div>
                <div className='w-full lg:w-5/12 mx-auto'>
                    <div className='flex flex-col lg:flex-row items-start justify-center text-lg lg:h-[350px] xl:h-[290px] 2xl:h-[250px] lg:gap-x-8 xl:gap-x-4'>
                        <p className='font-semibold w-full lg:w-1/4 text-left'>How much does it cost to develop a mobile app?</p>
                        <p className='w-full lg:w-3/4 text-left'>For custom mobile apps, the general price range stands between $100,000 and $500,000. The reason for this is the great variety of different features, third-party additions, etc. However, the end price depends also on the functions and size of the app, and it may be developed for just $10,000 - $50,000.</p>
                    </div>
                    <hr className='mt-6 lg:mt-0' />
                </div>
                <div className='w-full lg:w-5/12 mx-auto'>
                    <div className='flex flex-col lg:flex-row items-start justify-center text-lg lg:h-[350px] xl:h-[290px] 2xl:h-[250px] lg:gap-x-8 xl:gap-x-4'>
                        <p className='font-semibold w-full lg:w-1/4 text-left'>How to choose an app platform?</p>
                        <p className='w-full lg:w-3/4 text-left'>First of all, the choice of platform depends on the target audience of your future mobile app. However, no less important thing is your budget. If you want to broaden your audience and cover both iOS and Android you should understand that it's literally two different native apps. But, in case you want to save, you may think about cross-platform app development.</p>
                    </div>
                    <hr className='mt-6 lg:mt-0' />
                </div>
            </div>
        </div>
    );
};

export default FaqMobileApp;