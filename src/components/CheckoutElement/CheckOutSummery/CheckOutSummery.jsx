import React from 'react';
import { Link } from 'react-router-dom';

const CheckOutSummery = () => {
    const title = {
        title : 'Your booking summary'
    }
    return (
        <div className="room-search-cart-right">
            <div className="shopping-cart">
                <h4>{title.title}</h4>
                <div className="summery-main-grid checkout-summery-main-grid">
                    <div className="smy-date">
                        <span> Lazz Polli Resort </span>
                        <div className="ratting">
                            <div className="rate">
                                <input type="radio" id="star5" name="rate" value="5" />
                                <label htmlFor="star5" title="text">5 stars</label>
                                <input type="radio" id="star4" name="rate" value="4" />
                                <label htmlFor="star4" title="text">4 stars</label>
                                <input type="radio" id="star3" name="rate" value="3" />
                                <label htmlFor="star3" title="text">3 stars</label>
                                <input type="radio" id="star2" name="rate" value="2" />
                                <label htmlFor="star2" title="text">2 stars</label>
                                <input type="radio" id="star1" name="rate" value="1" />
                                <label htmlFor="star1" title="text">1 star</label>
                            </div>
                        </div>
                    </div>
                    <div className="address-check-out">
                        <p>Lazz Polli Convention, Hemayetpur Saver, Bangladesh.</p>
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
                    <div className="smy-date">
                        <div className="check-in-out">
                            <h6>Check-In</h6>
                            <small>2022-07-23</small>
                            <h5>1 Night Stay</h5>
                            <div className="common-btn book-search-btn smr-book-search-btn">
                                <button>Change Dates</button>
                            </div>
                        </div>
                        <div className="check-in-out">
                            <h6>Check-Out</h6>
                            <small>2022-07-24</small>
                        </div>
                    </div>
                    <h4 className='roomNight'>Rooms & Rates ( Price For 1 Night )</h4>
                    <div className="super-flex-item">
                        <div className="spk-left">
                            <p><span>Room : </span>Superior King</p>
                            <p><span>Pax Details : </span> 2 Adults 1 Child 1 room</p>
                        </div>
                    </div>
                    <div className="special-conditions-check">
                        <span>Special conditions :</span>
                        <small>Breakfast is included in the room rates</small>
                        <div className="room-chargeq">
                            <div className="room-chargeq-single">
                                <small>Room Charges </small>
                                <small>BDT 9,100</small>
                            </div>
                            <div className="room-chargeq-single">
                                <small>Taxes & Fees </small>
                                <small>BDT 9,100 </small>
                            </div>
                        </div>
                    </div>
                    <div className="total-rom-service">
                        <div className="room-chargeq-single">
                            <small>Total Room Charges </small>
                            <small>BDT 9,100</small>
                        </div>
                        <div className="room-chargeq-single">
                            <small>Total Taxes </small>
                            <small>BDT 9,100</small>
                        </div>
                        <div className="room-chargeq-single">
                            <small>Total Price (Inc. Of Taxes) </small>
                            <small>BDT 9,100</small>
                        </div>
                        <div className="room-chargeq-single">
                            <small>Total Payable Now </small>
                            <small>BDT 9,100</small>
                        </div>
                        <div className="room-chargeq-single">
                            <small>Amount due at time of check-in </small>
                            <small>BDT 9,100</small>
                        </div>
                        <Link className="brack-down-2022" to='/searchroom'>Price Breakdown / Rate Details</Link>
                    </div>
                    <div className="total-amount">
                        <span> Pay Now</span>
                        <h5>BDT <span>9,800</span></h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOutSummery;