/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import appContext from "../../../store/app-context";
import cartContext from "../../../store/cart-context";
import RoomDetailsTemplate from "../../RoomDetails/RoomDetailsTemplate/RoomDetailsTemplate";
import SearchRoomFilterMdl from "../../RoomSearchElement/RoomSearchFilter/SearchRoomFilterMdl";

const RoomSuitsMdl = ({ suitsAndRoom, setRoomdetails }) => {
  const { storeRoom } = useContext(cartContext);
  const { filters } = useContext(appContext);
  const [isAvaible, setIsAvailble] = useState(false)
  const [dateSelect, setDataSelect] = useState(false)
  const navigate = useNavigate()

  const isToggleClass = () => {
    storeRoom({ ...suitsAndRoom, ...filters });
  };
  const handleClose = () => {
    setRoomdetails();
  }
  const handleNavigate = () => {
    navigate('/checkout')
  }
  const availbilityChangeHandler = (isAvaible) => {
    setIsAvailble(isAvaible)
  }
  const avaibleDateHandler = (dateSelect) => {
    setDataSelect(dateSelect)
  }

  const selectDateAlertHandler = () => {
    alert("Please select the arrival date and departure date")
  }
 
  const typeWiseName = suitsAndRoom.Type === "HOUSE" ? `Entire - ${suitsAndRoom.Name}` : `Single Room From - ${suitsAndRoom.Name}`
  const newType = suitsAndRoom.Type === 'ROOM' ? "ROOM" : "HOUSE"

  return (
    <div className="parent-modal">
      <input type="checkbox" id="cottage" />
      <label htmlFor="cottage" className="modal-background"></label>
      <div className="modal">
        <div className="modal-inner modal-inner-cottage">
          <div className="modal-header">
            <h2>
              {typeWiseName} 
            </h2>
            <label htmlFor="cottage">
              <i onClick={handleClose} className="fa fa-times" aria-hidden="true"></i>
            </label>
          </div>
          <div className="modal-body-start">
            <SearchRoomFilterMdl RoomId={suitsAndRoom.Id} Type={newType} setIsAvailble={setIsAvailble} setDataSelect={setDataSelect} />
            <div className="room-search-area">
              <div className="details-room-main-grid">
                <RoomDetailsTemplate room={suitsAndRoom} />
                  <label
                    className="example-label common-btn cottage-pp-btn"
                    htmlFor="cottage"
                    onClick={isToggleClass}
                  >
                    {dateSelect ? (
                      suitsAndRoom.Type === 'ROOM' ? (
                        !isAvaible ? (
                          <button disabled>Not Available</button>
                        ) : (
                          <button onClick={handleNavigate}>Book Room</button>
                        )
                      ) : (
                        !isAvaible ? (
                          <button disabled>Not Available</button>
                        ) : (
                          <button onClick={handleNavigate}>Book House</button>
                        )
                      )
                    ) : (
                      <button className="date-select" onClick={selectDateAlertHandler}>Select Date First</button>
                    )}

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
