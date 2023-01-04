import React from 'react';

const ServiceItem = ({service}) => {
    return (
        <>
            {
                service.serviceTitle &&
                <li>{service.serviceTitle}</li>
            }
           
        </>
    );
};

export default ServiceItem;