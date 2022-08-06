import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Navbar from '../Home/Navbar/Navbar';
import { CgArrowLongDown } from 'react-icons/cg';
import BlogHeading from './BlogHeading';
import FeaturedBlog from './FeaturedBlog';
import Blogs from './Blogs';
import ServiceContact from '../Services/ServiceContact';
import LatestDesign from './LatestDesign';
import LatestDevelopment from './LatestDevelopment';
import LatestStrategy from './LatestStrategy';
import { Link } from 'react-router-dom';
import { AiOutlineLine } from 'react-icons/ai';
import ServiceFooter from '../Services/ServiceFooter';

const Blog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='hidden lg:block'>
                <HashLink to='/#contact' smooth>
                    <div className='flex gap-2 items-center tracking-wider fixed top-28 font-bold right-0 rotate-90 hover:text-[#550b57] hover:cursor-pointer'>
                        <CgArrowLongDown className='-rotate-90 w-10 h-10'></CgArrowLongDown>
                        GET PROPOSAL
                    </div>
                </HashLink>
            </div>
            <BlogHeading></BlogHeading>
            <FeaturedBlog></FeaturedBlog>
            <Blogs></Blogs>
            <LatestDesign></LatestDesign>
            <LatestDevelopment></LatestDevelopment>
            <LatestStrategy></LatestStrategy>
            <div className='px-2 lg:px-10'>
                <ServiceContact></ServiceContact>
            </div>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-20 lg:my-28'>
                <div className='mt-20 lg:mt-32 flex items-center space-x-2'>
                    <Link to='/'><p className='text-[15px] text-[#383841] tracking-wider font-medium'>Home</p></Link>
                    <AiOutlineLine className='rotate-90 text-gray-600 w-5 h-5'></AiOutlineLine>
                    <p className='font-bold text-[15px] text-[#383841] tracking-wider'>Blog</p>
                </div>
            </div>
            <ServiceFooter></ServiceFooter>
        </div>
    );
};

export default Blog;