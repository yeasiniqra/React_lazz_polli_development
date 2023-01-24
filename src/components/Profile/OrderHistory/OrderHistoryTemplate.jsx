import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderHistoryTemplate = ({book}) => {
    const navigate = useNavigate();
    // console.log(book)
    const {Code, Discount, ItemCount, PayableAmount, Quantity, ReleaseDate, ReservationDate, Status} = book

    const handleInvoice = () => {
        navigate(`${Code}`)
    }
    
    return (

        <div onClick={handleInvoice} className='order-history-body-parent'>
            <div className='order-history-body'>
                <small>#{Code}</small>
                <small>{ReservationDate}</small>
                <small>{ReleaseDate}</small>
                <small>{Status}</small>
                {/* <small>Superior King</small> */}
                <small>{Quantity}</small>
                <small>BDT {PayableAmount}</small>
            </div>
       </div>
    );
};

export default OrderHistoryTemplate;