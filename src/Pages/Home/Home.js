import React from 'react';
import Footer from '../../SharedComponent/Footer';
import Header from '../../SharedComponent/Header';
import PopularPosts from '../../SharedComponent/PopularPosts';
import Tags from '../../SharedComponent/Tags';
import Catagories from './Catagories/Catagories';
import FAQ from './FAQ/FAQ';
import Hero from './Hero';
import Post from './Post';
import Subscribe from './Subscribe/Subscribe';
import Review from './Testimonial/Review';


const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Catagories />
            <Post />
            <Subscribe />
            <FAQ />
            <Review />
            <PopularPosts />
            <Tags />
            <Footer />
        </div>
    );
};

export default Home;