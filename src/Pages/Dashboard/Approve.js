import React from 'react';
import useBlogs from '../../Hooks/useBlogs';


const Approve = () => {
    const { blogs, confirmBlog, deletBlog } = useBlogs()
    console.log(blogs)
    return (

        <div>
            <div class="relative overflow-x-auto shadow-md">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Created As
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Approve
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Delete
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map(blog => <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                {blog.title}
                            </th>
                            <td class="px-6 py-4">
                                {blog.topic}
                            </td>
                            <td class="px-6 py-4">
                                Accessories
                            </td>
                            <td class="px-6 py-4">
                                $99
                            </td>

                            <td class="px-6 py-4">
                                <button onClick={() => confirmBlog(blog._id)} className="px-4 py-1 text-sm text-white bg-blue-400 rounded">
                                    {
                                        blog.status ? 'Approve' : 'Pending'
                                    }
                                </button>
                            </td>

                            <td class="px-6 py-4">
                                <button onClick={() => deletBlog(blog._id)} className="px-4 py-1 text-sm text-white bg-red-400 rounded">Delete</button>
                            </td>

                        </tr>)

                        }
                    </tbody>
                </table>
            </div>
        </div>

        // <div className="overflow-x-scrool">
        //     <div class="container flex justify-center ">
        //         <div class="w-full">
        //             <div class="border-b border-gray-200 shadow">
        //                 <table>
        //                     <thead class="bg-gray-50">
        //                         <tr>
        //                             <th class="px-6 py-2 text-xs text-gray-500">
        //                                 ID
        //                             </th>
        //                             <th class="px-6 py-2 text-xs text-gray-500">
        //                                 Name
        //                             </th>

        //                             <th class="px-6 py-2 text-xs text-gray-500">
        //                                 Created_at
        //                             </th>
        //                             <th class="px-6 py-2 text-xs text-gray-500">
        //                                 status
        //                             </th>

        //                         </tr>
        //                     </thead>
        //                     <tbody class="bg-white">
        //                         {
        //                             blogs.map(blog => (<tr key={blog._id} class="whitespace-nowrap">
        //                                 <td class="px-6 py-4 text-sm text-gray-500">
        //                                     {blog.title}
        //                                 </td>
        //                                 <td class="px-6 py-4">
        //                                     <div class="text-sm text-gray-900">
        //                                         {blog.topic}
        //                                     </div>
        //                                 </td>

        //                                 <td class="px-6 py-4 text-sm text-gray-500">
        //                                     2021-1-12
        //                                 </td>
        //                                 <td class="px-6 py-4 text-sm text-gray-500">
        //                                     {
        //                                         blog.status ? 'Approve' : 'Pending'
        //                                     }
        //                                 </td>
        //                                 <td class="px-6 py-4">
        //                                     <button onClick={() => confirmBlog(blog._id)} to="/" class="px-4 py-1 text-sm text-white bg-blue-400 rounded">approve  </button>
        //                                 </td>
        //                                 <td class="px-6 py-4">
        //                                     <button onClick={() => deletBlog(blog._id)} class="px-4 py-1 text-sm text-white bg-red-400 rounded">Delete  </button>
        //                                 </td>
        //                             </tr>


        //                             ))
        //                         }
        //                     </tbody>
        //                 </table>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Approve;