import React from 'react';
import { Link } from 'react-router-dom';

const SuitsAndRoomDetailsTem = ({cottage, SuitsAndRoomData}) => {
    console.log(SuitsAndRoomData);
    return (
        <div className='parent-suites-room'>
            <div className="choose-room-single-item">
                
                    <img src={cottage.image} alt="lazz polli resort" />
                
                <div className="room-content-x">
                    <h2>{cottage.roomTitle} - {SuitsAndRoomData.title}</h2>
                    <h3>
                    {cottage.roomAmount}&nbsp;<span>/ <sup>{cottage.dayNight}</sup></span>{" "}
                    </h3>
                    <div className="common-btn">
                    <Link className="card-book" to='/checkout'>Book Now</Link>
                    {/* <Link className="card-book" to={`${cottage.id}`}>Book Now</Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuitsAndRoomDetailsTem;