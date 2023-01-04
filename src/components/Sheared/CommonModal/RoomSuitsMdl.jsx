/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import appContext from "../../../store/app-context";
import cartContext from "../../../store/cart-context";
import RoomDetailsTemplate from "../../RoomDetails/RoomDetailsTemplate/RoomDetailsTemplate";
import SearchRoomFilterMdl from "../../RoomSearchElement/RoomSearchFilter/SearchRoomFilterMdl";

const RoomSuitsMdl = ({ suitsAndRoom, setSuitsAndRoom }) => {
  const { storeRoom } = useContext(cartContext);
  const { filters } = useContext(appContext);

  const isToggleClass = () => {
    storeRoom({ ...suitsAndRoom, ...filters });
  };


  const { roomTitle, title } = suitsAndRoom;
  return (
    <div className="parent-modal">
      <input type="checkbox" id="cottage" />
      <label htmlFor="cottage" className="modal-background"></label>
      <div className="modal">
        <div className="modal-inner modal-inner-cottage">
          <div className="modal-header">
            <h2>
              {roomTitle} {title}
            </h2>
            <label htmlFor="cottage">
              <i className="fa fa-times" aria-hidden="true"></i>
            </label>
          </div>
          <div className="modal-body-start">
            <SearchRoomFilterMdl />

            <div className="room-search-area">
              <div className="details-room-main-grid">
                <RoomDetailsTemplate room={suitsAndRoom} />
                <label
                  className="example-label common-btn cottage-pp-btn"
                  htmlFor="cottage"
                  onClick={isToggleClass}
                >
                  <Link to="/checkout">Book Now</Link>
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
