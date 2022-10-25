import React from 'react';
import { getBestService } from '../../../services/data-service';
import AboutServiceTemplate from './AboutServiceTemplate';


const AboutService = () => {
    const bestService = getBestService();
    return (
        <section className="our-service-area">
        <div className="container">
           <div className="other-page-heading">
               <h1><span>Our Best Services </span>For You</h1>
            </div>
            <div className="service-single-item-grid">
               {
                bestService.map( (item, index) =>
                  <AboutServiceTemplate item={item} key={index} />
                )
               }
            </div>
        </div>
    </section>
    );
};

export default AboutService;