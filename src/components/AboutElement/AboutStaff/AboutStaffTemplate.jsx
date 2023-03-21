import React from 'react';

const AboutStaffTemplate = ({staff}) => {
    return (
        <div className="staff-single-item">
            <img src={staff.image} alt="img" />
            <div className="stf-content">
                <h4>{staff.dirTitle}</h4>
                <span>{staff.dirSubTitle}</span>
            </div>
         </div>
    );
};

export default AboutStaffTemplate;