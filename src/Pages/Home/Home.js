import React from 'react';
import Header from '../../SharedComponent/Header';
import Footer from './Footer';
import Hero from './Hero';
import PopularPosts from './PopularPosts';
import Post from './Post';
import Tags from './Tags';


const Home = () => {
    return (
        <div>
            <Header />
            <Post />
            <Hero />
            <PopularPosts />
            <Tags />
            <Footer />
        </div>
    );
};

export default Home;