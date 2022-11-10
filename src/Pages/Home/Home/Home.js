import React from 'react';
import AnotherPartOfHome from '../AnotherPartOfHome/AnotherPartOfHome';
import Services from '../Services/Services';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AnotherPartOfHome></AnotherPartOfHome>
        </div>
    );
};

export default Home;