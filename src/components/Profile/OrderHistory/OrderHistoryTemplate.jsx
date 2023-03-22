import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { humanizeDate } from '../../../lib/utils';

const OrderHistoryTemplate = ({book}) => {
    // const navigate = useNavigate();
    const {Code, PayableAmount, Quantity, ReleaseDate, ReservationDate, Status, Paid} = book
    const paidRound = Math.round(Paid)
    const dueAmount = Math.round(PayableAmount - Paid)

    //Note : onClick evt add future if client need this- only need onClick div 
    // const handleInvoice = () => {
    //     navigate(`${Code}`)
    // }
    // onClick={handleInvoice}
    
    return (
        <div className='order-history-body-parent'>
            <div className='order-history-body'>
                <small>#{Code}</small>
                <small>{humanizeDate(ReservationDate)}</small>
                <small>{humanizeDate(ReleaseDate)}</small>
                <small>{Status}</small>
                <small>{Quantity}</small>
                <small>{PayableAmount} tk</small>
                <small>{dueAmount} tk</small>
                <small>{paidRound} tk</small>
            </div>
       </div>
    );
};

export default OrderHistoryTemplate;