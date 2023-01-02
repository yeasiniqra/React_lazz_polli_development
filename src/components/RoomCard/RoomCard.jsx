import React from "react";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import cartContext from "../../store/cart-context";

const RoomCard = ({room}) => {
  const { storeRoom } = useContext(cartContext);


  const isToggleClass = () => {
    storeRoom({ ...room });
  };

  return (
    <div className="choose-room-single-item">
        <Link to={`${room.Id}`}>
          <img src={room.image} alt="lazz polli resort" />
        </Link>
        <div className="room-content-x">
            <Link to={`${room.Id}`}>{room.title}</Link>
            <h3>
              {room.amount}&nbsp;<span>/ <sup>{room.dayNight}</sup></span>{" "}
            </h3>
            <div className="common-btn">
              <Link onClick={isToggleClass} className="card-book" to='/checkout'>Book Now</Link>
              <Link to={`${room.Id}`}>{room.btnText}</Link>
            </div>
        </div>
    </div>
  );
};

export default RoomCard;
