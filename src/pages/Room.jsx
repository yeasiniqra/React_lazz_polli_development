import React from "react";
import commonBg from "../images/room.webp";
import PageHeader from "../components/PageHeader/PageHeader";
import RoomElement from "../components/RoomElement/RoomElement";
import { useTitle } from "../hooks/UseTitle";


const Room = () => {
  useTitle('Room')
 
  return (
    <>
      <PageHeader imageURL={commonBg} title={'Rooms'} />
      <RoomElement />
    </>
  );
};

export default Room;
