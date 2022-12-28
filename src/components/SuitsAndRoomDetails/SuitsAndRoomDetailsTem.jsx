/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const SuitsAndRoomDetailsTem = ({cottage, setSuitsAndRoom}) => {

    return (
        <div className='parent-suites-room'>
            <div className="choose-room-single-item">
                   <img src={cottage.image} alt="lazz polli resort" />
                <div className="room-content-x">
                    <h2>{cottage.roomTitle} - {cottage.title}</h2>
                    <h3>
                    {cottage.roomAmount}&nbsp;<span>/ <sup>{cottage.dayNight}</sup></span>{" "}
                    </h3>
                    
                    <label className="example-label common-btn" htmlFor="swimmin" onClick={() => setSuitsAndRoom(cottage)}> 
                     <a>Book Now</a>
                    </label>
                    {/* <div className="common-btn">
                     <Link className="card-book" to='/checkout'>Book Now</Link>
                     <Link className="card-book" to={`${cottage.id}`}>Book Now</Link>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default SuitsAndRoomDetailsTem;