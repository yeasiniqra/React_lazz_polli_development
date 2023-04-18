import React from 'react';
import { useNavigate } from 'react-router-dom';
import { humanizeDate } from '../../../lib/utils';

const OrderHistoryTemplate = ({book}) => {
    const navigate = useNavigate();
    const {Code, PayableAmount, Quantity, ReleaseDate, ReservationDate, Status,Night, Paid, ItemCount} = book
    // const paidRound = Math.round(Paid)
    const dueAmount = PayableAmount - Paid

    //Note : onClick evt add future if client need this - only need add onClick div 
    const handleInvoice = () => {
        navigate(`${Code}`)
    }
   
    
    return (
        <div  onClick={handleInvoice} className='order-history-body-parent'>
            <div className='order-history-body'>
                <small>#{Code}</small>
                <small>{humanizeDate(ReservationDate)}</small>
                <small>{humanizeDate(ReleaseDate)}</small>
                <small>{Night}</small>
                <small>{Status}</small>
                <small>{Quantity}</small>
                <small>{ItemCount}</small>
                <small>{PayableAmount} tk</small>
                <small>{dueAmount} tk</small>
                <small>{Paid} tk</small>
            </div>
       </div>
    );
};

export default OrderHistoryTemplate;