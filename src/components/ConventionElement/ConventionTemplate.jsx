/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
const ConventionTemplate = ({convention, setConventions}) => {
   
    return (
        <>
            <div className="relax-spa-inner-grid">
                <div className="relax-spa-img-left">
                    <img src={convention.image} alt="resort enjoy polls" />
                </div>
                <div className="relax-spa-img-content">
                    <h1>{convention.title}</h1>
                    <p>{convention.description}</p>
                    <label className="example-label common-btn" htmlFor="swimmin" onClick={() => setConventions(convention)}> 
                     <a>Book Now</a>
                    </label>
                </div>
            </div>
        </>
    );
};

export default ConventionTemplate;