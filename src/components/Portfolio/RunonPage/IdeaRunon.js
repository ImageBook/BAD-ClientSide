import React from 'react';

const IdeaRunon = () => {
    return (
        <div className=''>
            <div className='flex flex-col lg:flex-row items-start justify-center gap-6 mb-20 lg:mb-28'>
                <div className='w-full lg:w-5/12'>
                    <p className='font-bold text-2xl lg:text-4xl mb-4'>Idea</p>
                    <p className='text-[15px]'>The goal of RunOn is to make running fun and interesting. The client wanted to engage runners by streaming stories which plot is tied to the heartbeat of the user.</p>
                </div>
                <div className='w-full lg:w-5/12'>
                    <p className='font-bold text-2xl lg:text-4xl mb-4'>Challenge</p>
                    <p className='text-[15px]'>The biggest challenge for the project was sending users' heart rate to the app and making sure it will influence the storyline.</p>
                </div>
                <div className='w-full lg:w-5/12'>
                    <p className='font-bold text-2xl lg:text-4xl mb-4'>Results</p>
                    <p className='text-[15px]'>We've connected Apple Watch heartrate monitor to the app to have live heart rate data. This, in turn, we've connected to our storyline database and allowed next part of the storyline to be chosen by the heart rate range.</p>
                </div>
            </div>
        </div>
    );
};

export default IdeaRunon;