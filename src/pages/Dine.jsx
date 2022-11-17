import React from 'react';
import RestaurantDine from '../components/RestaurantDine/RestaurantDine';
import { useTitle } from '../hooks/UseTitle';

const Dine = () => {
    useTitle('Dine')
    return (
        <>
           <RestaurantDine />
        </>
    );
};

export default Dine;