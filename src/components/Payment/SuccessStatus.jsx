import React from 'react';

const SuccessStatus = () => {
    return (
        <div className='payment-success-area'>
            <div className="container">
                <div className="payment-content">
                    <h2>Order Placed Successfully!</h2>
                    <h3>Payment Cancelled</h3>
                    <h4>Order number is #0119006</h4>
                    <span>We'll call your number 01712825842 to reconfirm.</span>
                    <small>Transaction Cancelled!</small>
                    <div className="succes-btn">
                    <button>Home</button>
                    <button>View ORder</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessStatus;