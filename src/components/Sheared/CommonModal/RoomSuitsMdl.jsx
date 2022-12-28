import React from "react";
const RoomSuitsMdl = ({ suitsAndRoom }) => {
  return (
    <div className="parent-modal">
      <input type="checkbox" id="swimmin" />
      <label htmlFor="swimmin" className="modal-background"></label>
      <div className="modal">
        <div className="modal-inner">
        <div className="modal-header">
          <h2>{suitsAndRoom.roomTitle} {suitsAndRoom.title}</h2>
          <label htmlFor="swimmin">
             <i className="fa fa-times" aria-hidden="true"></i>
          </label>
        </div>
        <div className="modal-body-start"></div>
        </div>
      </div>
    </div>
  );
};

export default RoomSuitsMdl;
