import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewPost = () => {
    const {id}= useParams();

    const [blog, setBlog]= useState({});
    useEffect(() => {
        const url = ` https://writehubs.herokuapp.com/blogs/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBlog(data)

            )
    }, [id])
    return (
        <div>
            <h1>{blog.title}</h1>
        </div>
    );
};

export default ViewPost;