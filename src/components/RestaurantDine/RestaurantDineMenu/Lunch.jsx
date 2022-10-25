import React from 'react';
import { getDineMenu } from '../../../services/data-service';
import LunchTemplate from './DineTemplate/LunchTemplate';

const Lunch = () => {
    const serviceDineMenu = getDineMenu();
    return (
        <div id="Tab6" className="tabcontent">
        <div className="room-detaits-main">
            <div className="restue-inner-items">
                <img src={serviceDineMenu[1].image} alt="img" />
                <p>{serviceDineMenu[1].subTitle}</p>
                {
                  serviceDineMenu[1].menuShedul.map((item, index) =>
                   <LunchTemplate item={item} key={index} />
                 ) 
                }
            </div>
        </div>

    </div>
    );
};

export default Lunch;