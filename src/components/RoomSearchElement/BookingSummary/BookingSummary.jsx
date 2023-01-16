import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import cartContext from '../../../store/cart-context';
import BookingSummaryTemplate from './BookingSummaryTemplate';

const BookingSummary = () => {
    const { rooms, removeRoom, totalAmount } = useContext(cartContext);
    const removeClickHandler = (room) => {
        removeRoom(room)
    }
console.log(totalAmount);
    return (
            <>
            {
                rooms.map((summeryItem, index) => <BookingSummaryTemplate
                    key={index}
                    summeryItem={summeryItem}
                    removeClickHandler={removeClickHandler}
                />)
            }
            <div className='summery-grand-total'>
               <div className="total-amount">
                    <span>Total</span>
                    <h5>BDT <span>{totalAmount}</span></h5>
                </div>
                <div className="common-btn book-search-btn">
                    <Link to='/checkout'>Check Out</Link>
                </div>
           </div>
        </>
    );
};

export default BookingSummary;