import React from 'react';
import { getResortDirector } from '../../../services/data-service';
import AboutStaffTemplate from './AboutStaffTemplate';

const AboutStaff = () => {
    const resortDirector = getResortDirector();
    return (
        <section className="our-resort-staff-area our-service-area">
            <div className="container">
                <div className="other-page-heading">
                   <h1><span>Our Resort </span>Directors</h1>
                </div>

                <div className="staff-main-grid">
                  {
                    resortDirector.map( (staff, index) =>
                        <AboutStaffTemplate staff={staff} key={index} />
                    )
                  }
               </div>    
            </div>
        </section>
    );
};

export default AboutStaff;