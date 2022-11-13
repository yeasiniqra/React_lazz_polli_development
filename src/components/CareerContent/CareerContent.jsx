import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import CareerContentTemplate from './CareerContentTemplate/CareerContentTemplate';
import commonBg from '../../images/room.jpg';
import Pagenator from './Pagenator';

const CareerContent = () => {
    return (
        <>
            <PageHeader imageURL={commonBg} title='Career'/>
            <CareerContentTemplate />
            <Pagenator />
        </>
        
    );
};

export default CareerContent;