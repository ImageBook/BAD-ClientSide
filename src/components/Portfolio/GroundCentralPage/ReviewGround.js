import React from 'react';

const ReviewGround = () => {
    return (
        <div className=''>
            <div className='space-y-6'>
                <div className='space-y-6 lg:space-y-0 flex flex-col lg:flex-row items-center lg:gap-x-20'>
                    <div className='w-full lg:w-5/12 mx-auto flex items-start space-x-5'>
                        <img className='w-[75px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/chirag3x.png" alt="" />
                        <div>
                            <p className='font-bold text-2xl lg:text-3xl'>Chirag Lukhi</p>
                            <p>One of my favorite projects. Not only because it solves a real problem for a business but also because we're now getting free coffee at the shop!</p>
                        </div>
                    </div>
                    <div className='w-full lg:w-5/12 mx-auto flex items-start space-x-5'>
                        <img className='w-[75px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/anatoly3x.png" alt="" />
                        <div>
                            <p className='font-bold text-2xl lg:text-3xl'>Anatoly Chernyshev</p>
                            <p>Here I worked on maintenance of existing features and on building new features in the application. It is a good and simple app for booking.</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-6 lg:space-y-0 flex flex-col lg:flex-row items-center lg:gap-x-20'>
                    <div className='w-full lg:w-5/12 mx-auto flex items-start space-x-5'>
                        <img className='w-[75px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/kishan3x.png" alt="" />
                        <div>
                            <p className='font-bold text-2xl lg:text-3xl'>Kishan Patel</p>
                            <p>I feel lucky to be part of the app development team for well-known Ground Central.</p>
                        </div>
                    </div>
                    <div className='w-full lg:w-5/12 mx-auto flex items-start space-x-5'>
                        <img className='w-[75px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/denis3x.png" alt="" />
                        <div>
                            <p className='font-bold text-2xl lg:text-3xl'>Denis Valetin</p>
                            <p>Being a member of the renowned Ground Central's app development team makes me feel fortunate.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewGround;