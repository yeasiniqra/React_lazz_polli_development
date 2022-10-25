import React from 'react';
import { getDineMenu } from '../../../services/data-service';
import DinnerTemplate from './DineTemplate/DinnerTemplate';

const Dinner = () => {
    const serviceDineMenu = getDineMenu();
    return (
        <div id="Tab6" className="tabcontent">
            <div className="room-detaits-main">
                <div className="restue-inner-items">
                    <img src={serviceDineMenu[2].image} alt="img" />
                    <p>{serviceDineMenu[2].subTitle}</p>
                    {
                    serviceDineMenu[2].menuShedul.map((item, index) =>
                       <DinnerTemplate item={item} key={index} />
                    ) 
                    }
                </div>
            </div>
        </div>
    );
};

export default Dinner;