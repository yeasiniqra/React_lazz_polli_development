import React from 'react';
import RoomReview from '../RoomReview/RoomReview';
import ServiceItem from './ServiceItem';

const Description = ({room}) => {
    return (
        <div className="dts-right-content">
            <div className="dts-right-content-inner">
                <div className="room-detaits-main">
                    <h2>{room.Name}</h2>
                    {/* <p>{room.roomSingle[1].description.length > 350 ? <>{room.roomSingle[1].description.slice(0, 350) + '...'} <small>Read More</small></> : room.roomSingle[1].description}</p> */}
                    <p>{room.RoomDescription}</p>
                    <div className="room-service-list">
                        {/* <h3>{room.roomSingle[1].subTitle}</h3> */}
                        <ul>
                            {
                            room.Facalities.map((service, index) => 
                                <ServiceItem service={service} key={index} />
                            )}
                        </ul>
                    </div>
                    {/* <p>{room.roomSingle[2].additional}</p> */}
                </div>
                <RoomReview />
            </div>
        </div>
    
    );
};

export default Description;