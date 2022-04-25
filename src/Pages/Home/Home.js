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


const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Catagories />
            <Post />
            <Subscribe />
            <FAQ />
            <PopularPosts />
            <Tags />
            <Footer />
        </div>
    );
};

export default Home;