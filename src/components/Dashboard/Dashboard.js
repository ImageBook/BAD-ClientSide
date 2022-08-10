import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Navbar from '../Home/Navbar/Navbar';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const addBlog = event => {
        event.preventDefault();
        const blog = {
            title: event.target.title.value,
            image: event.target.image.value,
            content: event.target.content.value,
            email: user?.email
        };
        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blog)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("New blog is added successfully!");
                }
                console.log('blog', data);
            })
        event.target.reset();
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-16 text-[#383841] '>
                <p className='text-2xl md:text-3xl lg:text-5xl font-semibold text-center mb-8'>Create Blog</p>
                <form onSubmit={addBlog} className='flex flex-col items-center justify-center'>
                    <input className='border rounded-lg w-72 md:w-96 lg:w-[500px] h-16 px-4 focus:outline-none bg-gray-100 mb-3' type="text" name='title' id='title' placeholder='Blog Title...' required />
                    <input className='border rounded-lg w-72 md:w-96 lg:w-[500px] h-16 pl-4 focus:outline-none bg-gray-100 mb-3' type="text" name='image' id='image' placeholder='Image link' required />
                    <textarea className='border rounded-lg w-72 md:w-96 lg:w-[500px] h-44 px-4 pt-2 focus:outline-none bg-gray-100 mb-4' name="content" id="content" placeholder='Content...' required></textarea>
                    <button className='w-72 md:w-96 lg:w-[500px] mx-auto font-medium text-xl tracking-wide rounded-lg text-stone-100 transition-foc duration-500 ease-in-out bg-purple-500 hover:bg-purple-600 p-2 mb-5' type='submit'>Post</button>
                </form>
            </div>
        </div>
    );
};

export default Dashboard;