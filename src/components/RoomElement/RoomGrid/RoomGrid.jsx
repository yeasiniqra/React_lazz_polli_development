import React from 'react';
import { getResortRoom } from '../../../services/data-service';
import RoomCard from '../../RoomCard/RoomCard';

const RoomGrid = () => {
    const title = {
        subTitle : 'choose room according to budget',
    }
    const resortRoom = getResortRoom();
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
                    {resortRoom.map((room) => (
                    <RoomCard room={room} key={room.id}/>
                    ))}
                </div>
            </div>
       </section>
    );
};

export default RoomGrid;