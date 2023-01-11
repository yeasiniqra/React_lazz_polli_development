/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// cottage, setSuitsAndRoom

const SuitsAndRoomDetailsTem = ({SuitsAndRoomData,setSuitsAndRoom}) => {
    // console.log(SuitsAndRoomData)
    return (
        <>
        <div className='parent-suites-room'>
            <div className="choose-room-single-item">
                   <img src={SuitsAndRoomData.Images} alt="lazz polli resort" />
                <div className="room-content-x">
                    <h2>Book Single Room From - {SuitsAndRoomData.Name}</h2>
                    <h3>
                    {SuitsAndRoomData.Price}&nbsp;<span>/ <sup>Night</sup></span>{" "}
                    </h3>
                    <div className="cottage-btn">
                        <label className="example-label common-btn" htmlFor="cottage" onClick={() => setSuitsAndRoom(SuitsAndRoomData)}> 
                        <a>View Details</a>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        
        <div className='parent-suites-room'>
            <div className="choose-room-single-item">
                   <img src={SuitsAndRoomData.Images} alt="lazz polli resort" />
                <div className="room-content-x">
                    <h2>Book Entire - {SuitsAndRoomData.Name}</h2>
                    <h3>
                    {SuitsAndRoomData.RoomPrice}&nbsp;<span>/ <sup>Night</sup></span>{" "}
                    </h3>
                    <div className="cottage-btn">
                        <label className="example-label common-btn" htmlFor="cottage" onClick={() => setSuitsAndRoom(SuitsAndRoomData)}> 
                        <a>View Details</a>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default SuitsAndRoomDetailsTem;