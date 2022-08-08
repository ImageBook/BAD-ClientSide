import React from 'react';

const FAQAndroid = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40 text-[#383841]'>
            <p className=' text-[40px] lg:text-[56px] text-center mb-6 leading-tight'>F.A.Q. about Android Mobile App Development</p>
            <div className='flex items-center justify-center'>
                <img src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/mobile-android-apps.png
" alt="" />
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-center flex-wrap gap-8 lg:gap-x-4 lg:gap-y-8 mt-8 lg:mt-12'>
                <div className='w-full lg:w-5/12 mx-auto'>
                    <div className='flex flex-col lg:flex-row items-start justify-center text-lg lg:h-[220px] xl:h-[170px] lg:gap-x-8 xl:gap-x-4'>
                        <p className='font-semibold w-full lg:w-1/4 text-left'>Which third-party integrations do you use?</p>
                        <p className='w-full lg:w-3/4 text-left'>The most common 3rd-party integrations in Android app development are Google/Facebook Sign in, maps, Firebase Crashlytics, and other third-party websites or applications.</p>
                    </div>
                    <hr className='mt-6 lg:mt-0' />
                </div>
                <div className='w-full lg:w-5/12 mx-auto'>
                    <div className='flex flex-col lg:flex-row items-start justify-center text-lg lg:h-[220px] xl:h-[170px] lg:gap-x-8 xl:gap-x-4'>
                        <p className='font-semibold w-full lg:w-1/4 text-left'>Could you tell me about your team?</p>
                        <p className='w-full lg:w-3/4 text-left'>The team that will be working on your app consists of pure professionals. You will get a Project Manager, UI/UX Designer, Android App Developer, Backend Developer, and QA Engineer.</p>
                    </div>
                    <hr className='mt-6 lg:mt-0' />
                </div>
                <div className='w-full lg:w-5/12 mx-auto'>
                    <div className='flex flex-col lg:flex-row items-start justify-center text-lg lg:h-[220px] xl:h-[170px] lg:gap-x-8 xl:gap-x-4'>
                        <p className='font-semibold w-full lg:w-1/4 text-left'>Do you have the maintenance?</p>
                        <p className='w-full lg:w-3/4 text-left'>Of course, once the app is uploaded to Play Market we provide 30-days free maintenance. We do that to make sure that the app has no bugs, and if we spot something anyway we will fix it.</p>
                    </div>
                    <hr className='mt-6 lg:mt-0' />
                </div>
                <div className='w-full lg:w-5/12 mx-auto'>
                    <div className='flex flex-col lg:flex-row items-start justify-center text-lg lg:h-[220px] xl:h-[170px] lg:gap-x-8 xl:gap-x-4'>
                        <p className='font-semibold w-full lg:w-1/4 text-left'>Will you help me upload my app to the play market?</p>
                        <p className='w-full lg:w-3/4 text-left'>Sure thing! This is a crucial part of the Launch Step of our app development process. Our project managers will upload your app as soon as it would be ready.</p>
                    </div>
                    <hr className='mt-6 lg:mt-0' />
                </div>
            </div>
        </div>
    );
};

export default FAQAndroid;