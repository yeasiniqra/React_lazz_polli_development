import React from 'react';
import commonBg from '../../../images/room.jpg';

const SearchRoomFilter = () => {
    return (
        <section className="banner-area other-page-area" style={{ backgroundImage: `url(${commonBg})` }}>
            <div className="container">
                <div className="hotel-booking-search">
                    <form name="hb-search-form" action="">
                        <div className="book_table_inner">
                            <div className="book_table_item">
                                <span>Arrival Date</span>
                                <div className="input-append">
                                    <input type="date" name="check_in_date" id="Arrival"  placeholder="Arrival Date" autoComplete="off" />
                                    <button className="add-on" type="button"><i className="fa fa-calendar" aria-hidden="true"></i></button>
                                </div>
                            </div>
                            <div className="book_table_item">
                                <span>Departure Date</span>
                                <div className="input-append">
                                    <input type="date" name="check_out_date" id="Departure"  placeholder="Departure Date" autoComplete="off" />
                                    <button className="add-on" type="button"><i className="fa fa-calendar" aria-hidden="true"></i></button>
                                </div>
                            </div>
                            <div className="book_table_item">
                                <span>Adults</span>
                                <select name="adults_capacity">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="book_table_item">
                                <span>Children</span>
                                <select name="max_child">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                            <div className="book_table_item">
                                <button type="submit">Check Availability</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SearchRoomFilter;