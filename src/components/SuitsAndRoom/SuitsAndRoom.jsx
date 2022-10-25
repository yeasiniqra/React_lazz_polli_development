import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import commonBg from '../../images/room.jpg';
import CottagesSuitsTemplate from './CottagesSuits/CottagesSuitsTemplate';

const SuitsAndRoom = () => {
    return (
        <>
           <PageHeader imageURL={commonBg} title={'Rooms & Suites'} />
           <CottagesSuitsTemplate />
        </>
    );
};

export default SuitsAndRoom;