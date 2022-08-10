import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Navbar from '../Home/Navbar/Navbar';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";

const Dashboard = () => {
    const imageStorageKey = '30d0988b728015c640046cca688a5225';
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [user] = useAuthState(auth);

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const blog = {
                        title: data.title,
                        content: data.content,
                        img: img,
                        email: user?.email
                    }
                    // post to database 
                    fetch('https://pure-cove-10523.herokuapp.com/blogs', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(blog)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Blog added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the blog');
                            }
                        })
                }
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-16 text-[#383841] '>
                <p className='text-2xl md:text-3xl lg:text-5xl font-semibold text-center mb-8'>Create Blog</p>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center'>
                    <input
                        type="text"
                        placeholder="Blog Title"
                        className="border rounded-lg w-72 md:w-96 lg:w-[500px] h-16 px-4 focus:outline-none bg-gray-100 mb-4"
                        {...register("title", {
                            required: {
                                value: true,
                                message: 'Blog Title is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.title?.type === 'required' && <span className="label-text-alt text-red-500 mb-4">{errors.title.message}</span>}
                    </label>
                    <input
                        type="file"
                        className="w-72 md:w-96 lg:w-[500px] mx-auto mb-3"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500 mb-4">{errors.image.message}</span>}
                    </label>
                    <textarea
                        type="text"
                        placeholder="Content"
                        className="border rounded-lg w-72 md:w-96 lg:w-[500px] h-44 px-4 pt-2 focus:outline-none bg-gray-100 mb-4 mt-1"
                        {...register("content", {
                            required: {
                                value: true,
                                message: 'Content is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.content?.type === 'required' && <span className="label-text-alt text-red-500 mb-4">{errors.content.message}</span>}
                    </label>
                    <button className='w-72 md:w-96 lg:w-[500px] mx-auto font-medium text-xl tracking-wide rounded-lg text-stone-100 transition-foc duration-500 ease-in-out bg-purple-500 hover:bg-purple-600 p-2 mb-5' type='submit'>Post</button>
                </form>
            </div>
        </div>
    );
};

export default Dashboard;