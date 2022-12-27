/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
const SwimmingPoolTemplate = ({pool, setSwimmin}) => {
    return (
        <div className="relax-spa-inner-grid">
            <div className="relax-spa-img-left">
                <img src={pool.image} alt="lazz pollli resort spa" />
            </div>
            <div className="relax-spa-img-content">
                <h1>{pool.title}</h1>
                <p>{pool.description}</p>
                <label className="example-label common-btn" htmlFor="swimmin" onClick={() => setSwimmin(pool)}> 
                     <a>Book Now</a>
                </label>
            </div>
        </div>
    );
};

export default SwimmingPoolTemplate;