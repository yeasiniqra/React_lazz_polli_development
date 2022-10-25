import React from 'react';
import CheckOutSummery from '../CheckOutSummery/CheckOutSummery';
import CheckoutTabLinks from './CheckoutTabLinks';

const Information = () => {
    const title = {
        title : 'If you are new customer, please fill in the following booking form and for existing customer only enter your mobile number.'
    }
    return (
        <section className="room-search-area hotel-checkout-area">
        <div className="container">
             <div className="room-search-cart-main hotel-checkout-main">
                <div className="room-search-cart-left">
                    <h3>{title.title}</h3>
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