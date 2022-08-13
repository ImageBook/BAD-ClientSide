import React from 'react';

const ReviewCakemix = () => {
    return (
        <div className='space-y-6 pt-16 lg:pt-36'>
            <div className='space-y-6 lg:space-y-0 flex flex-col lg:flex-row items-center lg:gap-x-20'>
                <div className='w-full lg:w-5/12 mx-auto flex items-start space-x-5'>
                    <img className='w-[75px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/chirag3x.png" alt="" />
                    <div>
                        <p className='font-bold text-2xl lg:text-3xl'>Chirag Lukhi</p>
                        <p>Cakemix was one of those apps that you know you will use always after its launched. Using it every time I go to the gym now!</p>
                    </div>
                </div>
                <div className='w-full lg:w-5/12 mx-auto flex items-start space-x-5'>
                    <img className='w-[75px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/anatoly3x.png" alt="" />
                    <div>
                        <p className='font-bold text-2xl lg:text-3xl'>Anatoly Chernyshev</p>
                        <p>It was a good app where I was working on Apple or Spotify music library for the first time, so I faced many issues related to Apple Music Kit but I learned a lot from it.</p>
                    </div>
                </div>
            </div>
            <div className='space-y-6 lg:space-y-0 flex flex-col lg:flex-row items-center lg:gap-x-20'>
                <div className='w-full lg:w-5/12 mx-auto flex items-start space-x-5'>
                    <img className='w-[75px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/kishan3x.png" alt="" />
                    <div>
                        <p className='font-bold text-2xl lg:text-3xl'>Kishan Patel</p>
                        <p>It is the best music application on App store which allows to play songs from Apple Music and Spotify. We have developed app in such a way that users can filter songs by tempo as well.</p>
                    </div>
                </div>
                <div className='w-full lg:w-5/12 mx-auto flex items-start space-x-5'>
                    <img className='w-[75px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/denis3x.png" alt="" />
                    <div>
                        <p className='font-bold text-2xl lg:text-3xl'>Denis Valetin</p>
                        <p>The greatest music app available on the App Store lets you play songs from Spotify and Apple Music. We designed the software so that users may also filter music by tempo.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCakemix;