import data from '@mapbox/mapbox-gl-directions/src/reducers';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useComments from '../../Hooks/useComments';

const ViewPost = () => {
    const { id } = useParams();
    const {user}= useAuth();
    const {postComments, comments, dataLoad}= useComments();
    const [blogComment, setBlogComment]= useState([]);

    const [comment, setComment] = useState({})
    console.log(dataLoad)
    const [blog, setBlog] = useState({});
    useEffect(() => {
        const url = ` https://writehubs.herokuapp.com/blogs/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBlog(data)

            )
    }, [id])
    useEffect(() => {
        if (id) {
            const blogComments = comments.filter(comment => comment.blog_id === id);
            setBlogComment(blogComments)
            
        }
    }, [comments, id])
    const handleOnclick = e => {
        const field = e.target.name;
        const value = e.target.value;
        setComment(prev => ({ ...prev, [field]: value , blog_id: id}))
    }

    const handleSubmit = e => {
        e.preventDefault()
        postComments(comment);
    }

    return (
        <div>
            <div className='flex flex-col justify-center items-center my-12'>
                <p className='text-5xl font-medium my-2.5'>{blog?.title}</p>
                <p className='text-lg my-2.5'>{blog?.category}</p>
                <img style={{ width: "60%" }} src={blog?.img} alt="" />
                <p className='my-2.5 font-light'>{blog?.blog}</p>
            </div>
            <div className='ml-28 my-12'>
            <p className='text-4xl font-semibold my-9'>{blogComment.length} Comments</p>
                {
                    blogComment.map(comment=><div>
                          
                <div className='w-1/2 flex justify-between items-center'>
                    <img style={{ width: '100px' }} src='https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1649742284~hmac=da511d3d1e48ccdea0b125ae03d58f4e' alt="" />
                    <div>
                        <p className='text-2xl font-medium'>{comment.name}</p>
                        <p>{comment.messeage}</p>
                    </div>
                </div>
                    </div>

                    )
                }
              
            </div>

            {
                user?.email && <div>
                      <p className='text-4xl font-medium ml-28 my-12'>Add Comment</p>
            <div className='flex flex-col justify-center items-center'>
                <form onSubmit={handleSubmit} className='w-3/5'>
                    <div className='border-b border-teal-500'>
                        <input onChange={handleOnclick} class=" appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 my-3 leading-tight focus:outline-none " type="text" name='name' placeholder="Your Name" aria-label="Full name" />
                    </div>
                    <div className='border-b border-teal-500'>
                        <input onChange={handleOnclick} class=" appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 my-3 leading-tight focus:outline-none" type="text" name='email' placeholder="Your Email" aria-label="Full name" />
                    </div>
                    <div className='border-b border-teal-500'>
                        <input onChange={handleOnclick} class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 my-3 leading-tight focus:outline-none " type="text" name='website' placeholder="Website" aria-label="Full name" />
                    </div>
                    <div className='border-b border-teal-500'>
                        <textarea onChange={handleOnclick} className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' name="messeage" placeholder='Your Messeage' id="" cols="30" rows="8"></textarea>
                    </div>
                    <button className='p-2 mt-10 text-white w-50 bg-blue-600' type='submit'>Submit</button>
                </form>
            </div>
                </div>
            }
          
        </div>
    );
};

export default ViewPost;