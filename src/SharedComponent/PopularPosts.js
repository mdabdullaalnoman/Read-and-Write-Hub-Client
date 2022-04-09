import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import React from 'react';

const PopularPosts = () => {
	return (
		<div>
			<div className="grid grid-cols-3 gap-4">
				<div className="col-span-2 mx-12">
					<h2 className="text-3xl font-semibold my-12 ">Popular Posts</h2>
				</div>

				<div className="">
					<h2 className="text-3xl font-semibold my-12">About WriteHub</h2>
				</div>

			</div>
			<div className="grid grid-cols-3 gap-4">
				<div className="flex flex-col ml-12">

					<div className="flex flex-cols-2 gap-4">
						<div className="mb-12">
							<img src="https://i.ibb.co/sWNX5Dm/xbeetle-150-jpg-pagespeed-ic-M0-NVu-ANrc.webp" className="h-16 w-16" alt="" />
						</div>
						<div>
							<h3 className=" text-base font-bold hover:text-blue-800">Throwback To The Good Old Days.</h3>
							<small className="text-gray-500">By <span className="text-black hover:text-blue-800">John Doe</span> on Dec 14, 2017</small>
						</div>

					</div>
					<div>
						<div className="flex flex-cols-2 gap-4">
							<div className="mb-12">
								<img src="https://i.ibb.co/12JDkgx/xcookies-150-jpg-pagespeed-ic-vc-CTHPth9m.webp" className="h-16 w-16" alt="" />
							</div>
							<div>
								<h3 className=" text-base font-bold hover:text-blue-800">Absolutely No Sugar Oatmeal Cookies.</h3>
								<small className="text-gray-500">By <span className="text-black hover:text-blue-800">John Doe</span> on Dec 14, 2017</small>
							</div>
						</div>
					</div>
					<div>
						<div className="flex flex-cols-2 gap-4">
							<div className="mb-12">
								<img src="https://i.ibb.co/YhwyMrH/xshutterbug-150-jpg-pagespeed-ic-76nc-Vj-CSl-R.jpg" className="h-16 w-16" alt="" />
							</div>
							<div>
								<h3 className=" text-base font-bold hover:text-blue-800">Key Benefits Of Family Photography.</h3>
								<small className="text-gray-500">By <span className="text-black hover:text-blue-800">John Doe</span> on Dec 14, 2017</small>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col ml-12">
					<div>
						<div className="flex flex-cols-2 gap-4">
							<div className="mb-12">
								<img src="https://i.ibb.co/nnqWRx5/xtulips-150-jpg-pagespeed-ic-h-Ipd-B8-KAy-S.jpg" className="h-16 w-16" alt="" />
							</div>
							<div>
								<h3 className=" text-base font-bold hover:text-blue-800">10 Interesting Facts About Caffeine.</h3>
								<small className="text-gray-500">By <span className="text-black hover:text-blue-800">John Doe</span> on Dec 14, 2017</small>
							</div>
						</div>
					</div>
					<div>
						<div className="flex flex-cols-2 gap-4">
							<div className="mb-12">
								<img src="https://i.ibb.co/NNSXL6X/xwheel-150-jpg-pagespeed-ic-f-B7-Lh-VNn-X.jpg" className="h-16 w-16" alt="" />
							</div>
							<div>
								<h3 className=" text-base font-bold hover:text-blue-800">Visiting Theme Parks Improves Your Health.</h3>
								<small className="text-gray-500">By <span className="text-black hover:text-blue-800">John Doe</span> on Dec 14, 2017</small>
							</div>
						</div>
					</div>
					<div>
						<div className="flex flex-cols-2 gap-4">
							<div className="mb-12">
								<img src="https://i.ibb.co/qCdcm2c/xsalad-150-jpg-pagespeed-ic-x-O-FVz-LWy4.jpg" className="h-16 w-16" alt="" />
							</div>
							<div>
								<h3 className=" text-base font-bold hover:text-blue-800">Healthy Mediterranean Salad Recipes</h3>
								<small className="text-gray-500">By <span className="text-black hover:text-blue-800">John Doe</span> on Dec 14, 2017</small>
							</div>
						</div>
					</div>
				</div>
				<div className="">
					<div className="text-gray-500 mr-12">
						Looking for some free blog sites to help you start sharing your writing with the world? Whether you just want to share updates with your family and friends or you want to start a blog and build a broader audience, we’ve put together ten great sites where you can start a blog for free.We’ll also try to steer you towards the specific platform that’s best for you so that you can easily create a blog for free.The main characteristic of this platform is that it comes with drag-and-drop options, so you don’t have to handle anything in the back-end. The design is very intuitive and modern, which can be used by both beginners and advanced.</div>
					<div className="mt-6">
						<FaFacebookF className="mr-4 h-6 w-6 inline"/> 
						<FaTwitter  className="mr-4 h-6 w-6 inline"/>
						<FaInstagram  className="mr-4 h-6 w-6 inline"/>
						<FaPinterest  className="mr-4 h-6 w-6 inline"/>
					</div>
				</div>
				<div>
				</div>
			</div>
		</div>

	);
};

export default PopularPosts;