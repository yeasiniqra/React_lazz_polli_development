import React from 'react';
import DescriptionSlider from '../RoomDetails/RoomDetailsTemplate/DescriptionSlider/DescriptionSlider';
import RoomDescService from '../RoomDetails/RoomDetailsTemplate/RoomDescService/RoomDescService';
import RoomReview from '../RoomDetails/RoomDetailsTemplate/RoomReview/RoomReview';

const SuitsAndCottageDetailsTem = ({room}) => {
    // console.log(item);
    return (
        <>
      <div className="details-room-main-grid-inner">
        <DescriptionSlider room={room} />
        <RoomDescService room={room} />
      </div>
      <RoomReview room={room} />
    </>
    );
};

export default SuitsAndCottageDetailsTem;