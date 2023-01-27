/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const RoomCard = ({room, setRoomdetails}) => {
  const detailsClickHandler = (Type) => {
    setRoomdetails({...room, Type});
}

  return (
    <>
      <div className="choose-room-single-item">
            <img src={room.Images} alt="lazz polli resort" />
            <div className="room-content-x">
              <h2>Book Single Room From - {room.Name}</h2>
              <h3>
                {room.RoomPrice}&nbsp;<span>/ <sup>Night</sup></span>{" "}
              </h3>

              <div className="cottage-btn">
                <label className="example-label common-btn" htmlFor="cottage" onClick={detailsClickHandler.bind(null, 'ROOM')}> 
                <a>View Details</a>
                </label>
              </div>
           </div>
      </div>

      <div className="choose-room-single-item">
            <img src={room.Images} alt="lazz polli resort" />
          <div className="room-content-x">
              <h2>Book Entire - {room.Name}</h2>
              <h3>
                {room.Price}&nbsp;<span>/ <sup>Night</sup></span>{" "}
              </h3>
              <div className="cottage-btn">
                <label className="example-label common-btn" htmlFor="cottage" onClick={detailsClickHandler.bind(null, 'HOUSE')}> 
                <a>View Details</a>
                </label>
              </div>
          </div>
      </div>
    </>
  );
};

export default RoomCard;
