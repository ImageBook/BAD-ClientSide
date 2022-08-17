import React from 'react';

const IdeaVpromise = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row items-start justify-center gap-6 mb-20 lg:mb-28'>
                <div className='w-full lg:w-5/12'>
                    <p className='font-bold text-2xl lg:text-4xl mb-4'>Idea</p>
                    <p className='text-[15px]'>Bottled water is expensive, right? With this app you can have unlimited access to tap water for the price of one bottle.</p>
                </div>
                <div className='w-full lg:w-5/12'>
                    <p className='font-bold text-2xl lg:text-4xl mb-4'>Challenge</p>
                    <p className='text-[15px]'>We wanted to create an intuitive app that would help people to find tap water anywhere they are.</p>
                </div>
                <div className='w-full lg:w-5/12'>
                    <p className='font-bold text-2xl lg:text-4xl mb-4'>Results</p>
                    <p className='text-[15px]'>We are happy with an outcome. You can easily find water on the tap map or track how many bottles you've saved!</p>
                </div>
            </div>
        </div>
    );
};

export default IdeaVpromise;