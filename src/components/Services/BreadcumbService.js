import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLine } from 'react-icons/ai';

const BreadcumbService = () => {
    return (
        <div className='mt-20 lg:mt-32 flex items-center space-x-2'>
            <Link to='/'><p className='text-[15px] text-[#383841] tracking-wider font-medium'>Home</p></Link>
            <AiOutlineLine className='rotate-90 text-gray-600 w-5 h-5'></AiOutlineLine>
            <p className='font-bold text-[15px] text-[#383841] tracking-wider'>Services</p>
        </div>
    );
};

export default BreadcumbService;