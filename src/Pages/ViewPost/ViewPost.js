import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewPost = () => {
    const { id } = useParams();

    const [blog, setBlog] = useState({});
    console.log(blog);
    useEffect(() => {
        const url = ` https://writehubs.herokuapp.com/blogs/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBlog(data)

            )
    }, [id])
    return (
        <div>
            <div className='flex flex-col justify-center items-center my-12'>
                <p className='text-5xl font-medium my-2.5'>{blog?.title}</p>
                <p className='text-lg my-2.5'>{blog?.category}</p>
                <img style={{ width: "60%" }} src={blog?.img} alt="" />
                <p className='my-2.5 font-light'>{blog?.blog}</p>
            </div>
            <div className=' ml-28 my-12'>
                <p className='text-4xl font-semibold my-9'>1 Comments</p>
                <div className='w-1/2 flex justify-between items-center'>
                    <img style={{ width: '100px' }} src='https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1649742284~hmac=da511d3d1e48ccdea0b125ae03d58f4e' alt="" />
                    <div>
                        <p className='text-2xl font-medium'>Fahim Faysal Siyam</p>
                        <p>This is a very useful post and I am keen to learn about this more.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewPost;