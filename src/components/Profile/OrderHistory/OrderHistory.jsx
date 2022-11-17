import React from 'react';
import { useTitle } from '../../../hooks/UseTitle';

const OrderHistory = () => {
    useTitle('Order History')
    return (
        <div className='order-history'>
            <div className='order-history-header'>
                <span>Order Id</span>
                <span>Check In</span>
                <span>Check Out</span>
                <span>Status</span>
                <span>Room Type</span>
                <span>Pax Details</span>
                <span>Amount</span>
            </div>
            <div className='order-history-body-parent'>
                <div className='order-history-body'>
                    <small>#0144875544</small>
                    <small>11-3-2022</small>
                    <small>11-4-2022</small>
                    <small>Pending</small>
                    <small>Superior King</small>
                    <small>1 Adults 1 Child</small>
                    <small>BDT 980000</small>
                </div>
                <div className='order-history-body'>
                    <small>#0144875544</small>
                    <small>11-3-2022</small>
                    <small>11-4-2022</small>
                    <small>Pending</small>
                    <small>Superior King</small>
                    <small>1 Adults 1 Child</small>
                    <small>BDT 980000</small>
                </div>
                <div className='order-history-body'>
                    <small>#0144875544</small>
                    <small>11-3-2022</small>
                    <small>11-4-2022</small>
                    <small>Pending</small>
                    <small>Superior King</small>
                    <small>1 Adults 1 Child</small>
                    <small>BDT 980000</small>
                </div>
                <div className='order-history-body'>
                    <small>#0144875544</small>
                    <small>11-3-2022</small>
                    <small>11-4-2022</small>
                    <small>Pending</small>
                    <small>Superior King</small>
                    <small>1 Adults 1 Child</small>
                    <small>BDT 980000</small>
                </div>
           </div>
        </div>
    );
};

export default OrderHistory;