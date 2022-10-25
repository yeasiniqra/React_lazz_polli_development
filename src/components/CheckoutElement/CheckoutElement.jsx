import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import commonBg from '../../images/room.jpg'
import Information from './CustomarInformation/Information';


const CheckoutElement = () => {
    return (
        <>  
            <PageHeader imageURL={commonBg} title={'Hotel Checkout'} />
            <Information />
        </>
    );
};

export default CheckoutElement;