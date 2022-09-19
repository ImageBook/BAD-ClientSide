import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Navbar from '../Home/Navbar/Navbar';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import JoditEditor from "jodit-react";
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Dashboard = () => {
    // const imageStorageKey = 'a89df49b16267d3fa04252fa03d8ce52';
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const editor = useRef(null);
    const [text, setText] = useState("");
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();
    const goToBlog = () => {
        navigate('/blog');
    }

    const [user] = useAuthState(auth);

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('file', image);
        formData.append("upload_preset", "kghszgfx");
        axios.post("https://api.cloudinary.com/v1_1/dewunyk7d/image/upload", formData).then((response) => {
            console.log('url', response.data.secure_url);
            if (response.status === 200) {
                const img = response.data.secure_url;
                const blog = {
                    title: data.title,
                    content: text,
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
                            setModal(true);
                            toast.success('Blog added successfully')
                            reset();
                            setText('');
                        }
                        else {
                            toast.error('Failed to add the blog');
                        }
                    })
            }
        })
        // const url = `https://api.cloudinary.com/v1_1/dewunyk7d/image/upload`;
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         if (result.status === 200) {
        //             const img = result.data.secure_url;
        //             const blog = {
        //                 title: data.title,
        //                 content: text,
        //                 img: img,
        //                 email: user?.email
        //             }
        //             // post to database 
        //             fetch('https://pure-cove-10523.herokuapp.com/blogs', {
        //                 method: 'POST',
        //                 headers: {
        //                     'content-type': 'application/json',
        //                 },
        //                 body: JSON.stringify(blog)
        //             })
        //                 .then(res => res.json())
        //                 .then(inserted => {
        //                     if (inserted.insertedId) {
        //                         setModal(true);
        //                         toast.success('Blog added successfully')
        //                         reset();
        //                         setText('');
        //                     }
        //                     else {
        //                         toast.error('Failed to add the blog');
        //                     }
        //                 })
        //         }
        //     })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-16 text-[#383841] relative'>
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
                        className="w-72 md:w-96 lg:w-[500px] mx-auto mb-4"
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
                    {/* <textarea
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
                    </label> */}
                    <div className='mb-4'>
                        <JoditEditor
                            ref={editor}
                            tabIndex={1}
                            onBlur={newContent => setText(newContent)}
                        />
                    </div>
                    <button className='w-72 md:w-96 lg:w-[500px] mx-auto font-medium text-xl tracking-wide rounded-lg text-stone-100 transition-foc duration-500 ease-in-out bg-purple-500 hover:bg-purple-600 p-2 mb-5' type='submit'>Post</button>
                </form>
                {
                    modal &&
                    <div data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-offset="200" className='absolute top-1/3 left-[12px] sm:left-6 md:left-12 lg:left-40 xl:left-[270px] 2xl:left-[310px] flex flex-col items-center justify-center w-11/12 md:w-5/6 lg:w-4/6 xl:w-1/2 mx-auto rounded bg-gray-200 px-5 py-3'>
                        <p className='font-bold text-xl md:text-2xl leading-tight mb-1 mt-3 text-center'>Your blog is successfully posted!</p>
                        <p className='font-medium text-xl mb-3 text-center'>Do you want to see all your blogs?</p>
                        <div className='flex items-center mb-4 space-x-4'>
                            <button onClick={goToBlog} className='bg-emerald-500 text-white hover:bg-emerald-600 transition duration-500 ease-in-out px-5 py-2 rounded-lg font-medium text-lg tracking-wide'>Yes</button>
                            <button onClick={() => setModal(false)} className='bg-red-500 text-white hover:bg-red-600 transition duration-500 ease-in-out px-3 py-2 rounded-lg font-medium text-lg tracking-wide'>Later</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Dashboard;