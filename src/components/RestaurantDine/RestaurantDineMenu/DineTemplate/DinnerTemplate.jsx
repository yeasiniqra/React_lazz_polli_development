import React from 'react';

const DinnerTemplate = ({item}) => {
    return (
        <div className="menu-item-shedul">
            <div className="bold-items-single">
                <h6>{item.title}</h6>
                <p>{item.description}</p>
            </div>
            <span>&#x9F3;{item.amount}</span>
        </div>
    );
};

export default DinnerTemplate;