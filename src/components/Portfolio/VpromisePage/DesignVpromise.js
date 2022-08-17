import React from 'react';

const DesignVpromise = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row items-center justify-center lg:pt-20 gap-10 lg:gap-0'>
            <div className='w-full lg:w-1/2 space-y-4'>
                <div className='flex space-x-3 items-center justify-center lg:items-start lg:justify-start'>
                    <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/reefill/design.png" alt="" />
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <p className='uppercase text-[40px] lg:text-[56px] font-black'>Design</p>
                <p className='mt-2'>Vpromise allow people to save money by providing unlimited access to tap water for the price of one bottle. Design is interactive, intuitive and it's fun to see your progress of how many bottles and money you've saved.</p>
            </div>
        </div>
    );
};

export default DesignVpromise;