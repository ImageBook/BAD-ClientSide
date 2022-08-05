import React from 'react';

const Contribute = () => {
    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-36'>
            <p className='text-center font-medium text-[32px] lg:text-[56px] text-[#383841] leading-tight'>We <span className='font-semibold'>Contribute</span></p>
            <p className='text-center font-medium text-[#383841] text-lg lg:text-xl w-full lg:w-2/5 mx-auto leading-tight'>We're always looking for an opportunity
                to contribute to the community we are in.</p>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-6 mt-8 lg:mt-12'>
                <div className='w-full md:w-1/2 bg-[#FAFAFA] rounded-lg shadow-lg hover:shadow-xl border p-5 lg:h-[340px] xl:h-[300px] 2xl:h-[260px] overflow-hidden'>
                    <p className='text-2xl lg:text-3xl text-[#383841] font-bold pb-2'>NYU Contest</p>
                    <p className='text-lg text-[#383841]'>At Messapps we put a lot of emphasis on education. From helping our clients understand the business to constantly learning new tools and strategies ourselves. To share our expertise further we have built an amazing partnership with New York University where we teach year-round, organize contest for the best app idea and work with students and professors to bring their ideas to life.</p>
                </div>
                <div className='w-full md:w-1/2 bg-[#FAFAFA] rounded-lg shadow-lg hover:shadow-xl border p-5 lg:h-[340px] xl:h-[300px] 2xl:h-[260px]  overflow-hidden'>
                    <p className='text-2xl lg:text-3xl text-[#383841] font-bold pb-2'>Project clean streets</p>
                    <p className='text-lg text-[#383841]'>We live in the best city on earth. Yet, it is also one of the dirtiest. Instead of complaining about government, people, this and that, we've decided to take matters into our own hands and organized Clean Street Project - privately sponsored cleaning of streets in New York.</p>
                </div>
            </div>
        </div>
    );
};

export default Contribute;