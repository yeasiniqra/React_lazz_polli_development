import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import CareerContentTemplate from './CareerContentTemplate/CareerContentTemplate';
import commonBg from '../../images/room.webp';

const CareerContent = () => {
    return (
        <>
            <PageHeader imageURL={commonBg} title='Career'/>
            <CareerContentTemplate />
        </>
        
    );
};

export default CareerContent;