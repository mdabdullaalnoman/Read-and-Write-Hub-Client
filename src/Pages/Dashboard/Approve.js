import React from 'react';
import useBlogs from '../../Hooks/useBlogs';


const Approve = () => {
    const { blogs, confirmBlog, deletBlog } = useBlogs()
    console.log(blogs)
    return (

        <div>
            <div className="relative overflow-x-auto shadow-md  p-5">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Created As
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Approve
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Delete
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map(blog => <tr key={blog._id} className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                {blog.title}
                            </th>
                            <td className="px-6 py-4">
                                {blog.topic}
                            </td>
                            <td className="px-6 py-4">
                                Accessories
                            </td>
                            <td className="px-6 py-4">
                                $99
                            </td>

                            <td className="px-6 py-4">
                                <button onClick={() => confirmBlog(blog._id)} className="px-4 py-1 text-sm text-white bg-blue-400 rounded">
                                    {
                                        blog.status ? 'Approve' : 'Pending'
                                    }
                                </button>
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

      
    );
};

export default Approve;