import React from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import SuccessStatus from '../components/Payment/SuccessStatus';
import commonBg from "../images/room.webp";

const Success = () => {
    return (
        <div>
            <PageHeader imageURL={commonBg} title={''} />
            <SuccessStatus />
        </div>
    );
};

export default Success;