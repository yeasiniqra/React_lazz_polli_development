/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { imageURL, IMAGE_CATEGORY } from "../../lib/galleryService";

const SuitsAndRoomDetailsTem = ({ SuitsAndRoomData, setRoomdetails }) => {
    const detailsClickHandler = (Type) => {
        setRoomdetails({ ...SuitsAndRoomData, Type });
    };

    const roomCoverImages = SuitsAndRoomData?.Images?.filter((banner) => banner.ImageFor === "ROOM_COVER");
    const lastRoomCoverImage = roomCoverImages?.sort((a, b) => new Date(b.UploadDate) - new Date(a.UploadDate))[0];
    const houseCoverImages = SuitsAndRoomData?.Images?.filter((banner) => banner.ImageFor === "HOUSE_COVER");
    const lasthouseCoverImage = houseCoverImages?.sort((a, b) => new Date(b.UploadDate) - new Date(a.UploadDate))[0];

    return (
        <>
            <div className="parent-suites-room">
                <div className="choose-room-single-item">
                   <img src={imageURL(IMAGE_CATEGORY.HOUSE, lasthouseCoverImage?.ImagePath)} alt="resort full package price in Bangladesh" />
                    <div className="room-content-x">
                        <h2>Book Entire - {SuitsAndRoomData.Name}</h2>
                        <h3>
                            {SuitsAndRoomData.Price}&nbsp;
                            <span>
                                / <sup>Night</sup>
                            </span>{" "}
                        </h3>
                        <div className="cottage-btn">
                            <label className="example-label common-btn" htmlFor="cottage" onClick={detailsClickHandler.bind(null, "HOUSE")}>
                                <a>View Details</a>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="parent-suites-room">
                <div className="choose-room-single-item">
                <img src={imageURL(IMAGE_CATEGORY.HOUSE, lastRoomCoverImage?.ImagePath)} alt="resort full package price in Bangladesh" />
                    <div className="room-content-x">
                        <h2>Book Single Room From - {SuitsAndRoomData.Name}</h2>
                        <h3>
                            {SuitsAndRoomData.RoomPrice}&nbsp;
                            <span>
                                / <sup>Night</sup>
                            </span>{" "}
                        </h3>
                        <div className="cottage-btn">
                            <label className="example-label common-btn" htmlFor="cottage">
                               <fieldset onClick={detailsClickHandler.bind(null, "ROOM")} disabled={(SuitsAndRoomData.Permalink === "double-dom" && SuitsAndRoomData.RoomPrice) || (SuitsAndRoomData.Permalink === "mud-house" && SuitsAndRoomData.RoomPrice)}>
                                {((SuitsAndRoomData.Permalink === "double-dom" && SuitsAndRoomData.RoomPrice) || (SuitsAndRoomData.Permalink === "mud-house" && SuitsAndRoomData.RoomPrice)) ? "Not Available" : "View Details"}
                                </fieldset>
                            </label>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    );
};

export default SuitsAndRoomDetailsTem;
