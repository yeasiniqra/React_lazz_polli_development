import React from 'react';
import SuitsAndRoom from '../components/SuitsAndRoom/SuitsAndRoom';
import { useTitle } from '../hooks/UseTitle';

const SuitsRoom = () => {
    useTitle('Suits Room')
    return (
        <>
            <SuitsAndRoom />
        </>
    );
};

export default SuitsRoom;