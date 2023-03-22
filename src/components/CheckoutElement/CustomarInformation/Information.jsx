import React from 'react';
import CheckOutSummery from '../CheckOutSummery/CheckOutSummery';
import CheckoutTabLinks from './CheckoutTabLinks';

const Information = () => {
    return (
        <section className="room-search-area hotel-checkout-area">
        <div className="container">
             <div className="room-search-cart-main hotel-checkout-main">
                <div className="room-search-cart-left">
                    <div className="room-search-inner-content">
                        <CheckoutTabLinks />
                    </div>
                </div>
                <CheckOutSummery />
             </div>
         </div>
     </section>
    );
};

export default Information;