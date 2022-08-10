import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const { _id, title, image, email, content } = blog;
    const navigate = useNavigate();
    const goToBlog = id => {
        navigate(`/blog/${id}`);
    }

    return (
        <div onClick={() => goToBlog(_id)} className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto hover:cursor-pointer'>
            <img className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src={image} alt="" />
            {/* <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#allcategories</p> */}
            <p className='font-semibold text-xl mb-2'>{title}</p>
            <p>{content.slice(0, 125)} ...</p>
        </div>
    );
};

export default BlogCard;