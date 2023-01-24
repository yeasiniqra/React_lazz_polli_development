/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import appContext from "../../../store/app-context";
import cartContext from "../../../store/cart-context";
import RoomDetailsTemplate from "../../RoomDetails/RoomDetailsTemplate/RoomDetailsTemplate";
import SearchRoomFilterMdl from "../../RoomSearchElement/RoomSearchFilter/SearchRoomFilterMdl";

const RoomSuitsMdl = ({ suitsAndRoom, setSuitsAndRoom }) => {
  const { storeRoom } = useContext(cartContext);
  const { filters } = useContext(appContext);
  const [isAvaible, setIsAvailble] = useState(false)
  const navigate = useNavigate()

  const isToggleClass = () => {
    storeRoom({ ...suitsAndRoom, ...filters });
  };

  const handleNavigate = () => {
    navigate('/checkout')
  }

 const availbilityChangeHandler = (isAvaible) => {
  setIsAvailble(isAvaible)
  
 }
console.log(availbilityChangeHandler);
  const { Name } = suitsAndRoom;

  return (
    <div className="parent-modal">
      <input type="checkbox" id="cottage" />
      <label htmlFor="cottage" className="modal-background"></label>
      <div className="modal">
        <div className="modal-inner modal-inner-cottage">
          <div className="modal-header">
            <h2>
              {Name} 
            </h2>
            <label htmlFor="cottage">
              <i className="fa fa-times" aria-hidden="true"></i>
            </label>
          </div>
          <div className="modal-body-start">
            <SearchRoomFilterMdl RoomId={suitsAndRoom.Id} Type={suitsAndRoom.type} setIsAvailble={setIsAvailble} />
            <div className="room-search-area">
              <div className="details-room-main-grid">
                <RoomDetailsTemplate room={suitsAndRoom} />
                <label
                  className="example-label common-btn cottage-pp-btn"
                  htmlFor="cottage"
                  onClick={isToggleClass}
                >
                  <button  disabled={!isAvaible} onClick={handleNavigate}>Book Now</button>
                </label>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSuitsMdl;
