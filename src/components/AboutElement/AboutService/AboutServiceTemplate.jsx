import React from 'react';

const AboutServiceTemplate = ({item}) => {
    return (
        <div className="service-single-item">
            <div className="ser-icon">
                <i className="fa fa-cogs" aria-hidden="true"></i>
            </div>
            <h3>{item.serviceName}</h3>
            <p>{item.serviceDesc}</p>
         </div>
    );
};

export default AboutServiceTemplate;