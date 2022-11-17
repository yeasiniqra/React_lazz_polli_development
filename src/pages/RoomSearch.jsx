import React from 'react';
import RoomSearchElement from '../components/RoomSearchElement/RoomSearchElement';
import { useTitle } from '../hooks/UseTitle';

const RoomSearch = () => {
    useTitle('Search Room')
    return (
        <>
            <RoomSearchElement /> 
        </>
    );
};

export default RoomSearch;