import React from 'react';
import { getDineMenu } from '../../../services/data-service';
import BrackFastTemplate from './DineTemplate/BrackFastTemplate';

const BrackFast = () => {
    const serviceDineMenu = getDineMenu();
    return (
        <div id="Tab6" className="tabcontent">
            <div className="room-detaits-main">
                <div className="restue-inner-items">
                    <img src={serviceDineMenu[0].image} alt="img" />
                    <p>{serviceDineMenu[0].subTitle}</p>

                    {
                      serviceDineMenu[0].menuShedul.map((item, index) =>
                        <BrackFastTemplate item={item} key={index} />
                     ) 
                    }
                </div>
            </div>
    
        </div>
    );
};

export default BrackFast;