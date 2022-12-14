import React, { useEffect, useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
// import parse from 'html-react-parser';
import JoditEditor from "jodit-react";
import { useRef } from 'react';
import axios from 'axios';
// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const UpdateBlog = () => {
    const { register, formState: { errors }, handleSubmit, reset, setValue } = useForm();
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const [user] = useAuthState(auth);
    // const imageStorageKey = '30d0988b728015c640046cca688a5225';
    const editor = useRef(null);
    const [text, setText] = useState("");

    useEffect(() => {
        fetch(`https://pure-cove-10523.herokuapp.com/blogs/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [id]);

    

    const { title, content } = blog;

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('file', image);
        formData.append("upload_preset", "kghszgfx");
        axios.post("https://api.cloudinary.com/v1_1/dewunyk7d/image/upload", formData).then((response) => {
            console.log('url', response.data.secure_url);
            if (response.status === 200) {
                const img = response.data.url;
                const blog = {
                    title: data.title,
                    content: text,
                    img: img,
                    email: user?.email
                }
                // console.log('update blog', blog);

                // update blog on database 
                fetch(`https://pure-cove-10523.herokuapp.com/blogs/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(blog)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log('data', data)
                        if (data.modifiedCount > 0) {
                            // console.log('success');
                            toast.success("The Blog is updated successfully");
                            reset();
                        }
                    })
            }
        })


        // const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         if (result.success) {
        //             const img = result.data.url;
        //             const blog = {
        //                 title: data.title,
        //                 content: text,
        //                 img: img,
        //                 email: user?.email
        //             }
        //             // console.log('update blog', blog);

        //             // update blog on database 
        //             fetch(`https://pure-cove-10523.herokuapp.com/blogs/${id}`, {
        //                 method: 'PATCH',
        //                 headers: {
        //                     'content-type': 'application/json',
        //                 },
        //                 body: JSON.stringify(blog)
        //             })
        //                 .then(res => res.json())
        //                 .then(data => {
        //                     // console.log('data', data)
        //                     if (data.modifiedCount > 0) {
        //                         // console.log('success');
        //                         toast.success("The Blog is updated successfully");
        //                         reset();
        //                     }
        //                 })
        //         }
        //     })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-16 text-[#383841] '>
                <p className='text-2xl md:text-3xl lg:text-5xl font-semibold text-center mb-4'>Update Blog</p>
                <p className='text-lg md:text-xl lg:text-2xl font-semibold text-center mb-8 w-full md:w-3/4 lg:w-1/2 mx-auto'>{title}</p>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center'>
                    <div className='flex flex-col space-y-2 items-start mb-5'>
                        <input
                            type="text"
                            placeholder={title}
                            className="border rounded-lg w-72 md:w-96 lg:w-[500px] h-16 px-4 focus:outline-none bg-gray-100"
                            {...register("title", {
                                required: {
                                    value: true,
                                    message: 'Blog Title is Required'
                                }
                            })}
                        />
                        <button type='button' onClick={() => setValue('title', title)} className="bg-black w-32 h-10 text-gray-100 rounded-lg">Edit Title</button>
                    </div>
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
                    {/* <div className='flex flex-col space-y-2 items-start mb-4'>
                        <textarea
                            type="text"
                            placeholder={content}
                            className="border rounded-lg w-72 md:w-96 lg:w-[500px] h-44 px-4 pt-2 focus:outline-none bg-gray-100 mt-1"
                            {...register("content", {
                                required: {
                                    value: true,
                                    message: 'Content is Required'
                                }
                            })}
                        />
                        <button type='button' onClick={() => setValue('content', content)} className=" bg-black w-32 h-10 text-gray-100 rounded-lg">Edit Content</button>
                    </div> */}
                    <div className='mb-4'>
                        <JoditEditor
                            ref={editor}
                            value={content}
                            tabIndex={1}
                            onBlur={newContent => setText(newContent)}
                        />
                    </div>
                    {/* <div className='mb-4'>
                        <CKEditor
                            editor={ClassicEditor}
                            
                            onChange={(e, editor) => { handleChange(e, editor) }}
                        />
                    </div> */}
                    <label className="label">
                        {errors.content?.type === 'required' && <span className="label-text-alt text-red-500 mb-4">{errors.content.message}</span>}
                    </label>
                    <button className='w-72 md:w-96 lg:w-[500px] mx-auto font-medium text-xl tracking-wide rounded-lg text-stone-100 transition-foc duration-500 ease-in-out bg-purple-500 hover:bg-purple-600 p-2 mb-5' type='submit'>Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateBlog;