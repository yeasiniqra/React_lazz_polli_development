import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import authContext from '../../store/auth-context';
import Loader from '../Loader/Loader';

// URL: /Order/Success?OrderNo=0917005&Payment=0&Phone=01553501368&Id=
// URL: /Order/Success?OrderNo=0917005&Payment=1&Transaction=SUCCESS&Phone=01553501368&Id=
// URL: /Order/Success?OrderNo=0917005&Payment=1&Transaction=FAILED&Phone=01553501368&Id=
// URL: /Order/Success?OrderNo=0917005&Payment=1&Transaction=CANCELLED&Phone=01553501368&Id=

//Order/Success?OrderNo=0921043&Payment=1&Phone=015535013688&Id=2a15a434-bb8b-48b1-a2dd-c9652d0c5329&Transaction=CANCELLED

// /Booking/Status?Code=0121005&Payment=1&Phone=yeasin%20A&Id=a3df8a7a-352e-451c-a6e8-afd0152f9f55&Transaction=SUCCESS&IsNew=0

const SuccessStatus = () => {
    const { isAuthenticating, isAuthenticated } = useContext(authContext);
    const { search } = useLocation();

    const [params, setParams] = useState({
        Code: null,
        payment: 0,
        transaction: null,
        phone: null,
        id: null,
        isNew: 0,
      });
    
      useEffect(() => {
        const queryParams = new URLSearchParams(search);
        const Code = queryParams.get('Code');
        const payment = +queryParams.get('Payment');
        const transaction = queryParams.get('Transaction');
        const phone = queryParams.get('Phone');
        const id = queryParams.get('Id');
        const isNew = +queryParams.get('IsNew');
        setParams({ Code, payment, transaction, phone, id, isNew });
      }, [search]);

    return (
        <> 
        <div className='payment-success-area'>
            <div className="container">
                <div className="payment-content">
                    {/* {params.isNew ? (
                    <h2>Order Placed Successfully!</h2>
                    ) : (
                    <h2>Order Placement Failed</h2>
                    )} */}

                    {!!params.payment && (
                    <h2
                        className={`${params.transaction !== 'SUCCESS' && 'text-warn'
                        }`}
                    >
                        {params.transaction === 'SUCCESS'
                        ? 'Payment Success & Order Placed Successfully!'
                        : params.transaction === 'FAILED'
                        ? 'Payment Failed & Order Placed Failed!'
                        : params.transaction === 'CANCELLED'
                        ? 'Payment Cancelled & Order Cancelled!'
                        : 'FAILED (error 96)'}
                    </h2>
                    )}
                    <h4>Order number is  <span className='order-number'>#{params.Code}</span></h4>
                    <span>We'll call your number <small>{params.phone}</small> to reconfirm.</span>

                    {/* {params.transaction === 'CANCELLED' && (
                        <small>Transaction Cancelled!</small>
                    )} */}
                   
                    <div className="succes-btn">
                      <div className="common-btn">
                        <Link to="/" tabindex="-1">Home</Link>
                        {isAuthenticated && (
                            <Link to="/profile/order" tabindex="-1">View ORder</Link>
                        )}
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <Loader isLoading={isAuthenticating} /></>
    );
};

export default SuccessStatus;