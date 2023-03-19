import React from 'react';
import useTitle from '../../../hooks/useTitle';

import AnotherPartOfHome from '../AnotherPartOfHome/AnotherPartOfHome';
import DoctorsInfo from '../AnotherPartOfHome/DoctorsInfo/DoctorsInfo';
import Services from '../Services/Services';
import Banner from './Banner';
import Contact from './Contact';


const Home = () => {
    useTitle('Home');
    return (
        <div>

            <Banner></Banner>
            <div className='max-w-screen-xl mx-auto'>
                <Services />
                <AnotherPartOfHome></AnotherPartOfHome>
                <DoctorsInfo></DoctorsInfo>
            </div>
            <Contact />
        </div>
    );
};

export default Home;