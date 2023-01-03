/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const SuitsAndRoomDetailsTem = ({cottage, setSuitsAndRoom}) => {

    return (
        <div className='parent-suites-room'>
            <div className="choose-room-single-item">
                   <img src={cottage.image} alt="lazz polli resort" />
                <div className="room-content-x">
                    <h2>{cottage.title}</h2>
                    <h3>
                    {cottage.amount}&nbsp;<span>/ <sup>{cottage.dayNight}</sup></span>{" "}
                    </h3>
                    <div className="cottage-btn">
                        <label className="example-label common-btn" htmlFor="cottage" onClick={() => setSuitsAndRoom(cottage)}> 
                        <a>View Details</a>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuitsAndRoomDetailsTem;