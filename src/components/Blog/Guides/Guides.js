import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Navbar from '../../Home/Navbar/Navbar';
import ServiceFooter from '../../Services/ServiceFooter';
import { CgArrowLongDown } from 'react-icons/cg';
import ServiceContact from '../../Services/ServiceContact';
import BlogHeading from './BlogHeading';
import FeaturedBlog from '../FeaturedBlog';
import Blogs from './Blogs';

const Guides = () => {
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
            <div className='px-2 lg:px-10'>
                <ServiceContact></ServiceContact>
            </div>
            <ServiceFooter></ServiceFooter>
        </div>
    );
};

export default Guides;