import React from 'react';
import SwimmingPoolElement from '../components/SwimmingPoolElement/SwimmingPoolElement';
import { useTitle } from '../hooks/UseTitle';

const SwimmingPool = () => {
    useTitle('Swimming Pool')
    return (
        <>
            <SwimmingPoolElement />
        </>
    );
};

export default SwimmingPool;