import React from 'react';
import img1 from '../../../images/Digital_Base/Homescreen (A).png';
import img2 from '../../../images/Digital_Base/Onboarding-2.png';
import img3 from '../../../images/Digital_Base/My Profile.png';
import img4 from '../../../images/Digital_Base/Notification.png';
import img5 from '../../../images/Digital_Base/Leaderboards.png';

const DesignDigitalBase = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row items-center justify-center gap-y-20 lg:pt-20'>
            <div className='w-full lg:w-1/2 space-y-6 flex flex-col items-center justify-center lg:items-start lg:justify-start'>
                <div className='flex space-x-3 gap-x-8'>
                    <div className='-mt-8'>
                        <img className='w-[160px] 2xl:w-[200px] rounded-lg shadow-lg shadow-slate-400' src={img2} alt="" />
                    </div>
                    <div>
                        <img className='w-[160px] 2xl:w-[200px] rounded-lg shadow-lg shadow-slate-400' src={img1} alt="" />
                    </div>
                </div>
                <div className='flex space-x-3 gap-x-8'>
                    <div className='-mt-8'>
                        <img className='w-[160px] 2xl:w-[200px] rounded-lg shadow-lg shadow-slate-400' src={img3} alt="" />
                    </div>
                    <div>
                        <img className='w-[160px] 2xl:w-[200px] rounded-lg shadow-lg shadow-slate-400' src={img4} alt="" />
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <p className='uppercase text-[40px] lg:text-[56px] font-black'>Design</p>
                <p className='text-[15px]'>DiGiTAL BASE app is like a social media app where you can review any people nearby you. You can review the people via sending a video, audio or text. You can play tournaments of reviewing people and earn rewards!</p>
            </div>
        </div>
    );
};

export default DesignDigitalBase;