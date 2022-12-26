/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useContext } from 'react';
import authContext from '../../store/auth-context';

const ConventionTemplate = ({convention}) => {
    const { open } = useContext(authContext);
    const modlClickHandler = () => {
        open('CMODAL');
    } 
    return (
        <>
            <div className="relax-spa-inner-grid">
                <div className="relax-spa-img-left">
                    <img src={convention.image} alt="resort enjoy polls" />
                </div>
                <div className="relax-spa-img-content">
                    <h1>{convention.title}</h1>
                    <p>{convention.description}</p>
                    <div className="common-btn"><a onClick={modlClickHandler}>Book Now</a></div>
                </div>
            </div>
        </>
    );
};

export default ConventionTemplate;