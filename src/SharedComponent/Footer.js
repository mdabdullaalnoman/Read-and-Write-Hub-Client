import React from 'react';

const Footer = () => {
	return (
		<div>
			<div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-4 bg-black text-gray-500 py-16 px-16">
     <div>
		 <div>
			 <h3 className="pb-6 text-white text-base font-bold">QUICK LINKS</h3>
		 </div>
		 <hr />
		<div className="pt-4">
		<div>Home</div>
		 <div>Blog</div>
		 <div>Styles</div>
		 <div>About</div>
		 <div>Contact</div>
		 <div>Privacy Policy</div>
		</div>
    </div>
    <div>
	      <div>
			 <h3 className="pb-6 text-white text-base font-bold">ARCHIVES</h3>
		 </div>
		 <hr />
		 <div className="pt-4">
		<div>January 2021</div>
		 <div>December 2020</div>
		 <div>November 2019</div>
		 <div>October 2018</div>
		 <div>September 2017</div>
		 <div>August 2017</div>
		</div>
	</div>
    <div>
	<div>
			 <h3 className="pb-6 text-white text-base font-bold">SOCIAL</h3>
		 </div>
		 <hr />
		 <div className="pt-4">
		<div>Facebook</div>
		 <div>Instagram</div>
		 <div>Twitter</div>
		 <div>Pinterest</div>
		 <div>Google+</div>
		 <div>LinkedIn</div>
		</div>
	</div>
    <div>
	<div>
			 <h3 className="pb-6 text-white text-base font-bold">OUR NEWSLETTER</h3>
		 </div>
		 <hr />
		 <div className="pt-4">
			 <p>Blogging is a great way to show your talents and interests to prospective employers, while adding an edge to your resume. If you blog consistently it shows your dedication, passions and creativity – all of which are key attributes employers look for in job candidates.</p>
		 </div>
		 <form className="w-full max-w-sm">
  <div className="flex items-center border-b border-teal-500 py-2">
    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email Address" aria-label="Email Address"/>
    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
      SEND
    </button>
  </div>
</form>
	</div>

    </div>
	<div className="bg-black pl-16 text-gray-500 pb-16">
		&copy; Copyright Writehub 2022 &nbsp;&nbsp;|&nbsp;&nbsp;  Site template by <span className="text-white"> Bloomer</span>
	</div>
		</div>
		
	);
};

export default Footer;