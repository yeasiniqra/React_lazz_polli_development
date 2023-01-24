import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { GET_ROOMS } from '../../../lib/endpoints';
import { setHouses } from '../../../services/data-service';
import { getV2 } from '../../../services/http-service-v2';
import RoomCard from '../../RoomCard/RoomCard';
import RoomSuitsMdl from '../../Sheared/CommonModal/RoomSuitsMdl';

const RoomGrid = () => {
    const [roomdetails, setRoomdetails] = useState(null)
    const title = {
        subTitle : 'choose room according to budget',
    }

    const [room, setRoom] = useState([]);
    const mounted = useRef(false)
  
    const getHouses = useCallback(() => {
      getV2({ url: GET_ROOMS() }).then((data) => {
        if (!data.IsError) {
          setRoom(data.Data.Data);
          setHouses(data.Data.Data);
        } else {
          //   console.log(data);
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
                           
                            />
                        }
                </div>
            </div>
       </section>
    );
};

export default RoomGrid;