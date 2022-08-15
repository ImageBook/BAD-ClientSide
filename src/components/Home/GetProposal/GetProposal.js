import React from 'react';

const GetProposal = () => {
    const handleContact = event => {
        event.preventDefault();
        event.target.reset();
    }

    return (
        <div id='contact' initial='hidden' animate='visible' className='flex flex-col lg:flex-row lg:justify-between items-center gap-10 lg:gap-0 lg:h-screen pt-14 md:pt-16 lg:-pt-10 w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto'>
            <div className='text-center lg:text-left w-full lg:w-1/2 mx-auto'>
                {/* add your own text */}
                <p className='text-[56px] md:text-[100px] font-black  text-[#383841] leading-none'>MAKE DREAM</p>
                <p className='text-[56px] md:text-[100px] font-black  text-[#383841] leading-none md:-mt-2'>A REALITY</p>
                <p className='text-[#383841] font-normal text-[16px] md:text-xl mt-1'>Let's get in touch. Connect with us via: <span className='font-semibold'>(+91)-900XX-XXXXX</span> or email: <span className='font-semibold'>textapps@gmail.com</span>.</p>
                <form onSubmit={handleContact} className='flex flex-col items-center lg:items-start justify-center space-y-3 mt-6'>
                    <input className='w-80 lg:w-[400px] 2xl:w-[500px] h-16 border border-gray-500 rounded p-2 focus:outline-none' type="text" name="" id="" placeholder='Your Name *' required />
                    <input className='w-80 lg:w-[400px] 2xl:w-[500px] h-16 border border-gray-500 rounded p-2 focus:outline-none' type="email" name="" id="" placeholder='Your Email *' required />
                    <input className='w-80 lg:w-[400px] 2xl:w-[500px] h-16 border border-gray-500 rounded p-2 focus:outline-none' type="text" name="" id="" placeholder='Subject *' required />
                    <textarea className='w-80 lg:w-[400px] 2xl:w-[500px] h-28 border border-gray-500 rounded p-2 focus:outline-none mb-2' name="" id="" placeholder='Your Message *' required></textarea>
                    <div className='-ml-40 lg:-ml-0'>
                        <button type='submit' className='w-40 rounded-lg py-3 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition-colors duration-1000 ease-in-out font-bold uppercase tracking-wide'>Submit</button>
                    </div>
                </form>
            </div>

            <div className='w-full lg:w-1/2 mx-auto flex items-center justify-center'>
                <img className='w-[300px] md:w-[400px] 2xl:w-[450px]' src="https://messapps.com/wp-content/themes/twentysixteen/images/newdesign/form-placeholder.svg" alt="" />
            </div>
        </div>
    );
};

export default GetProposal;