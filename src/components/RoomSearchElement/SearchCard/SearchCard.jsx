import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchCard = ({item}) => {
    const [count, setCount] = useState(1);
    const IncOnClickedHandler = () => setCount(count + 1);
    const DecOnClickedHandler = () => setCount (count - 1);

    const [isActive, setActive] = useState();
    const toggleClass = () => {
        setActive(!isActive)
    };

    return (
        <div className="min-items-inner-single">
            <div className="search-room-img">
               <Link to='#'><img src={item.image} alt="room" /></Link>
            </div>
            <div className="search-room-content">
                <h4>{item.title}</h4>
                <div className="super-king-flex">
                    <div className="sp-left">
                        <span className="sp-margin"><Link to='#'>{item.spTitle}</Link></span>
                        <p>{item.roomRateTitle}</p>
                        <p>{item.bookItemTitle}</p>
                        <span>{item.brackFirstTitle}</span>
                    </div>
                    <div className="sp-right">
                        <h4>BDT <span>{item.amount}</span></h4>
                        <small>{item.priceNight} </small>
                        <small> {item.adults}  </small>
                    </div>
                </div>
                <div className="common-btn book-search-btn">
                    <button onClick={toggleClass} className='searchBtn'>{item.btnText}</button>
                    <div className={`add-tocart-overlay ${isActive && 'show'}`}>
                        <div className="inner-card-flex">
                            <div className="qty-holder2">
                                <span onClick={DecOnClickedHandler} className="qty-dec-btn2" title="Dec button">-</span>
                                <aside><small>{count}</small>{item.overlyBtn}</aside>
                                <span onClick={IncOnClickedHandler} className="qty-inc-btn2" title="Inc button">+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchCard;