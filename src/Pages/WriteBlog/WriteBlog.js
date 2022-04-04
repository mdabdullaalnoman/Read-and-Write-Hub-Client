import React, { useState } from 'react';

const WriteBlog = () => {

      const [blogInfo, setblogInfo] = useState({})

      const handleChange = e => {
            e.preventDefault()
            const field = e.target.name;
            const value = e.target.value;
            setblogInfo(prev => ({ ...prev, [field]: value }))
      }

      const handleSubmit = e => {
            e.preventDefault()
            console.log(blogInfo);
      }

      return (
            <div>
                  <h1 className='text-lime-700 flex justify-center text-4xl'>Write Your Blog Here</h1>
                  <div className='flex justify-center'>
                        <form onSubmit={handleSubmit} className="w-4/5 lg:w-2/5 md:w-3/5">
                              <div className="flex flex-wrap -mx-3  mb-4">
                                    <div className="w-full px-3">
                                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                                Title
                                          </label>
                                          <input
                                                onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name='title' type="text" placeholder="Title" />
                                    </div>
                              </div>

                              <div className="flex flex-wrap -mx-3  mb-4">
                                    <div className="w-full px-3">
                                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                                Topic
                                          </label>
                                          <input
                                                onChange={handleChange}
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name='topic' type="text" placeholder="Topic" />
                                    </div>
                              </div>

                              <div className="flex flex-wrap -mx-3  mb-4">
                                    <div className="w-full px-3">
                                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="category">Choose a Category:</label>
                                          <select
                                                onChange={handleChange}
                                                className='py-3 px-4 mb-3 bg-gray-200 w-full' name="category" id="category">
                                                <option value="education">Education</option>
                                                <option value="sport">Sport</option>
                                                <option value="techonology">techonology</option>
                                                <option value="science">Science</option>
                                                <option value="lifestyle">Life Style</option>
                                                <option value="socialawareness">Social Awareness</option>
                                          </select>
                                    </div>
                              </div>

                              <div className="flex flex-wrap -mx-3  mb-4">
                                    <div className="w-full px-3">
                                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                                Image Link
                                          </label>
                                          <input
                                                onChange={handleChange}
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name='img' type="text" placeholder="Image URL Link" />
                                    </div>
                              </div>

                              <div className="flex flex-wrap -mx-3 mb-4">
                                    <div className="w-full px-3">
                                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                                Write Blog
                                          </label>
                                          <textarea
                                                onChange={handleChange}
                                                cols="30" rows="8" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name='blog' type="text" placeholder="Write Blog" />
                                    </div>
                              </div>
                              <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                    Post
                              </button>
                        </form>
                  </div>
            </div>
      );
};

export default WriteBlog;