import React from 'react';

const FeaturesHalsa = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center gap-8 py-28 lg:py-48'>
            <div className='w-full md:w-1/2 mx-auto flex justify-center items-center'>
                <img className='w-[290px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/halsa-life/halsa-helping-mockups@2x.png" alt="" />
            </div>
            <div className='w-full md:w-1/2 mx-auto'>
                <p className='text-[32px] lg:text-[40px] font-extrabold leading-none mb-2'>It's all about helping</p>
                <p className='text-[15px] mb-6'>Getting medical aid or advice can be problematic in many
                    communities due to a lack of service or problems with distance.
                    The app solves this by enabling users to connect with the
                    medical professionals closest to their location regardless
                    of their location.</p>
                <p className='text-[32px] lg:text-[40px] font-extrabold leading-none mb-2'>Making healthcare available to all</p>
                <p className='text-[15px]'>Allowing doctors to set their availability and provide
                    feedback directly to users means that even users
                    without healthcare can seek advice.</p>
            </div>
        </div>
    );
};

export default FeaturesHalsa;