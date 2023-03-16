import React from 'react';
import { useNavigate } from 'react-router-dom';
import { humanizeDate } from '../../../lib/utils';

const OrderHistoryTemplate = ({book}) => {
    const navigate = useNavigate();
    const {Code, PayableAmount, Quantity, ReleaseDate, ReservationDate, Status} = book

    const handleInvoice = () => {
        navigate(`${Code}`)
    }
    
    return (
        <div onClick={handleInvoice} className='order-history-body-parent'>
            <div className='order-history-body'>
                <small>#{Code}</small>
                <small>{humanizeDate(ReservationDate)}</small>
                <small>{humanizeDate(ReleaseDate)}</small>
                <small>{Status}</small>
                {/* <small>Superior King</small> */}
                <small>{Quantity}</small>
                <small>BDT {PayableAmount}</small>
            </div>
       </div>
    );
};

export default OrderHistoryTemplate;