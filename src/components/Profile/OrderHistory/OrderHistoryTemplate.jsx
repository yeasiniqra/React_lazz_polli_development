import React from 'react';

const OrderHistoryTemplate = ({book}) => {
    console.log(book)
    const {Code, Discount, ItemCount, PayableAmount, Quantity, ReleaseDate, ReservationDate, Status} = book

    
    return (

        <div className='order-history-body-parent'>
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