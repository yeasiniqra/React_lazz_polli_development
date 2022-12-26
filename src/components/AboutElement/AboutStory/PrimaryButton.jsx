import React from 'react';

const PrimaryButton = ({children, link}) => {
    return (
        <div className='flex justify-content-between align-item-center align-self-center'>
            <a target='_blank' href={link} rel="noreferrer">{children}</a>
        </div>
    );
};

export default PrimaryButton;