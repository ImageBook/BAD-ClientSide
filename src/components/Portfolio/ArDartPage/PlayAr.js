import React from 'react';

const PlayAr = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row-reverse items-center justify-center pt-20 gap-10 lg:gap-0'>
            <div className='w-full lg:w-1/2 mx-auto flex items-center justify-center'>
                <div className=''>
                    <img className='w-[350px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/phone-friends@2x.png" alt="" />
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <p className='text-[40px] lg:text-[56px] font-black leading-none'>Play with your friends</p>
                <p className='mt-2'>One of the best things about AR darts is that you can play both solo and with friends. Multiplayer games are just a whole lot of fun!</p>
            </div>
        </div>
    );
};

export default PlayAr;