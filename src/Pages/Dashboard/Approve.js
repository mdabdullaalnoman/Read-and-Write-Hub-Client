import React from 'react';
import useBlogs from '../../Hooks/useBlogs';


const Approve = () => {
    const {blogs, confirmBlog, deletBlog}= useBlogs()
    console.log(blogs)
    return (
        <div class="container flex justify-center mx-auto pt-20">
            <div class="flex flex-col">
                <div class="w-full">
                    <div class="border-b border-gray-200 shadow">
                        <table>
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-2 text-xs text-gray-500">
                                        ID
                                    </th>
                                    <th class="px-6 py-2 text-xs text-gray-500">
                                        Name
                                    </th>
                                   
                                    <th class="px-6 py-2 text-xs text-gray-500">
                                        Created_at
                                    </th>
                                    <th class="px-6 py-2 text-xs text-gray-500">
                                        status
                                    </th>
                                  
                                </tr>
                            </thead>
                            <tbody class="bg-white">
{
    blogs.map(blog=>(   <tr key={blog._id} class="whitespace-nowrap">
    <td class="px-6 py-4 text-sm text-gray-500">
    {blog.title}
    </td>
    <td class="px-6 py-4">
        <div class="text-sm text-gray-900">
        {blog.topic}
        </div>
    </td>
  
    <td class="px-6 py-4 text-sm text-gray-500">
        2021-1-12
    </td>
    <td class="px-6 py-4 text-sm text-gray-500">
      {
      blog.status ? 'Approve': 'Pending'
      }
    </td>
    <td class="px-6 py-4">
        <button onClick={()=>confirmBlog(blog._id)} to="/" class="px-4 py-1 text-sm text-white bg-blue-400 rounded">approve  </button>
    </td>
    <td class="px-6 py-4">
        <button  onClick={()=>deletBlog(blog._id)} class="px-4 py-1 text-sm text-white bg-red-400 rounded">Delete  </button>
    </td>
</tr>


    ))
}
                             

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Approve;