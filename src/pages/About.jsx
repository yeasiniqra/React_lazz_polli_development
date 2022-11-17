import React from 'react';
import commonBg from '../images/room.jpg';
import PageHeader from '../components/PageHeader/PageHeader';
import AboutElement from '../components/AboutElement/AboutElement';
import { useTitle } from '../hooks/UseTitle';


const About = () => {
    useTitle('About')
    return (
        <>
           <PageHeader imageURL={commonBg} title={'About Us'}/>
           <AboutElement />
        </>
    );
};

export default About;