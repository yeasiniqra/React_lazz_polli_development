import React from 'react';
import Banner from '../components/Banner/Banner';
import FindHroom from '../components/FindHroom/FindHroom';
import GoogleMap from '../components/GoogleMap/GoogleMap';
import SupportGiven from '../components/SupportGiven/SupportGiven';
import Weather from '../components/Weather/Weather';

const Home = () => {
    return (
        <>
         <Banner />
         <Weather />
         <FindHroom />
         <SupportGiven />
         <GoogleMap />
        </>
    );
};

export default Home;