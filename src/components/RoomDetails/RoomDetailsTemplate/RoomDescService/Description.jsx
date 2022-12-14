import React from 'react';
import RoomReview from '../RoomReview/RoomReview';
import ServiceItem from './ServiceItem';

const Description = ({room}) => {
    return (
        <div className="dts-right-content">
            <div className="dts-right-content-inner">
                <div className="room-detaits-main">
                    <h2>{room.roomSingle[1].title}</h2>
                    {/* <p>{room.roomSingle[1].description.length > 350 ? <>{room.roomSingle[1].description.slice(0, 350) + '...'} <small>Read More</small></> : room.roomSingle[1].description}</p> */}
                    <p>{room.roomSingle[1].description}</p>
                    <div className="room-service-list">
                        <h3>{room.roomSingle[1].subTitle}</h3>
                        <ul>
                            {
                            room.roomSingle[2].roomService.map((service, index) => 
                                <ServiceItem service={service} key={index} />
                            )}
                        </ul>
                    </div>
                    <p>{room.roomSingle[2].additional}</p>
                </div>
                <RoomReview room={room} />
            </div>
        </div>
    
    );
};

export default Description;