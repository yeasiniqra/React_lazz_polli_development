import React from 'react';
import EnjoyElement from '../components/EnjoyElement/EnjoyElement';
import { useTitle } from '../hooks/UseTitle';

const Enjoy = () => {
    useTitle('Enjoy')
    return (
        <>
            <EnjoyElement />
        </>
    );
};

export default Enjoy;