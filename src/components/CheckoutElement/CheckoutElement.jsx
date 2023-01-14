import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import commonBg from '../../images/room.webp'
import Information from './CustomarInformation/Information';
import { useTitle } from '../../hooks/UseTitle';
import useAuthGuard from '../../hooks/useAuthGuard';



const CheckoutElement = () => {
    useTitle('Check Out')
    useAuthGuard();
    return (
        <>  
            <PageHeader imageURL={commonBg} title={'Hotel Checkout'} />
            <Information />
        </>
    );
};

export default CheckoutElement;