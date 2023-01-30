import React from 'react';
import ConventionElement from '../components/ConventionElement/ConventionElement';
import useAuthGuard from '../hooks/useAuthGuard';
import { useTitle } from '../hooks/UseTitle';

const Convention  = () => {
    useTitle('Convention')
    useAuthGuard();
    return (
        <>
            <ConventionElement />
        </>
    );
};

export default Convention ;