import React from "react";
import commonBg from "../../images/room.jpg";
import { getResortDine } from "../../services/data-service";
import PageHeader from "../PageHeader/PageHeader";
import RestaurantMenu from "./RestaurantDineMenu/RestaurantMenu";
import RestaurantDineTem from "./RestaurantDineTem/RestaurantDineTem";

const RestaurantDine = () => {
  const getDine = getResortDine();
  const title = {
    subTitle : ' Nor again is there anyone who loves or pursues or desires to  obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise.'
  }
  return (
    <div>
      <PageHeader imageURL={commonBg} title={"Our Restaurant"} />
      <section className="room-search-area our-restaurant-area">
        <div className="container">
          <div className="other-page-heading">
            <h1>
              <span>OUR SPECIAL </span>DISHES
            </h1>
            <small>
             {title.subTitle}
            </small>
          </div>
          <div className="details-room-main-grid">
            <div className="our-restaurant-room-main-grid-inner">
              {getDine.map((dineService, index) => (
                <RestaurantDineTem dineService={dineService} key={index} />
              ))}
            </div>
          </div>
          <RestaurantMenu />
        </div>
      </section>
     
    </div>
  );
};

export default RestaurantDine;
