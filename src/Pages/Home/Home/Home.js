import React from 'react';
import useTitle from '../../../hooks/useTitle';
import AnotherPartOfHome from '../AnotherPartOfHome/AnotherPartOfHome';
import Services from '../Services/Services';
import Banner from './Banner';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AnotherPartOfHome></AnotherPartOfHome>
        </div>
    );
};

export default Home;