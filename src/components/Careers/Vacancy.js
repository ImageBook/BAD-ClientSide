import React, { useState } from 'react';

const Vacancy = () => {
    const [check, setCheck] = useState(true);
    const [check1, setCheck1] = useState(false);
    const toggleCheck = () => {
        setCheck(true);
        setCheck1(false);
    }
    const toggleCheck1 = () => {
        setCheck(false);
        setCheck1(true);
    }

    return (
        <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-40'>
            <p className='text-center text-[48px] lg:text-[88px] font-black text-[#383841] leading-none'>Check</p>
            <p className='text-center text-[48px] lg:text-[88px] font-black text-[#383841] leading-none'>Our Vacancies</p>
            <p className='text-center text-lg text-[#383841] mt-2'>We offer full-time remote work for amazing specialists.</p>
            <div className='flex items-center justify-center my-5'>
                <img className='w-[300px] h-[300px]' src="https://messapps.com/wp-content/uploads/2022/03/nice-work.png" alt="" />
            </div>
            <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-12 pt-10 lg:ml-20 pb-2'>
                <p onClick={toggleCheck} className={(check ? "font-bold" : "font-normal") + "text-[#383841] text-[22px] hover:cursor-pointer"}>Backend Node JS Developer</p>
                <p onClick={toggleCheck1} className={(check1 ? "font-bold" : "font-normal") + "text-[#383841] text-[22px] hover:cursor-pointer"}>iOS Developer</p>
            </div>
            <hr className='lg:mx-10' />
            {
                check &&
                <div className='bg-[#FAFAFA] lg:mx-10 text-[#383841] px-4 lg:px-8 py-5 rounded shadow'>
                    <div>
                        <p className='text-[32px] lg:text-[52px] font-semibold'>Backend Node JS Developer</p>
                        <p className='text-lg font-medium lg:text-xl -mt-1'>Required experience: 3-6 years</p>
                    </div>
                    <div className='mt-4 mb-6'>
                        <p className='text-2xl lg:text-3xl font-medium mb-2'>Responsibilities</p>
                        <div className='space-y-[2px] text-lg lg:text-xl pl-4 lg:pl-8'>
                            <p>* Design and implementation of API protocols for various front-end parts</p>
                            <p>* Design and implementation of architecture and databases</p>
                            <p>* Design and implementation of cloud architecture and infrastructure</p>
                            <p>* Thrive in using and implementing TDD/DDD</p>
                            <p>* Writing reusable, testable, and efficient code</p>
                        </div>
                    </div>
                    <div className='mt-4 pb-2'>
                        <p className='text-2xl lg:text-3xl font-medium mb-2'>Skills And Qualifications</p>
                        <div className='space-y-[2px] text-lg lg:text-xl pl-4 lg:pl-8'>
                            <p>* Strong proficiency with JavaScript (or/and TypeScript)</p>
                            <p>* Knowledge of Node.Js platform, frameworks and ecosystems</p>
                            <p>* Strong knowledge and experience with SQL/NoSQL (MySQL/PostgreSQL/MongoDB)</p>
                            <p>* Knowledge and experience with OpenAPI, Swagger (or/and GraphQL)</p>
                            <p>* Knowledge and experience with cloud infrastructure (AWS/Google Cloud/DigitalOcean)</p>
                            <p>* Versioning knowledge and experience (GitHub/GitLab/BitBucket)</p>
                            <p>* Understanding accessibility and security compliance</p>
                            <p>* Understanding fundamental design principles behind a scalable application</p>
                            <p>* Creating / Normalization / Maintenance database schemas that represent and support business processes</p>
                        </div>
                    </div>
                </div>
            }
            {
                check1 &&
                <div className='bg-[#FAFAFA] lg:mx-10 text-[#383841] px-4 lg:px-8 py-5 rounded shadow transition duration-300 ease-in-out'>
                    <div>
                        <p className='text-[32px] lg:text-[52px] font-semibold'>iOS Developer</p>
                        <p className='text-lg font-medium lg:text-xl -mt-1'>Required experience: 1+ years</p>
                    </div>
                    <div className='mt-4 mb-6'>
                        <p className='text-2xl lg:text-3xl font-medium mb-2'>Responsibilities</p>
                        <div className='space-y-[2px] text-lg lg:text-xl pl-4 lg:pl-8'>
                            <p>* Design and develop mobile apps, underlying APIs across a number of programming languages with focus on</p>
                            <p>* Objective-c and Swift.</p>
                            <p>* Plan and build iOS project architectures</p>
                            <p>* Plan iOS timelines</p>
                            <p>* Writing reusable, testable, and efficient code</p>
                        </div>
                    </div>
                    <div className='mt-4 pb-2'>
                        <p className='text-2xl lg:text-3xl font-medium mb-2'>Skills And Qualifications</p>
                        <div className='space-y-[2px] text-lg lg:text-xl pl-4 lg:pl-8'>
                            <p>* 3+ years of experience</p>
                            <p>* Must have 3+ apps already developed</p>
                            <p>* Must have advanced knowledge of Swift and Objective-C.</p>
                            <p>* Must have advanced knowledge of Xcode and other development platforms.</p>
                            <p>* Team work</p>
                        </div>
                    </div>
                </div>
            }
            <div className='flex items-center justify-center mt-10'>
                <button className='w-44 rounded-lg py-3 text-white text-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 transition-colors duration-1000 ease-in-out font-bold tracking-wide'>Fill the Form</button>
            </div>
        </div>
    );
};

export default Vacancy;