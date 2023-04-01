import React from 'react';
import { useContext } from 'react';
import cartContext from '../../../store/cart-context';
import CheckOutSummeryTemplate from './CheckOutSummeryTemplate';

const CheckOutSummery = () => {
    const {rooms,removeRoom,totalAmount} = useContext(cartContext);
    const title = {
        title : 'Your booking summary'
    }
    const removeClickHandler = (room) => {
        removeRoom(room)
    }
    //checkout suymmery 
    const newTax = totalAmount * 0.15;
    const grandTotal = totalAmount + newTax;

    return (
        <div className="room-search-cart-right">
            <div className="shopping-cart">
                <h4>{title.title}</h4>
                 <div className="summery-main-grid checkout-summery-main-grid">
                    <div className="smy-date">
                        <span>Lazz Polli Resort</span>
                    </div>
                    <div className="address-check-out">
                        <p>Lazz Polli Resort, Hemayetpur Saver, Bangladesh.</p>
                        <div className="header-top-left">
                            <ul className="d-flex al-center">
                                <li>
                                    <a href='tel:+88 01778-772327'><i className="fa fa-volume-control-phone" aria-hidden="true"></i><span className="ex-number">+88 01778-772327</span></a>
                                </li>
                                <li>
                                    <a href='mailto:info@lazzpolli.com'><i className="fa fa-envelope-o" aria-hidden="true"></i>info@lazzpolli.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='room-book-summery'>
                        {
                            rooms.map((room, index) => <CheckOutSummeryTemplate
                             index={index} 
                             key={room.Id} 
                             room={room} 
                             removeClickHandler={removeClickHandler}
                             />)
                        }
                    </div>
                    <div className="total-rom-service">
                        <div className="room-chargeq-single">
                            <small>Total Charges</small>
                            <small>BDT {totalAmount}</small>
                        </div>
                        <div className="room-chargeq-single">
                            <small>Total Taxes</small>
                            <small>BDT {newTax}</small>
                        </div>
                    </div>
                    <div className="total-amount">
                        <span>Total Amount</span>
                        <h5>BDT <span>{grandTotal}</span></h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOutSummery;