/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useContext } from 'react';
import authContext from '../../store/auth-context';

const SwimmingPoolTemplate = ({pool, setSwimmin}) => {
    const { open } = useContext(authContext);
    const modlClickHandler = () => {
        open('SPOOL');
    } 
    return (
        <div className="relax-spa-inner-grid">
            <div className="relax-spa-img-left">
                <img src={pool.image} alt="lazz pollli resort spa" />
            </div>
            <div className="relax-spa-img-content">
                <h1>{pool.title}</h1>
                <p>{pool.description}</p>
                <div className="common-btn" onClick={() => modlClickHandler()}>
                    <a onClick={() => setSwimmin(pool)}>Book Now</a>
                </div>
            </div>
        </div>
    );
};

export default SwimmingPoolTemplate;