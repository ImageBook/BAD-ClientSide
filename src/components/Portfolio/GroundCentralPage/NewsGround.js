import React from 'react';

const NewsGround = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row-reverse items-center justify-center pt-10 md:pt-20 gap-10 md:gap-0'>
            <div className='w-full md:w-1/2 mx-auto flex items-center justify-center md:justify-end'>
                <div className=''>
                    <img className='w-[275px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/ground-central/phone@2x.svg" alt="" />
                </div>
            </div>
            <div className='w-full md:w-1/2'>
                <p className='text-[40px] lg:text-[56px] font-black leading-none'>Read latest coffee and company news</p>
                <p className='mt-2'>What makes Ground Central brand different is that they are focused
                    on growing a community. Therefore, it was important that
                    we insert a feed as a way for the brand to communicate
                    with its customers.</p>
            </div>
        </div>
    );
};

export default NewsGround;