/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const RoomCard = ({room, setRoomdetails}) => {

  return (
    <div className="choose-room-single-item">
          <img src={room.image} alt="lazz polli resort" />
        
        <div className="room-content-x">
            <h2>{room.title}</h2>
            <h3>
              {room.amount}&nbsp;<span>/ <sup>{room.dayNight}</sup></span>{" "}
            </h3>

            <div className="cottage-btn">
              <label className="example-label common-btn" htmlFor="cottage" onClick={() => setRoomdetails(room)}> 
              <a>View Details</a>
              </label>
            </div>

        </div>
    </div>
  );
};

export default RoomCard;
