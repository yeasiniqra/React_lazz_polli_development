import React from 'react';
import DineTab from './DineTab';

const RestaurantMenu = () => {
    return (
        <>
         <div className="search-room-single-main-tab our-restaurant-single-main-tab">
                <div className="other-page-heading">
                    <h1><span>OUR </span>Menu</h1>
                    <small>checkout our special menu price</small>
                </div>
             <DineTab />
          </div>  
        </>
    );
};

export default RestaurantMenu;