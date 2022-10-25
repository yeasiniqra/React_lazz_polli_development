import React from "react";
import commonBg from "../images/room.jpg";
import PageHeader from "../components/PageHeader/PageHeader";
import RoomElement from "../components/RoomElement/RoomElement";


const Room = () => {
  return (
    <>
      <PageHeader imageURL={commonBg} title={'Rooms'} />
      <RoomElement />
    </>
  );
};

export default Room;
