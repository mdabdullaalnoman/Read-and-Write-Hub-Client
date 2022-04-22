import React from 'react';

const Tags = () => {
	return (
		<div>
			<h2 className="text-3xl font-semibold text-center my-10">Tags</h2>
			<div className="lg:mb-4 lg:ml-80  md:mx-auto md:mb-4">
			<button className="bg-slate-300 text-gray-800 hover:bg-black hover:text-white font-bold py-2 px-4 mr-4 mb-4 rounded md:ml-8 ">SALAD</button>
			<button className="bg-slate-300 text-gray-800 hover:bg-black hover:text-white font-bold py-2 px-4 mr-4 mb-4  rounded">RECIPE</button>
			<button className="bg-slate-300 text-gray-800 hover:bg-black hover:text-white font-bold py-2 px-4 mr-4 mb-4  rounded">PLACES</button>
			<button className="bg-slate-300 text-gray-800 hover:bg-black hover:text-white font-bold py-2 px-4 mr-4 mb-4  rounded">TIPS</button>
			<button className="bg-slate-300 text-gray-800 hover:bg-black hover:text-white font-bold py-2 px-4 mr-4 mb-4  rounded">FRIENDS</button>
			<button className="bg-slate-300 text-gray-800 hover:bg-black hover:text-white font-bold py-2 px-4 mr-4 mb-4  rounded">TRAVEL</button>
			<button className="bg-slate-300 text-gray-800 hover:bg-black hover:text-white font-bold py-2 px-4 mr-4 mb-4  rounded">EXERCISE</button>
			
			</div>
			<div className="lg:mb-24 lg:ml-80 md:mx-auto md:mb-24 sm:mb-10">
			<button className="bg-slate-300 text-gray-800 hover:bg-black hover:text-white font-bold py-2 px-4 mr-4 mb-4  lg:ml-20 md:ml-20 rounded">READING</button>
			<button className="bg-slate-300 text-gray-800 hover:bg-black hover:text-white font-bold py-2 px-4 mr-4 mb-4  rounded">RUNNING</button>
			<button className="bg-slate-300 text-gray-800 hover:bg-black hover:text-white font-bold py-2 px-4 mr-4 mb-4  rounded">SELF-HELP</button>
			<button className="bg-slate-300 text-gray-800 hover:bg-black hover:text-white font-bold py-2 px-4 mr-4 mb-4  rounded">VACATION</button>
			</div>
		</div>
	);
};

export default Tags;