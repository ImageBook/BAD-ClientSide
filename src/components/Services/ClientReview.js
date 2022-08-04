import React from 'react';
import client1 from '../../images/aiony-haust-3TLl_97HNJo-unsplash.jpg';
import client2 from '../../images/alexander-hipp-iEEBWgY_6lA-unsplash.jpg';
import client3 from '../../images/clayton-mpDV4xaFP8c-unsplash.jpg';
import client4 from '../../images/julian-wan-WNoLnJo7tS8-unsplash.jpg';

const ClientReview = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-20 lg:my-40'>
            <div className='flex flex-col space-y-3 items-center justify-center'>
                <img className='w-[80px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/icon-review.svg" alt="" />
                <p className='font-medium text-[49px] lg:text-[56px] text-[#383841] leading-tight text-center'>What Our <span className='font-semibold'>Clients Say</span></p>
            </div>
            <div className='flex items-center justify-center flex-wrap gap-16 mt-20'>
                <div className='w-full md:w-5/12 flex flex-col space-y-5'>
                    <div className='flex items-center justify-center lg:justify-start space-x-5'>
                        <img className='rounded-full w-20 h-20 hover:scale-105 transition duration-500 ease-in-out' src={client2} alt="" />
                        <p className='text-purple-500 font-semibold text-lg'>Ted Mosby</p>
                    </div>
                    <p className='text-xl text-gray-700 text-center lg:text-left'>"They really care about the actual project and not just the technical objectives."</p>
                    <hr />
                </div>
                <div className='w-full md:w-5/12 flex flex-col space-y-5'>
                    <div className='flex items-center justify-center lg:justify-start space-x-5'>
                        <img className='rounded-full w-20 h-20 hover:scale-105 transition duration-500 ease-in-out' src={client1} alt="" />
                        <p className='text-purple-500 font-semibold text-lg'>Penny Harlot</p>
                    </div>
                    <p className='text-xl text-gray-700 text-center lg:text-left'>"The team acted in accordance with the highest professional standards."</p>
                    <hr />
                </div>
                <div className='w-full md:w-5/12 flex flex-col space-y-5'>
                    <div className='flex items-center justify-center lg:justify-start space-x-5'>
                        <img className='rounded-full w-20 h-20 hover:scale-105 transition duration-500 ease-in-out' src={client4} alt="" />
                        <p className='text-purple-500 font-semibold text-lg'>Dwight Schrute</p>
                    </div>
                    <p className='text-xl text-gray-700 text-center lg:text-left'>"They had a functional shell application up and running within weeks!"</p>
                    <hr />
                </div>
                <div className='w-full md:w-5/12 flex flex-col space-y-5'>
                    <div className='flex items-center justify-center lg:justify-start space-x-5'>
                        <img className='rounded-full w-20 h-20 hover:scale-105 transition duration-500 ease-in-out' src={client3} alt="" />
                        <p className='text-purple-500 font-semibold text-lg'>Courtney Cox</p>
                    </div>
                    <p className='text-xl text-gray-700 text-center lg:text-left'>"Their responsiveness is hands down the most impressive thing about them."</p>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default ClientReview;