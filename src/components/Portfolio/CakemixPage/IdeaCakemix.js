import React from 'react';

const IdeaCakemix = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row items-start justify-center gap-6 mb-20 lg:mb-28'>
                <div className='w-full lg:w-5/12'>
                    <p className='font-bold text-2xl lg:text-4xl mb-4'>Idea</p>
                    <p className='text-[15px]'>The idea behind Cakemix app is to improve your running & workout experience by creating music playlists with custom BPM ranges.</p>
                </div>
                <div className='w-full lg:w-5/12'>
                    <p className='font-bold text-2xl lg:text-4xl mb-4'>Challenge</p>
                    <p className='text-[15px]'>The main challenge for the project was getting the correct BPM (beats per minute) for Apple Music song. Fortunately, Spotify provides the BPM so by matching Apple Music songs with Spotify songs we were able to obtain BPM for all songs.</p>
                </div>
                <div className='w-full lg:w-5/12'>
                    <p className='font-bold text-2xl lg:text-4xl mb-4'>Results</p>
                    <p className='text-[15px]'>We are proud to introduce next-gen music app, in which you can generate a playlist from your Apple Music and Spotify accounts and improve workouts with the right music.</p>
                </div>
            </div>
        </div>
    );
};

export default IdeaCakemix;