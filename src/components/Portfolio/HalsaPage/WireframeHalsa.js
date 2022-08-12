import React from 'react';

const WireframeHalsa = () => {
    return (
        <div className='mb-28 lg:mb-40'>
            <p className='font-black uppercase text-[46px] lg:text-[75px] 2xl:text-[90px] tracking-wide'>Wireframes</p>
            <p className='text-[15px] w-full lg:w-1/2'>By creating an innovative calling feature, the app is able to connect users to doctors almost instantaneously. After the call, doctors can then review the user's medical information and provide medical recommendations that then appear directly on the user's account.</p>
            <p className='text-2xl lg:text-3xl font-extrabold mt-6'>Doctors</p>
            <p className='text-[15px] w-full lg:w-1/2 mt-2'>There are 2 main functionalities for doctors: to communicate with patients and provide them with feedback. We also include their professional information on the app (which is done to verify credibility).</p>
            <div className='flex items-start justify-center gap-x-4 gap-y-8 lg:gap-y-12 mt-16 flex-wrap text-lg text-center'>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/halsa-life/halsa-intro@2x.svg" alt="" />
                    <p>Introduction</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/halsa-life/halsa-profile-setup@2x.svg" alt="" />
                    <p>Profile Setup</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/halsa-life/halsa-profile-intro@2x.svg" alt="" />
                    <p>Profile Introduction</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/halsa-life/halsa-home-screen@2x.svg" alt="" />
                    <p>Home Screen</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img className='' src="https://messapps.com/wp-content/themes/twentysixteen/samples/halsa-life/halsa-patient-call@2x.svg" alt="" />
                    <p>Patient Call</p>
                </div>
            </div>
            <p className='text-2xl lg:text-3xl font-extrabold mt-12'>Patients</p>
            <p className='text-[15px] w-full lg:w-1/2 mt-2'>Patients have 2 main functionalities: the ability to quickly connect with a doctor and the ability to keep track of their medical records all in one place. Based on these requirements, we've create a design system that makes it easy for users to interact with the app.</p>
            <div className='flex items-start justify-center gap-x-4 gap-y-8 lg:gap-y-12 mt-16 flex-wrap text-lg text-center'>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px] text-lg text-center'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/halsa-life/halsa-intro@2x.svg" alt="" />
                    <p>Story Info</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/halsa-life/halsa-profile-begin@2x.svg" alt="" />
                    <p>Reminder</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/halsa-life/halsa-profile-setup2@2x.svg" alt="" />
                    <p>Active Story</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/halsa-life/halsa-home-screen2@2x.svg" alt="" />
                    <p>Next Chapter</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 w-[140px] sm:w-[200px] lg:w-[190px] 2xl:w-[225px]'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/halsa-life/halsa-profile-rec@2x.svg" alt="" />
                    <p>Overview</p>
                </div>
            </div>
        </div>
    );
};

export default WireframeHalsa;