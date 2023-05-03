import React from 'react';
import Header from '../Header/Header';
import LottieUse from './LottieUse';
import ChefCard from './ChefCard';
import Support from './Support';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <LottieUse></LottieUse>
            <ChefCard></ChefCard>
            <Support></Support>
        </div>
    );
};

export default Home;