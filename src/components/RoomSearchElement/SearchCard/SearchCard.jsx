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

  const calPrice = item.Type === 'ROOM' ? item.RoomPrice : item.Price

  return (
    <div className="min-items-inner-single">
      <div className="search-room-img">
        <Link to="#">
          <img src={item.image} alt="react lazz polli" />
        </Link>
      </div>
      <div className="search-room-content">
        <h4>{item.Name}</h4>
        <div className="super-king-flex">
          <div className="sp-left">
            <p>Room Rates Exclusive of Ser. Chg. & VAT</p>
          </div>
          <div className="sp-right">
            <h4>
              BDT {calPrice}
            </h4>
            <div className="card-adults">
              <small> {item.AdultPerRoom} Adults</small>
              <small> {item.ChildrenPerRoom} Child</small>
              <small> {item.TotalRoom - getQuantity(item.Id, item.Type)} Room</small>
            </div>
          </div>
        </div>
        <div className="common-btn book-search-btn">
          {!!!count && (
            <button onClick={isToggleClass} className="searchBtn">
              Book Room
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
                   <button disabled={count === item.Available}> +</button>
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
