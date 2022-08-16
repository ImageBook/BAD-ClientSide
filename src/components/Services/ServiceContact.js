import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import BreadcumbService from './BreadcumbService';
import { send } from 'emailjs-com';
import { toast } from 'react-toastify';


const ServiceContact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [subject, setSubject] = useState('');

    const getName = e => {
        setName(e.target.value);
    }
    const getEmail = e => {
        setEmail(e.target.value);
    }
    const getText = e => {
        setText(e.target.value);
    }
    const getSubject = e => {
        setSubject(e.target.value);
    }

    const handleContact = event => {
        event.preventDefault();
        send(
            'service_5qn24qs',
            'template_g1jsoln',
            { name, email, text, subject },
            'SPL8rJyPUyeCRXNLo'
        )
            .then(res => {
                console.log('response', res.status);
                if(res.status === 200){
                    toast.success('Your message is sent!');
                }
            })
            .catch(err => {
                console.log('failed', err)
            })
        event.target.reset();
    }

    return (
        <div id='contact' className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-20 lg:my-40'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0'>
                <div className='w-full lg:w-1/2'>
                    <p className='text-center lg:text-left font-black text-[49px] lg:text-[56px] 2xl:text-[75px] text-[#383841] leading-tight'>Make Your</p>
                    <p className='text-center lg:text-left font-black text-[49px] lg:text-[56px] 2xl:text-[75px] text-[#383841] leading-tight lg:-mt-3'>Dream a Reality</p>
                    <p className='text-[#383841] text-lg xl:text-xl text-center lg:text-left mt-2'>At BAD (Best App Dev), we don't just develop apps. We build dreams. Let's build yours!</p>
                </div>
                <div className='w-full lg:w-1/2 mx-auto'>
                    <form onSubmit={handleContact} className='flex flex-col items-center justify-center space-y-3 mt-6'>
                        <input onChange={getName} className='w-80 lg:w-[400px] 2xl:w-[500px] h-16 border border-gray-500 rounded p-2 focus:outline-none' type="text" name="name" id="" placeholder='Your Name *' required />
                        <input onChange={getEmail} className='w-80 lg:w-[400px] 2xl:w-[500px] h-16 border border-gray-500 rounded p-2 focus:outline-none' type="email" name="email" id="" placeholder='Your Email *' required />
                        <input onChange={getSubject} className='w-80 lg:w-[400px] 2xl:w-[500px] h-16 border border-gray-500 rounded p-2 focus:outline-none' type="text" name="subject" id="" placeholder='Subject *' required />
                        <textarea onChange={getText} className='w-80 lg:w-[400px] 2xl:w-[500px] h-28 border border-gray-500 rounded p-2 focus:outline-none mb-2' name="text" id="" placeholder='Your Message *' required></textarea>
                        <div className='pt-2 lg:-ml-60 2xl:-ml-[340px]'>
                            <button type='submit' className='w-40 rounded-lg py-3 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition-colors duration-1000 ease-in-out font-bold uppercase tracking-wide'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ServiceContact;