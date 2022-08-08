import React from 'react';

const IdeaValidation = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40 text-[#383841]'>
            <div className='flex flex-col lg:flex-row items-start justify-start gap-6 lg:gap-0'>
                <div className='w-full lg:w-1/2 mx-auto'>
                    <p className='text-[32px] lg:text-[46px] font-semibold mb-4 leading-none'>Idea Validation</p>
                    <button className='w-40 rounded-lg py-2 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition-colors duration-1000 ease-in-out font-bold tracking-wide'>Get Proposal</button>
                </div>
                <div className='w-full lg:w-1/2 mx-auto'>
                    <p className='text-lg lg:text-xl mb-6'>With around 3.8 million applications being available to Android users and upwards of 2 million on the Apple App Store, you don't want your app to be taken as just another weed in a garden. And that's why we, as your mobile app consulting agency here, to nurture your brainchild into a delectable fruit-bearing tree for many to enjoy.
                    </p>
                    <p className='text-lg lg:text-xl'>With upwards of 7 billion unique individuals worldwide, pinpointing your target market may seem like a daunting task. Fortunately, here at Messapps, we have enough market research, compiling myriad amounts data everytime we complete a project, that could consider us a dating service, matching your application to its target audience.</p>
                </div>
            </div>
        </div>
    );
};

export default IdeaValidation;