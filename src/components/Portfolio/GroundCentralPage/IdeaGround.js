import React from 'react';

const IdeaGround = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row items-start justify-center gap-6 mb-20 lg:mb-28'>
                <div className='w-full lg:w-5/12'>
                    <p className='font-bold text-2xl lg:text-4xl mb-4'>Idea</p>
                    <p className='text-[15px]'>The main goal of this application was to reduce wait time in lines for coffee and create a more loyal user base through a system of reward points.</p>
                </div>
                <div className='w-full lg:w-5/12'>
                    <p className='font-bold text-2xl lg:text-4xl mb-4'>Challenge</p>
                    <p className='text-[15px]'>The main difficulty was figuring out how to connect to the client's POS system and if we can make it possible for people to both: pre-pay their order and pay at the counter.</p>
                </div>
                <div className='w-full lg:w-5/12'>
                    <p className='font-bold text-2xl lg:text-4xl mb-4'>Results</p>
                    <p className='text-[15px]'>As a result, we've developed an application that motivated people to sign up for by rewarding them with free drinks and cash bonuses. We also managed to create a simple ordering process that customers can use in and out of the store.</p>
                </div>
            </div>
        </div>
    );
};

export default IdeaGround;