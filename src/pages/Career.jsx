import React from 'react';
import CareerContent from '../components/CareerContent/CareerContent';
import { useTitle } from '../hooks/UseTitle';

const Career = () => {
    useTitle('Career')
    return (
        <>
            <CareerContent />
        </>
    );
};

export default Career;