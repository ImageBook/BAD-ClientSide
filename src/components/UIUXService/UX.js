import React from 'react';

const UX = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40 text-[#383841]'>
            <div className='flex flex-col lg:flex-row-reverse items-center justify-center gap-6 md:gap-10'>
                <div className='w-full lg:w-1/2 mx-auto flex justify-center'>
                    <img className='w-4/5' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/ux-phones.png" alt="" />
                </div>
                <div className='w-full lg:w-1/2 mx-auto'>
                    <p className='text-2xl lg:text-4xl font-semibold mb-3'>User Experience (UX)</p>
                    <p className='text-lg lg:text-[22px] mb-3'>User experience (UX) refers to user emotions and attitudes regarding the use of a particular product, in our case, mobile applications. User interface design and user experience are interrelated since the quality of an individual's experience using the application correlates with the quality of interface elements such as:</p>
                    <hr />
                    <div className='flex space-x-4 my-3'>
                        <p className='font-semibold lg:text-lg w-1/4'>User Profile</p>
                        <p className='lg:text-lg w-3/4'>We create our apps based on user profiles and their needs.</p>
                    </div>
                    <hr />
                    <div className='flex space-x-4 my-3'>
                        <p className='font-semibold lg:text-lg w-1/4'>Market Research</p>
                        <p className='lg:text-lg w-3/4'>In order to deliver the best user experience, we look into the products that already exist.</p>
                    </div>
                    <hr />
                    <div className='flex space-x-4 my-3'>
                        <p className='font-semibold lg:text-lg w-1/4'>Design Concept Research</p>
                        <p className='lg:text-lg w-3/4'>Researching our users and the market, we learn about what visuals they gravitate to.</p>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default UX;