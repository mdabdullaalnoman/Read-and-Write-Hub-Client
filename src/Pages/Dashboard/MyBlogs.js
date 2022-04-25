import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useBlogs from '../../Hooks/useBlogs';

const MyBlogs = () => {
    const { user } = useAuth();
    const [myBlogs, setMyBlogs] = useState([]);
    const { blogs, deletBlog } = useBlogs();

    useEffect(() => {
        if (user.email) {
            const myBlogsData = blogs.filter(blog => blog.email === user.email);
            setMyBlogs(myBlogsData)
        }
    }, [blogs, user.email])
    console.log(user);
    return (
        <div>
            <div>
                <div className="relative overflow-x-auto shadow-md  p-5">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Created As
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Creator
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Delete
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {myBlogs.map(blog => <tr key={blog._id} className="bg-white dark:bg-gray-800">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    {blog._id}
                                </th>
                                <td className="px-6 py-4">
                                    {blog.title}
                                </td>
                                <td className="px-6 py-4">
                                    {user.displayName}
                                </td>
                                <td className="px-6 py-4">
                                    <img src={user.photoURL} alt="creator" className='h-10 w-10 rounded' />
                                </td>

                                <td className="px-6 py-4">
                                    <button onClick={() => deletBlog(blog._id)} className="px-4 py-1 text-sm text-white bg-red-400 rounded">Delete</button>
                                </td>

                            </tr>)

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBlogs;