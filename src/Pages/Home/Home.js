import React from 'react';
import Header from '../../SharedComponent/Header';
import Hero from './Hero';
import Post from './Post';


const Home = () => {
    return (
        <div>
            <Header />
            <Post />
            <Hero />
        </div>
    );
};

export default Home;