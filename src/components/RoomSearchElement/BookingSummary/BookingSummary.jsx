import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import cartContext from '../../../store/cart-context';
import BookingSummaryTemplate from './BookingSummaryTemplate';

const BookingSummary = () => {
    const { rooms, removeRoom } = useContext(cartContext);

    console.log(rooms)

    const removeClickHandler = (room) => {
        removeRoom(room)
    }

    return (
            <>
            {
                rooms.map((summeryItem) => <BookingSummaryTemplate
                    key={summeryItem.Id}
                    summeryItem={summeryItem}
                    removeClickHandler={removeClickHandler}
                />)
            }
            <div className='summery-grand-total'>
               <div className="total-amount">
                    <span>Total</span>
                    <h5>BDT <span>0,0000</span></h5>
                </div>
                <div className="common-btn book-search-btn">
                    <Link to='/checkout'>Check Out</Link>
                </div>
           </div>

        </>
    );
};

export default BookingSummary;