import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div>
        <div className="subContainer my-8 mx-8">
            <div className=" pl-12 pt-10 font-Inter text-blue-700 lg:text-xl md:text-xl sm:text-md">
              <p>SUBSCRIBE TO OUR NEWSLETTERS</p>
              <h3>
                Keep up to Date with Our New Blog Collection and Get informed
              </h3>
            </div>
            <div className="cols-span-2 my-5 mx-auto pl-12">
			<form className="w-full max-w-sm">
  <div className="flex items-center border-b border-teal-500 py-2">
    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-Nanum" type="text" placeholder="Email Address" aria-label="Email Address"/>
    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded font-Nanum" type="button">
      SUBSCRIBE
    </button>
  </div>
</form>
            </div>
        </div>
      
    </div>
  );
};

export default Subscribe;