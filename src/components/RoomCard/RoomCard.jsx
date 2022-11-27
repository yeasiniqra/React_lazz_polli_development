import React from "react";
import { Link } from 'react-router-dom';

const RoomCard = ({room}) => {
  return (
    <div className="choose-room-single-item">
        <Link to={`${room.id}`}>
          <img src={room.image} alt="lazz polli resort" />
        </Link>
        <div className="room-content-x">
            <Link to={`${room.id}`}>{room.roomTitle}</Link>
            <h3>
              {room.roomAmount}&nbsp;<span>/ <sup>{room.dayNight}</sup></span>{" "}
            </h3>
            <div className="common-btn">
             <Link className="card-book" to='/checkout'>Book Now</Link>
              <Link to={`${room.id}`}>{room.btnText}</Link>
            </div>
        </div>
    </div>
  );
};

export default RoomCard;
