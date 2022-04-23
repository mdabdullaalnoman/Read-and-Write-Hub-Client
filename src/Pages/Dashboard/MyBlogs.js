import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useBlogs from '../../Hooks/useBlogs';

const MyBlogs = () => {
    const{user}= useAuth()
    const {blogs}= useBlogs()
    const [myBlogs, setMyBlogs]= useState([])
    useEffect(() => {
        if (user.email) {
            const myBlogsData = blogs.filter(blog => blog.email === user.email);
            setMyBlogs(myBlogsData)
        }
    }, [blogs, user.email])
    return (
        <div>
            my blogs
            {
                myBlogs.length
            }
        </div>
    );
};

export default MyBlogs;