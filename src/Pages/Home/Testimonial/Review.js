import React from 'react';
import './Review.css';
import user1 from '../../../images/user-1.jpg';
import user2 from '../../../images/user-2.jpg';
import user3 from '../../../images/user-3.jpg';
import user4 from '../../../images/user-4.jpg';
import user5 from '../../../images/user-5.jpeg';
import user6 from '../../../images/user-6.jpg';

const Review = () => {
    return (
        <section className="container my-8 mx-8">
            <h1 className="text-center my-8 text-3xl font-Libre">Happy <span className="colored-text">Bloggers says</span></h1>
            <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 sm:grid sm:grid-cols-1 gap-4">
				
             <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg img-size" src={user1} alt=""/>
                   <div className="p-5">
                
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">As soon as I got the solar outdoor lights out the box and turned on the on switch, it didn't lit up. So I put it under direct sunlight for about 10 hours.It worked! It's so beautiful! I can't wait to put it out in my front flower bed.</p>
                <h6 className="text-center colored-name my-5 font-Inter">Rosy Brown</h6>
                <h6 className="text-center my-5 font-Open">Doctor</h6>
            </div>
        </div>
             <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg img-size" src={user2} alt=""/>
                   <div className="p-5">
                
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">It is small, I really liked this solar watering can. I bought this as a gift for my friend. She has a large yard and I thought this was a great idea! I'm so happy I bought this solar watering can lights!</p>
                <h6 className="text-center colored-name my-5 font-Inter">Anahita hills</h6>
                <h6 className="text-center my-5 font-Open">Banker</h6>
            </div>
        </div>
             <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg img-size" src={user3} alt=""/>
                   <div className="p-5">
                
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Arrived neatly and conviently packaged. It was adorable! I unwrapped it and peeled back the sticker on the solar panel. Its been out in my yard for a day charging so I will add more photos once it gets dark.</p>
                <h6 className="text-center colored-name my-5 font-Inter">Lucy Bears</h6>
                <h6 className="text-center my-5 font-Open">IT Officer</h6>
            </div>
        </div>
             <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg img-size" src={user4} alt=""/>
                   <div className="p-5">
                
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">I bought this for my aunt's birthday and she loves it. She loves her garden and this fits nicely in her raised garden bed. It's not very big, it's light and hangs comfortably. The light is so pretty and falls like rain. It's a very nice gift.</p>
                <h6 className="text-center colored-name my-5 font-Inter">Robert Max</h6>
                <h6 className="text-center my-5 font-Open">Pilot</h6>
            </div>
        </div>
             <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg img-size" src={user5} alt=""/>
                   <div className="p-5">
                
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This Is a beautiful addition to my yard. Its easy to assemble. Its lightweight and durable. It makes a great gift idea for anyone who enjoys gardening or lights. The watering can is made from a sturdy metal and the lights are fairy lights.</p>
                <h6 className="text-center colored-name my-5 font-Inter">Jack Brown</h6>
                <h6 className="text-center my-5 font-Open">Accountant</h6>
            </div>
        </div>
             <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg img-size" src={user6} alt=""/>
                   <div className="p-5">
                
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Highly satisfied with their services.They are all good at behaviour.Their product is also very good.Will purchase from them later on.You guys can try out their services.</p>
                <h6 className="text-center colored-name my-5 font-Inter">Jim Lewis</h6>
                <h6 className="text-center my-5 font-Open">Lawyer</h6>
            </div>
        </div>
      </div>
   </section>
  );
};

export default Review;