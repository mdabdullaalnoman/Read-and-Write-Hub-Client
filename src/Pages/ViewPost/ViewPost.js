import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewPost = () => {
    const { id } = useParams();

    const [blog, setBlog] = useState({});
    useEffect(() => {
        const url = ` https://writehubs.herokuapp.com/blogs/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBlog(data)

            )
    }, [id])
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 lg:gap-10 px-5  md:px-5 lg:px-10 bg-slate-300 py-20 md:py-25">

                <div>
                    <div className="blog-cart-warp bg-white">
                        <div className="blog-cart-img ">
                            <img className='w-full' src={blog.img} alt={blog.title} />
                        </div>
                        <div className="blog-content  p-4">
                            <p className='text-gray-500 font-semibold'>{blog.date}</p>
                            <p className='font-sans text-gray-500'>{blog.blog}</p>
                            <p className='pt-5 text-blue-600 text-lg font-semibold'>{blog.category}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewPost;