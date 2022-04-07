import useBlogs from '../../Hooks/useBlogs';

const Post = () => {

    const {blogs} = useBlogs()

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 lg:gap-10 px-5  md:px-5 lg:px-10 bg-slate-300 py-20 md:py-25">
            {
                blogs.map(post =>
                    <div key={post._id}>
                        <div className="blog-cart-warp bg-white">
                            <div className="blog-cart-img ">
                                <img className='w-full' src={post.img} alt={post.title} />
                            </div>
                            <div className="blog-content  p-4">
                                <p className='text-gray-500 font-semibold'>{post.date}</p>
                                <h3 className='font-serif text-2xl font-large py-5'>{post.title}</h3>
                                <p className='font-sans text-gray-500'>{post.blog}</p>
                                <p className='pt-5 text-blue-600 text-lg font-semibold'>{post.category}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Post;