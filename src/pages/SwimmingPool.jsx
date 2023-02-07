import React from 'react';
import SwimmingPoolElement from '../components/SwimmingPoolElement/SwimmingPoolElement';
import useAuthGuard from '../hooks/useAuthGuard';
import { useTitle } from '../hooks/UseTitle';

const SwimmingPool = () => {
    useTitle('Swimming Pool')
    useAuthGuard()
    return (
        <>
            <SwimmingPoolElement />
        </>
    );
};

export default SwimmingPool;