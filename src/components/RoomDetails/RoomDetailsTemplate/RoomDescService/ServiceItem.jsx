import React from 'react';

const ServiceItem = ({service}) => {
    return (
        <>
            <li>{service.serviceTitle}</li>
        </>
    );
};

export default ServiceItem;