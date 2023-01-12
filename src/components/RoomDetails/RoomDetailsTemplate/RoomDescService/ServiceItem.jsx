import React from 'react';

const ServiceItem = ({service}) => {
    return (
        <>
            {
                service.Name &&
                <li>{service.Name}</li>
            }
           
        </>
    );
};

export default ServiceItem;