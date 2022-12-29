/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import appContext from "../../../store/app-context";
import cartContext from "../../../store/cart-context";
import SearchRoomFilterMdl from "../../RoomSearchElement/RoomSearchFilter/SearchRoomFilterMdl";
const RoomSuitsMdl = ({ suitsAndRoom,setSuitsAndRoom }) => {
  const { storeRoom } = useContext(cartContext);
  const { filters } = useContext(appContext);

const isToggleClass = () => {
  storeRoom({ ...suitsAndRoom, ...filters });
};
  const {roomTitle,title,image,amount,dayNight} = suitsAndRoom
  return (
    <div className="parent-modal">
     
      <input type="checkbox" id="swimmin" />
      <label htmlFor="swimmin" className="modal-background"></label>
      <div className="modal">
        <div className="modal-inner modal-inner-cottage">
        <div className="modal-header">
          <h2>{roomTitle} {title}</h2>
          <label htmlFor="swimmin">
             <i className="fa fa-times" aria-hidden="true"></i>
          </label>
        </div>
        <div className="modal-body-start">
        <SearchRoomFilterMdl />
        <div className='parent-suites-room'>
            <div className="choose-room-single-item">
                   <img src={image} alt="lazz polli resort" />
                <div className="room-content-x">
                    <h2>{roomTitle} - {title}</h2>
                    <h3>
                    {amount}&nbsp;<span>/ <sup>{dayNight}</sup></span>{" "}
                    </h3>
                    
                    <label className="example-label common-btn" htmlFor="swimmin" onClick={isToggleClass}> 
                     <Link to='/checkout'>Book Now</Link>
                    </label>
                    {/* <div className="common-btn">
                     <Link className="card-book" to='/checkout'>Book Now</Link>
                     <Link className="card-book" to={`${cottage.id}`}>Book Now</Link>
                    </div> */}
                </div>
            </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSuitsMdl;
