import React from 'react';
import Header from '../../SharedComponent/Header';
import Tags from '../../SharedComponent/Tags';
import PopularPosts from '../../SharedComponent/PopularPosts';
import Footer from '../../SharedComponent/Footer';

const About = () => {
    return (
        <div>
			<Header />
        <div  className="lg:mx-40 md:mx-40 sm:mx-10">
            <div>
                <h1 className="text-center text-6xl font-semibold my-12">Learn More About Us.</h1>
            </div>
            <div>
               <img className="mx-auto my-12" src="https://i.ibb.co/TtZxr6z/Best-Blogging-Sites.png" alt="" />
            </div>
            <div>
              <h2 className="mb-12 md:text-xl font-bold text-xl">
                A blog is a type of website where the content is presented in reverse chronological order (newer content appear first). Blog content is often referred to as entries or “blog posts”.Blogs are typically run by an individual or a small group of people to present information in a conversational style. However, now there are tons of corporate blogs that produce a lot of informational and thought-leadership style content.
               </h2>
               <h3 className="text-gray-500 my-12 ">
                Blogs evolved from online diaries and journals in the mid-90s. At that time, internet users were already running personal web pages where they published regular updates about their personal lives, thoughts, and social commentary.The term web log was first used during the late 90s, which later became ‘weblog’, then ‘we blog’, and finally just ‘blog’.Due to the growing number of such web pages, several tools started to appear, which made it easier for users to create online journals and personal blogs. These tools helped popularize blogging and made the technology accessible to non-technical users.
                </h3>
                <h3 className="text-gray-500 my-12 ">
                In 1999, the popular blogging website Blogger.com was launched, which was later acquired by Google in February 2003.Today, WordPress is the world’s most popular blogging platform powering over 41% of all websites   on the internet.
               </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                  <h2 className="text-3xl font-semibold my-12 ">Who We Are.</h2>
                  <p className="text-gray-500">
                As a beginner, you may be wondering whether you should start a blog or publish a website, which one is better? To be honest, the answer to this question really depends on what your goals are.Many small businesses around the world have traditional websites made up of just pages and no blog. Such small websites are often made to create an informational web presence for a business, organization, or individual.
                  </p>
                </div>
                <div>
                   <h2 className="text-3xl font-semibold my-12 ">Our Mission.</h2>
                   <p className="text-gray-500">
                    On the other hand, more and more businesses are realizing the potential of a blog in their overall marketing strategy. Business owners are adding a separate blog section to their traditional websites and using it to get more traffic from search engines.
                    That’s because blogs are proven to improve search engine optimization (SEO).Blogs also come with a RSS feed feature which allows users to stay updated with your latest posts. When a new post is published, the RSS feed is updated automatically.</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                <h2 className="text-3xl font-semibold my-12 ">Our Vision.</h2>
                <p className="text-gray-500">
                Each individual blogger has their own motivation for blogging. Many of them use it as an alternative to keeping a diary or journal. Blogging sites provides them with a venue to share their creativity and ideas to a wider audience.Top brands and businesses create blogs to educate their customers, share news, and reach a wider audience. Blogging is an essential part of online marketing strategy for many businesses.
                </p>
                </div>
                <div>
                <h2 className="text-3xl font-semibold my-12 ">Our Values.</h2>
                <p className="text-gray-500">
                The most common and probably the easiest way to make money online is by displaying ads. However, as a new blogger, you will not be able to contact advertisers directly or manage them on your own.This is where Google AdSense comes in. It takes care of finding ads, displaying them, collecting payments from advertisers, and sending you those payments for a small cut.
                </p>
                </div>
            </div>
        </div>
           <PopularPosts />
		   <Tags />
		   <Footer />
		</div>
    );
};

export default About;