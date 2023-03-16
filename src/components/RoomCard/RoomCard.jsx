/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { imageURL, IMAGE_CATEGORY } from "../../lib/galleryService";

const RoomCard = ({room, setRoomdetails}) => {
  const detailsClickHandler = (Type) => {
    setRoomdetails({...room, Type});
}

  const roomCoverImages = room?.Images?.filter((banner) => banner.ImageFor === "ROOM_COVER");
  const lastRoomCoverImage = roomCoverImages?.sort((a, b) => new Date(b.UploadDate) - new Date(a.UploadDate))[0];
  const houseCoverImages = room?.Images?.filter((banner) => banner.ImageFor === "HOUSE_COVER");
  const lasthouseCoverImage = houseCoverImages?.sort((a, b) => new Date(b.UploadDate) - new Date(a.UploadDate))[0];

  return (
    <>
      <div className="choose-room-single-item">
           <img src={imageURL(IMAGE_CATEGORY.HOUSE, lastRoomCoverImage?.ImagePath)} alt="resort full package price in Bangladesh" />
            <div className="room-content-x">
              <h2>Book Single Room From - {room.Name}</h2>
              <h3>
                {room.RoomPrice}&nbsp;<span>/ <sup>Night</sup></span>{" "}
              </h3>
              <div className="cottage-btn">
                <label className="example-label common-btn" htmlFor="cottage" onClick={detailsClickHandler.bind(null, 'ROOM')}> 
                    <fieldset onClick={detailsClickHandler.bind(null, "ROOM")} disabled={(room.Permalink === "double-dom" && room.RoomPrice) || (room.Permalink === "mud-house" && room.RoomPrice)}>
                    {((room.Permalink === "double-dom" && room.RoomPrice) || (room.Permalink === "mud-house" && room.RoomPrice)) ? "Not Available" : "View Details"}
                    </fieldset>
                </label>
              </div>
           </div>
      </div>

      <div className="choose-room-single-item">
         <img src={imageURL(IMAGE_CATEGORY.HOUSE, lasthouseCoverImage?.ImagePath)} alt="resort full package price in Bangladesh" />
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
