import React from 'react';

const ReviewHalsa = () => {
    return (
        <div className='space-y-6 py-4 lg:py-20'>
            <div className='space-y-6 flex flex-col lg:flex-row items-center lg:gap-x-20'>
                <div className='w-full lg:w-5/12 mx-auto flex items-start space-x-5'>
                    <img className='w-[75px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/chirag3x.png" alt="" />
                    <div>
                        <p className='font-bold text-2xl lg:text-3xl'>Chirag Lukhi</p>
                        <p>Halsa.life is the best platform where a doctor and a patient meet together virtuallly and try to get best treatment via phone call.</p>
                    </div>
                </div>
                <div className='w-full lg:w-5/12 mx-auto flex items-start space-x-5'>
                    <img className='w-[75px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/anatoly3x.png" alt="" />
                    <div>
                        <p className='font-bold text-2xl lg:text-3xl'>Anatoly Chernyshev</p>
                        <p>HThe application is very useful and helpful for everyone. You can meet a doctor using your mobile phone only. Moreover, you can see full data about your illnesses and diseases, it is awesome I think.</p>
                    </div>
                </div>
            </div>
            <div className='space-y-6 flex flex-col lg:flex-row items-center lg:gap-x-20'>
                <div className='w-full lg:w-5/12 mx-auto flex items-start space-x-5'>
                    <img className='w-[75px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/kishan3x.png" alt="" />
                    <div>
                        <p className='font-bold text-2xl lg:text-3xl'>Kishan Patel</p>
                        <p>I really loved to develop this unique new concept for real world where people can easily get doctor's professional advice anytime without waiting in a hospital queue.</p>
                    </div>
                </div>
                <div className='w-full lg:w-5/12 mx-auto flex items-start space-x-5'>
                    <img className='w-[75px]' src="https://messapps.com/wp-content/themes/twentysixteen/samples/denis3x.png" alt="" />
                    <div>
                        <p className='font-bold text-2xl lg:text-3xl'>Denis Valetin</p>
                        <p>I loved that I had to work on both doctor and patient side of the project and was able to do my best to help them communicate with each other easily</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewHalsa;