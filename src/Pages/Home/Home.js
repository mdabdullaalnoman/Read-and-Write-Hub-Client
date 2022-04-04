import React from 'react';
import Header from '../../SharedComponent/Header';
import Footer from '../../SharedComponent/Footer';
import Hero from './Hero';
import PopularPosts from '../../SharedComponent/PopularPosts';
import Post from './Post';
import Tags from '../../SharedComponent/Tags';


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