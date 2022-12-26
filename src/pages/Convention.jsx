import React from 'react';
import ConventionElement from '../components/ConventionElement/ConventionElement';
import { useTitle } from '../hooks/UseTitle';

const Convention  = () => {
    useTitle('Convention')
    return (
        <>
            <ConventionElement />
        </>
    );
};

export default Convention ;