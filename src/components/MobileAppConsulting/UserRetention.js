import React from 'react';

const UserRetention = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40 text-[#383841]'>
            <div className='flex flex-col lg:flex-row items-start justify-start gap-6 lg:gap-0'>
                <div className='w-full lg:w-1/2 mx-auto'>
                    <p className='text-[32px] lg:text-[46px] font-semibold mb-4 leading-none'>User Retention</p>
                    <button className='w-40 rounded-lg py-2 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition-colors duration-1000 ease-in-out font-bold tracking-wide'>Get Proposal</button>
                </div>
                <div className='w-full lg:w-1/2 mx-auto'>
                    <p className='text-lg lg:text-xl mb-6'>Retention is the level of engagement a user has with your application over time. Essentially it's how much time they spend taking advantage of the app's functions over the length of an average user lifecycle. When calculating retention, you measure how frequently your users come back for more after installation.
                    </p>
                    <p className='text-lg lg:text-xl mb-6'>75% of users uninstall a newly downloaded application within 90 days. With 2 million apps on the Apple app store alone, when engagement has climaxed, due to the sheer size of the market, a user may not be wary to give the next new thing a go.</p>
                    <p className='text-lg lg:text-xl'>At our company, consultants will walk you through both innovate and tried and true methods for keeping users hooked.</p>
                </div>
            </div>
        </div>
    );
};

export default UserRetention;