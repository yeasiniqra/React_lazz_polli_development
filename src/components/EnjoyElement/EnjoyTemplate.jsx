import React from 'react';

const EnjoyTemplate = ({enjoy}) => {
    return (
        <>
            <div className="relax-spa-inner-grid">
                <div className="relax-spa-img-left">
                    <img src={enjoy.image} alt="spa" />
                </div>
                <div className="relax-spa-img-content">
                    <h1>{enjoy.title}</h1>
                    <p>{enjoy.description}</p>
                    <a className="g-btn" href={enjoy.btnLink}><i className="fa fa-camera" aria-hidden="true"></i>{enjoy.battonTitle}</a>
                </div>
            </div>
        </>
    );
};

export default EnjoyTemplate;