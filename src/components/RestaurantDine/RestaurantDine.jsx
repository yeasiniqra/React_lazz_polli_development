import React from "react";
import commonBg from "../../images/room.webp";
import { getResortDine } from "../../services/data-service";
import PageHeader from "../PageHeader/PageHeader";
import RestaurantDineTemplate from "./RestaurantDineTemplate";


const RestaurantDine = () => {
  const getDine = getResortDine();

  return (
        <div>
          <PageHeader imageURL={commonBg} title={"Our Restaurant Dine"} />
          <section className="room-search-area our-restaurant-area">
            <div className="container">
              <div className="details-room-main-grid">
                <div className="our-restaurant-room-main-grid-inner">
                  {getDine.map((dine, index) => (
                    <RestaurantDineTemplate dine={dine} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    };

export default RestaurantDine;
