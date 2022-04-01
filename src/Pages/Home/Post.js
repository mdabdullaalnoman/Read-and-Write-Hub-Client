import React, { useEffect, useState } from 'react';

const Post = () => {
    const [post, setPost] = useState([]);
    console.log(post);
    useEffect(() => {
        fetch('./post.JSON')
            .then(res => res.json())
            .then(data => setPost(data))

            .then(err => console.log(err))
    }, []);
    return (
        <div className="grid grid-cols-3 gap-4">
            {
                post.map(post =>
                    <div key={post.id}>
                        <div className="blog-cart-warp ">
                            <div className="blog-cart-img">
                                <img src={post.imgURL} alt={post.title} />
                            </div>
                            <div className="blog-content">
                                <p>{post.date}</p>
                                <h3>{post.title}</h3>
                                <p>{post.description}</p>
                                <p>{post.category}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Post;