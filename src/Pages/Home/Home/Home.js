import React from 'react';
import useTitle from '../../../hooks/useTitle';
import AnotherPartOfHome from '../AnotherPartOfHome/AnotherPartOfHome';
import DoctorsInfo from '../AnotherPartOfHome/DoctorsInfo/DoctorsInfo';
import Services from '../Services/Services';
import Banner from './Banner';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AnotherPartOfHome></AnotherPartOfHome>
            <DoctorsInfo></DoctorsInfo>
        </div>
    );
};

export default Home;