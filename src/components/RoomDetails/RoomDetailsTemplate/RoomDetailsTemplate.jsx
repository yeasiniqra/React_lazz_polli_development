import React from 'react';
import DescriptionSlider from "./DescriptionSlider/DescriptionSlider";
import RoomDescService from './RoomDescService/RoomDescService';

const RoomDetailsTemplate = ({room}) => {
  return (
    <>
      <div className="details-room-main-grid-inner">
        <DescriptionSlider room={room} />
        <RoomDescService room={room} />
      </div>
     
    </>
  );
};

export default RoomDetailsTemplate;
