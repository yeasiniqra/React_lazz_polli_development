import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import commonBg from '../../images/room.jpg'
import Information from './CustomarInformation/Information';
import { useTitle } from '../../hooks/UseTitle';


const CheckoutElement = () => {
    useTitle('Check Out')
    return (
        <>  
            <PageHeader imageURL={commonBg} title={'Hotel Checkout'} />
            <Information />
        </>
    );
};

export default CheckoutElement;