import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../PageHeader/PageHeader";
import commonBg from "../../images/room.webp";
import SuitsAndRoomDetailsTem from "./SuitsAndRoomDetailsTem";
import { useState } from "react";
import RoomSuitsMdl from "../Sheared/CommonModal/RoomSuitsMdl";
import { GET_SINGLE_HOUSES } from "../../lib/endpoints";
import { getV2 } from "../../services/http-service-v2";
import { useRef } from "react";
import Suspense from "../Sheared/Suspense/Suspense";
import { toast } from "react-toastify";

const SuitsAndRoomDetails = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { Id } = useParams();
    const [suitsAndRoom, setRoomdetails] = useState(null);
    const [roomSingle, setRoomSingle] = useState([]);
    const mounted = useRef(false);

    const getHousess = useCallback(() => {
        setIsLoading(true);
        getV2({ url: GET_SINGLE_HOUSES(Id),onError:(response)=>{
            toast.warning(response.Msg);
          } }).then((data) => {
            if (!data.IsError) {
                if (data.Data === null) {
                    // alert("");
                    console.log("room suits data Null")
                }
                setRoomSingle(data.Data);
                setIsLoading(false);
            } else {
            }
        });
    }, [Id]);

    useEffect(() => {
        if (!mounted.current) {
            getHousess();
            mounted.current = true;
        }
    }, [getHousess]);

    return (
        <div>
            <PageHeader imageURL={commonBg} title={"Cottage & Room Details"} />
            <div className="room-search-area">
                <div className="container">
                    <div className="cottage-room-details-grid">
                        {roomSingle && 
                        <SuitsAndRoomDetailsTem SuitsAndRoomData={roomSingle} setRoomdetails={setRoomdetails} />}
                        {suitsAndRoom && 
                        <RoomSuitsMdl suitsAndRoom={suitsAndRoom} setRoomdetails={setRoomdetails} />}
                    </div>
                </div>
            </div>
            {isLoading && <Suspense />}
        </div>
    );
};

export default SuitsAndRoomDetails;
