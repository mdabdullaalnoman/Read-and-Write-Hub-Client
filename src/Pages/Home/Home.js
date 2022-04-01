import React from 'react';
import Header from '../../SharedComponent/Header';
import Hero from './Hero';
import TestAuth from './TestAuth';

const Home = () => {
    return (
        <div>
            <Header />
            <TestAuth />
            <Hero />
        </div>
    );
};

export default Home;