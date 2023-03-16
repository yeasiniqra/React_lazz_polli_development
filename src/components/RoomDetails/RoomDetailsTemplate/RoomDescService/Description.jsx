import React from 'react';
import RoomReview from '../RoomReview/RoomReview';
import ServiceItem from './ServiceItem';

const Description = ({room}) => {
    return (
        <div className="dts-right-content">
            <div className="dts-right-content-inner">
                <div className="room-detaits-main">
                    <h2>{room.Name}</h2>
                    <p>{room.RoomDescription}</p>
                    <div className="room-service-list">
                        <ul>
                            {
                            room.Facalities.map((service, index) => 
                                <ServiceItem service={service} key={index} />
                            )}
                        </ul>
                    </div>
                </div>
                <RoomReview room={room} />
            </div>
        </div>
    );
};

export default Description;