import React from 'react';

const IdeaAr = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row items-start justify-center gap-6 mb-20 lg:mb-28'>
                <div className='w-full lg:w-5/12'>
                    <p className='font-bold text-2xl lg:text-4xl mb-4'>Idea</p>
                    <p className='text-[15px]'>We all get bored in the office from time to time, right? That's exactly why we wanted to make our office downtime more exciting. Playing darts in AR with your office buddies is the next best thing!</p>
                </div>
                <div className='w-full lg:w-5/12'>
                    <p className='font-bold text-2xl lg:text-4xl mb-4'>Challenge</p>
                    <p className='text-[15px]'>AR is something new to all of us and in order to find the right approach, we had to dig deep to review and study Apple's AR Kit and Unity AR.</p>
                </div>
                <div className='w-full lg:w-5/12'>
                    <p className='font-bold text-2xl lg:text-4xl mb-4'>Results</p>
                    <p className='text-[15px]'>In the end, we managed to create one of the first ever multiplayer AR games. Utilizing AR kit was a challenge but we managed to make it work flawlessly.</p>
                </div>
            </div>
        </div>
    );
};

export default IdeaAr;