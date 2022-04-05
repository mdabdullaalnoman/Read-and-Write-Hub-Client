import React from 'react';
import Footer from '../../SharedComponent/Footer';
import Header from '../../SharedComponent/Header';
import PopularPosts from '../../SharedComponent/PopularPosts';
import Tags from '../../SharedComponent/Tags';
import Hero from './Hero';
import Post from './Post';


const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Post />
            <PopularPosts />
            <Tags />
            <Footer />
        </div>
    );
};

export default Home;