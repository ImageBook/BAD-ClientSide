import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Dashboard/useAdmin';
import { toast } from 'react-toastify';

const BlogCard = ({ blog }) => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    const { _id, title, img, email, content } = blog;
    const navigate = useNavigate();
    const goToBlog = id => {
        navigate(`/blog/${id}`);
    }

    const deleteBlog = id => {
        fetch(`http://localhost:5000/blogs/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                toast.success('This product is deleted!');
            })
    }

    const updateBlog = id => {
        navigate(`/blog-update/${id}`);
    }

    return (
        <>
            <div className='flex flex-col items-start w-full lg:w-[275px] xl:w-[305px] 2xl:w-[350px] mx-auto hover:cursor-pointer'>
                <img onClick={() => goToBlog(_id)} className='rounded-lg lg:w-[600px] lg:h-[200px] object-cover mb-3' src={img} alt="" />
                {/* <p className='text-sm font-semibold text-gray-400 hover:text-purple-400 mb-2'>#allcategories</p> */}
                <p onClick={() => goToBlog(_id)} className='font-semibold text-xl mb-2'>{title}</p>
                <p onClick={() => goToBlog(_id)} >{content.slice(0, 125)} ...</p>
                {
                    (user && admin) && <div className='flex items-center space-x-3 mt-3'>
                        <button onClick={() => updateBlog(_id)} className='w-28 h-10 font-medium rounded bg-indigo-500 hover:bg-indigo-600 text-white'>Update</button>
                        <button onClick={() => deleteBlog(_id)} className='w-28 h-10 font-medium rounded bg-red-500 hover:bg-red-600 text-white'>Delete</button>
                    </div>
                }
            </div>
        </>
    );
};

export default BlogCard;