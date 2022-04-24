import React from "react";
import "./Catagories.css";


const Catagories = () => {
  return (
    <div className="my-8">
	  <h1 className="text-white bg-gray-700 text-center font-Libre my-4 text-2xl">Product Catagories</h1>
        <section className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 sm:grid sm:grid-cols-1 gap-6 mx-8">
          <div className="feature1 my-4">
            <button>HEALTH</button>
          </div>
          <div className="feature2 my-4">
            <button>LIFESTYLE</button>
          </div>
          <div className="feature3 my-4">
            <button>CONTACT</button>
          </div>
        </section>
      
    </div>
  );
};

export default Catagories;