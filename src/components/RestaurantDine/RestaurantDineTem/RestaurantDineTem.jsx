import React from "react";

const RestaurantDineTem = ({dineService}) => {
  return (
    <>
        <div className="our-dise-single-items">
          <img src={dineService.image} alt="dish" />
          <h3>{dineService.title}</h3>
          <p>
            {dineService.subTitle}
          </p>
        </div>
    </>
  );
};

export default RestaurantDineTem;
