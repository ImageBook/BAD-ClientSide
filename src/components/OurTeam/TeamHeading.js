import React from 'react';
import team from '../../images/team.png';

const TeamHeading = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20'>
            <div className='flex flex-col lg:flex-row items-center gap-5 lg:gap-0 '>
                <div className='lg:w-1/2'>
                    <p className='text-[48px] lg:text-[88px] font-black text-[#383841]'>Our Team</p>
                    <p className='text-[#383841] lg:text-lg mt-3 md:mt-1 lg:mt-3'>Hey! We are the Textapps team, and we are glad to meet you!</p>
                    <p className='text-[#383841] lg:text-lg mt-3 md:mt-1 lg:mt-3'>We are a team of professionals. Each of us has their own hobbies and interests, but we are all united by our passion for what we do. We are the ones who will meet you and guide you through the entire development process of your future product.</p>
                    <p className='text-[#383841] lg:text-lg mt-3 md:mt-1 lg:mt-3'>Designers will create you a kick-ass design. Developers will build amazing software. QA engineers will make sure that everything works flawlessly. And our awesome project managers will lead you till the launch.</p>
                </div>
                <div className='lg:w-1/2 mx-auto flex items-center justify-center'>
                    <img src={team} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TeamHeading;