import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { imageURL, IMAGE_CATEGORY } from "../../../lib/galleryService";
import appContext from "../../../store/app-context";
import cartContext from "../../../store/cart-context";

const SearchCard = ({ item }) => {
  const {
    storeRoom,
    getQuantity,
    isInitiating,
    rooms,
    removeRoom,
    isHouseAdded,
    isRoomAdded
  } = useContext(cartContext);
  const { filters } = useContext(appContext);

  const [count, setCount] = useState(0);

  const IncOnClickedHandler = () => {
    storeRoom({ ...item, ...filters }, count + 1);
    setCount((prevState) => ++prevState);
  };
  const DecOnClickedHandler = () => {
    if (count - 1 === 0) removeRoom(item);
    else storeRoom({ ...item, ...filters }, count - 1);
    setCount((prevState) => --prevState);
  };

  const isToggleClass = () => {
    storeRoom({ ...item, ...filters });
  };

  useEffect(() => {
    if (!isInitiating) {
      const quantity = getQuantity(item.Id, item.Type);
      setCount(quantity);
    }

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitiating, rooms]);

  const calculatePrice = item.Type === "ROOM" ? item.RoomPrice : item.Price;

    // Check if the item has a house cover image or a room cover image
    const houseCoverImage = item.Images.find(
      (image) => image.ImageFor === "HOUSE_COVER"
    );
    const roomCoverImage = item.Images.find(
      (image) => image.ImageFor === "ROOM_COVER"
    );

  return (
    <div className="min-items-inner-single">
      <div className="search-room-img">
      <Link to="#">
          {item.Type === "HOUSE" && houseCoverImage && (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              src={imageURL(IMAGE_CATEGORY.HOUSE, houseCoverImage.ImagePath)}
              alt="house cover image"
            />
          )}
          {item.Type === "ROOM" && roomCoverImage && (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              src={imageURL(IMAGE_CATEGORY.HOUSE, roomCoverImage.ImagePath)}
              alt="room cover image"
            />
          )}
        </Link>
      </div>
      <div className="search-room-content">
        <h4>{item.Name}</h4>
        <div className="super-king-flex">
          <div className="sp-left">
            <p>Room Rates Exclusive of Ser. Chg. & VAT</p>
          </div>
          <div className="sp-right">
            <h4>BDT {calculatePrice}</h4>
            <span className="cl-night">Price for 1 Night</span>
            <div className="card-adults">
              <small>
                {" "}
                {item.Type === "ROOM" ? item.AdultPerRoom : ""}{" "}
                {item.Type === "ROOM" ? "Adults" : ""}
              </small>
              <small>
                {" "}
                {item.Type === "ROOM" ? item.ChildrenPerRoom : "Full"}{" "}
                {item.Type === "ROOM" ? "Child" : ""}{" "}
              </small>
              <small>
                {" "}
                {item.Type === "ROOM"
                  ? item.Available - getQuantity(item.Id, item.Type)
                  : 1}{" "}
                {item.Type === "ROOM" ? "Room" : "Cottage"}
              </small>
            </div>
          </div>
        </div>

        {item.Type === "ROOM" ? (
          <>
            <div className="common-btn book-search-btn">
              {!!!count && (
                <button onClick={isToggleClass} className="searchBtn" disabled={(isHouseAdded(item.Id, filters.arrivalDate, filters.departureDate)) || (item.Name === "Double Dom (Private Suite)" && item.RoomPrice) || (item.Name === "Mud House" && item.RoomPrice)}>
                  {((isHouseAdded(item.Id, filters.arrivalDate, filters.departureDate)) || (item.Name === "Double Dom (Private Suite)" && item.RoomPrice) || (item.Name === "Mud House" && item.RoomPrice)) ? "Not Available" : "Book Room"}
                </button>
              )}
              {!!count && (
                <div className={`add-tocart-overlay show`}>
                  <div className="inner-card-flex">
                    <div className="qty-holder2">
                      <span
                        onClick={DecOnClickedHandler}
                        className="qty-dec-btn2"
                        title="Dec button"
                      >
                        <button className="book-btn"> - </button>
                      </span>
                      <aside>
                        <small>{count}</small>
                      </aside>
                      <span
                        onClick={IncOnClickedHandler}
                        className="qty-inc-btn2"
                        title="Inc button"
                      >
                        <button
                          className="book-btn"
                          disabled={count === item.Available}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="common-btn book-search-btn">
            <button
              onClick={isToggleClass}
              className="searchBtn"
              disabled={isRoomAdded(item.Id, filters.arrivalDate, filters.departureDate) && item.Type === "HOUSE"}
            >
              Book Cottage
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchCard;
