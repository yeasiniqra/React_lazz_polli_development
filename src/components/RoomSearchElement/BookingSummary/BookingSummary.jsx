import React from 'react';
import { Link } from 'react-router-dom';

const BookingSummary = () => {
    const title = {
        title : 'Booking Summary'
    }
    return (
        <div className="room-search-cart-right">
            <div className="shopping-cart">
                <h4>{title.title}</h4>
                <div className="summery-main-grid">
                    <div className="smy-date">
                        <span> Dates : <small>2022-07-21</small> - <small>2022-07-22</small> </span>
                    </div>
                    <div className="smy-date">
                        <span> Night : <small>1</small></span>
                    </div>
                    <div className="super-flex-item">
                        <div className="spk-left">
                            <p> Superior King</p>
                            <p> 2 Adults 1 Child 1 Room</p>
                            <button><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                        </div>
                        <div className="spk-right">
                            <span><i className="fa fa-times" aria-hidden="true"></i></span>
                            <h5>BDT <span>9,800</span></h5>
                        </div>
                    </div>
                    <div className="total-amount">
                        <span>Total</span>
                        <h5>BDT <span>9,800</span></h5>
                    </div>
                    <div className="common-btn book-search-btn">
                        <Link to='/checkout'>Check Out</Link>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default BookingSummary;