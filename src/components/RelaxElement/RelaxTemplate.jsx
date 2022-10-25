import React from 'react';

const RelaxTemplate = ({relax}) => {
    return (
        <div className="relax-spa-inner-grid">
            <div className="relax-spa-img-left">
                <img src={relax.image} alt="spa" />
            </div>
            <div className="relax-spa-img-content">
                <h1>{relax.title}</h1>
                <p>{relax.description}</p>
                <a className="g-btn" href={relax.btnLink}><i className="fa fa-camera" aria-hidden="true"></i>{relax.battonTitle}</a>
            </div>
        </div>
    );
};

export default RelaxTemplate;