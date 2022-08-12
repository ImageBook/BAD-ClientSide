import React from 'react';

const IdeaHalsa = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row items-start justify-center gap-6 mb-20 lg:mb-28'>
                <div className='w-full lg:w-5/12'>
                    <p className='font-bold text-2xl lg:text-4xl mb-4'>Idea</p>
                    <p className='text-[15px]'>Halsa.Life was brought to life to address the severe lack of quality medical record keeping apps currently on the market. It also was an opportunity to create an intuitive platform that connects app users to doctors in order to provide direct medical advice.</p>
                </div>
                <div className='w-full lg:w-5/12'>
                    <p className='font-bold text-2xl lg:text-4xl mb-4'>Challenge</p>
                    <p className='text-[15px]'>To make an effective medical app that has user-to-doctor communication capabilities meant creating a new method for connecting users to doctors. The main challenge was enabling doctors to select their availability to connect with users and to ensure that these connections were possible. Also, users needed to have the option to provide the doctors with illness and other medical information after the call so that doctors could review this information and provide advice.</p>
                </div>
                <div className='w-full lg:w-5/12'>
                    <p className='font-bold text-2xl lg:text-4xl mb-4'>Results</p>
                    <p className='text-[15px]'>By creating an innovative calling feature, the app is able to connect users to doctors almost instantaneously. After the call, doctors can then review the user's medical information and provide medical recommendations that then appear directly on the user's account.</p>
                </div>
            </div>
        </div>
    );
};

export default IdeaHalsa;