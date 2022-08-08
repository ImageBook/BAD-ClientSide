import React from 'react';

const FAQUIUX = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40 text-[#383841]'>
            <p className=' text-[40px] lg:text-[56px] text-center mb-6 leading-tight'><span className='font-semibold'>F.A.Q.</span> about UI/UX Design Services</p>
            <div className='flex items-center justify-center'>
                <img src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/services/UI-UX-apps.png" alt="" />
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-center flex-wrap gap-8 lg:gap-x-4 lg:gap-y-8 mt-8 lg:mt-12'>
                <div className='w-full lg:w-5/12 mx-auto'>
                    <div className='flex flex-col lg:flex-row items-start justify-center text-lg lg:h-[220px] xl:h-[170px] lg:gap-x-8 xl:gap-x-4'>
                        <p className='font-semibold w-full lg:w-1/4 text-left'>How does the work begin?</p>
                        <p className='w-full lg:w-3/4 text-left'>To make our designs look perfect, we have a small pre preparatory process. First, we brief our client about his company and appearance preferences. Then, our specialists analyze the client's business and the industry overall.</p>
                    </div>
                    <hr className='mt-6 lg:mt-0' />
                </div>
                <div className='w-full lg:w-5/12 mx-auto'>
                    <div className='flex flex-col lg:flex-row items-start justify-center text-lg lg:h-[220px] xl:h-[170px] lg:gap-x-8 xl:gap-x-4'>
                        <p className='font-semibold w-full lg:w-1/4 text-left'>What is your design process?</p>
                        <p className='w-full lg:w-3/4 text-left'>Our design process comprises several stages. Our design process comprises several stages. Before making the design itself, designers create user-flow to have an understanding of user paths.</p>
                    </div>
                    <hr className='mt-6 lg:mt-0' />
                </div>
                <div className='w-full lg:w-5/12 mx-auto'>
                    <div className='flex flex-col lg:flex-row items-start justify-center text-lg lg:h-[220px] xl:h-[170px] lg:gap-x-8 xl:gap-x-4'>
                        <p className='font-semibold w-full lg:w-1/4 text-left'>How long does it take to create a design?</p>
                        <p className='w-full lg:w-3/4 text-left'>Usually, it takes about 2 weeks to complete the wireframe stage, and 2-3 weeks to complete the whole design. After that, our team takes another week to make a proper handover between designers and developers.</p>
                    </div>
                    <hr className='mt-6 lg:mt-0' />
                </div>
                <div className='w-full lg:w-5/12 mx-auto'>
                    <div className='flex flex-col lg:flex-row items-start justify-center text-lg lg:h-[220px] xl:h-[170px] lg:gap-x-8 xl:gap-x-4'>
                        <p className='font-semibold w-full lg:w-1/4 text-left'>Can I just make a design?</p>
                        <p className='w-full lg:w-3/4 text-left'>Sure, we have a lot of startup clients who want us just to make a design first to pitch it to investors to gain more money for the development stage.</p>
                    </div>
                    <hr className='mt-6 lg:mt-0' />
                </div>
            </div>
        </div>
    );
};

export default FAQUIUX;