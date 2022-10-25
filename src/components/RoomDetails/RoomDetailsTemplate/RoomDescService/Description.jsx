import React from 'react';
import ServiceItem from './ServiceItem';

const Description = ({room}) => {
    return (
        <div className="dts-right-content">
            <div className="dts-right-content-inner">
                <div className="room-detaits-main">
                    <h2>{room.roomSingle[1].title}</h2>
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
                </div>
            </div>
        </div>
    
    );
};

export default Description;