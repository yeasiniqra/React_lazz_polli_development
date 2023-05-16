import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { GET_ROOMS } from '../../../lib/endpoints';
import { setHouses } from '../../../services/data-service';
import { getV2 } from '../../../services/http-service-v2';
import RoomCard from '../../RoomCard/RoomCard';
import RoomSuitsMdl from '../../Sheared/CommonModal/RoomSuitsMdl';
import Suspense from '../../Sheared/Suspense/Suspense';
import { toast } from 'react-toastify';

const RoomGrid = () => {
    const [roomdetails, setRoomdetails] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [room, setRoom] = useState([]);
    const mounted = useRef(false)
    const title = {
        subTitle : 'choose room according to budget',
    }

    const getHouses = useCallback(() => {
      setIsLoading(true)
      getV2({ url: GET_ROOMS(),onError:(response)=>{
        toast.warning(response.Msg);
      } }).then((data) => {
        if (!data.IsError) {
          setRoom(data.Data.Data);
          setHouses(data.Data.Data);
          setIsLoading(false)
        } else {
        }
      });
    }, []);

    useEffect(() => {
      if (!mounted.current) {
        getHouses();
        mounted.current = true;
      }
    }, [getHouses]);

    return (
        <section className="room-search-area">
            <div className="container">
                <div className="other-page-heading">
                    <h1>
                    <span>Explore Our </span>rooms
                    </h1>
                    <small>{title.subTitle}</small>
                </div>
                <div className="choose-room-main-grid">
                    {room.map((room) => (
                    <RoomCard room={room} key={room.Id} setRoomdetails={setRoomdetails} />
                    ))}
                      {
                            roomdetails && 
                            <RoomSuitsMdl
                            suitsAndRoom={roomdetails}
                            setRoomdetails={setRoomdetails}
                            />
                        }
                </div>
            </div>
            {isLoading && <Suspense />}
       </section>
    );
};

export default RoomGrid;