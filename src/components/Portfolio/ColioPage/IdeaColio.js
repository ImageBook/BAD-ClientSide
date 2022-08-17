import React from 'react';

const IdeaColio = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row items-start justify-center gap-6 mb-20 lg:mb-28'>
                <div className='w-full lg:w-5/12'>
                    <p className='font-bold text-2xl lg:text-4xl mb-4'>Idea</p>
                    <p className='text-[15px]'>The goal of Colio is to make people more engaging to each other. The client wanted to engage people by sharing reviews about nearby people so that people get more socially active.</p>
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

export default IdeaColio;