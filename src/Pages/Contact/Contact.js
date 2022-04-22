import React from 'react';
import Header from '../../SharedComponent/Header';
import Tags from '../../SharedComponent/Tags';
import PopularPosts from '../../SharedComponent/PopularPosts';
import Footer from '../../SharedComponent/Footer';

const Contact = () => {
	return (
		<div>
			<Header />
		<div  className="lg:mx-40 md:mx-40 sm:mx-10">
			
			<div>
                <h1 className="text-center text-6xl font-semibold my-12">Feel Free To Contact Us.</h1>
            </div>
			<div>
			  <img className="mx-auto my-12" src="https://i.ibb.co/gmg9ZtY/map.png" alt="" />
			</div>
			<div>
				<h2 className="mb-12 font-bold text-xl">
				Each individual blogger has their own motivation for blogging. Many of them use it as an alternative to keeping a diary or journal. Blogging sites provides them with a venue to share their creativity and ideas to a wider audience.Top brands and businesses create blogs to educate their customers, share news, and reach a wider audience. Blogging is an essential part of online marketing strategy for many businesses.
				</h2>
				<h3 className="text-gray-500 my-12 ">
				Many bloggers also make money through affiliate marketing. Basically, they recommend products on their websites and earn a commission when users buy those products. For example, you can share your favorite Amazon products and earn a referral fee when users purchase using your link.Other common monetization methods include memberships, selling online courses, or adding an online store (eCommerce) to the blog.Yes, anyone who wants to start a blog, can easily do so.In the early days of blogging, users needed HTML and PHP coding skills to even update their blogs.Now, there are plenty of blogging tools like WordPress, Tumblr, Medium, Blogger, Wix, Squarespace, etc that allow you to easily create your first blog without ever writing code.Basically, if you can point-and-click, then you can build a blog within minutes.
				</h3>
			</div>
			<div className="grid grid-cols-2 gap-4">
                <div>
                  <h2 className="text-3xl font-semibold my-12 ">Where to Find Us</h2>
                  <p className="text-gray-500">
				   1600 Amphitheatre Parkway <br />
                   Mountain View, CA <br />
                   94043 US
                  </p>
                </div>
                <div>
                   <h2 className="text-3xl font-semibold my-12 ">Contact Info</h2>
                   <p className="text-gray-500">
				   contact@philosophywebsite.com <br />
                    info@philosophywebsite.com <br />
                    Phone: (+1) 123 456</p>
                </div>
            </div>
			<div>
			<h2 className="text-3xl font-semibold my-12 ">Say Hello.

</h2>		
<form>
<div className="relative z-0 mb-6 w-full group">
<input type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
<label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
</div>
<div className="relative z-0 mb-6 w-full group">
<input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
<label htmlFor="floating_password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
</div>
<div className="relative z-0 mb-6 w-full group">
<input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
<label htmlFor="floating_repeat_password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
</div>
<div className="grid xl:grid-cols-2 xl:gap-6">
<div className="relative z-0 mb-6 w-full group">
<input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
<label htmlFor="floating_first_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
</div>
<div className="relative z-0 mb-6 w-full group">
<input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
<label htmlFor="floating_last_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
</div>
</div>
<div className=" xl:gap-6">
<textarea id="floating_message" rows="4" className="block py-2.5 px-0 w-full text-sm text-gray-500 dark:text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Your message"></textarea>

</div>
<button type="submit" className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full md:mx-auto md:px-60 sm:w-auto lg:mx-40 my-12 lg:px-80 py-2.5 sm:px-40 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

			</div>
			
		</div>
		<PopularPosts />
		<Tags />
		<Footer />
		</div>
	);
};

export default Contact;