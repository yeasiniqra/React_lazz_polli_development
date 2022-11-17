import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import appContext from "../../../store/app-context";
import cartContext from "../../../store/cart-context";


const SearchCard = ({ item }) => {
  const { storeRoom, getQuantity, isInitiating, rooms, removeRoom } =
    useContext(cartContext);
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

  const toggleClass = () => {
    storeRoom({ ...item, ...filters });
  };

  useEffect(() => {
    if (!isInitiating) {
      const quantity = getQuantity(item.Id);
      setCount(quantity);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitiating, rooms]);

  return (
    <div className="min-items-inner-single">
      <div className="search-room-img">
        <Link to="#">
          <img src={item.image} alt="room" />
        </Link>
      </div>
      <div className="search-room-content">
        <h4>{item.title}</h4>
        <div className="super-king-flex">
          <div className="sp-left">
            <span className="sp-margin">
              <Link to="#">{item.spTitle}</Link>
            </span>
            <p>{item.roomRateTitle}</p>
            <p>{item.bookItemTitle}</p>
            <span>{item.brackFirstTitle}</span>
          </div>
          <div className="sp-right">
            <h4>
              BDT <span>{item.amount}</span>
            </h4>
            <small> Price for {item.priceNight} Night </small>
            <div className="card-adults">
              <small> {item.adults} Adults</small>
              <small> {item.child} Child</small>
              <small> {item.room} Room</small>
            </div>
          </div>
        </div>
        <div className="common-btn book-search-btn">
          {!!!count && (
            <button onClick={toggleClass} className="searchBtn">
              {item.btnText}
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
                    -
                  </span>
                  <aside>
                    <small>{count}</small>
                  </aside>
                  <span
                    onClick={IncOnClickedHandler}
                    className="qty-inc-btn2"
                    title="Inc button"
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default SearchCard;
