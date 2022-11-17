import React from 'react';
import RelaxElement from '../components/RelaxElement/RelaxElement';
import { useTitle } from '../hooks/UseTitle';

const Relax = () => {
    useTitle('Relax')
    return (
        <>
            <RelaxElement />
        </>
    );
};

export default Relax;