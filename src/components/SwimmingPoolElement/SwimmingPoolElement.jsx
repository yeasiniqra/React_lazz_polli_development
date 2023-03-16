import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import commonBg from "../../images/room.webp";
import SwimmingPoolTemplate from './SwimmingPoolTemplate';
import { getSwimmingPool } from '../../services/data-service';
import { useState } from 'react';
import SwimmingMdl from '../Sheared/CommonModal/SwimmingMdl';

const SwimmingPoolElement = () => {
    const swimmingpool = getSwimmingPool()
    const [swimmin, setSwimmin] = useState(null)
    return (
        <>
            <PageHeader imageURL={commonBg} title={'Swimming Pool'} />
            <section className="relax-area">
                <div className="container">
                    <div className="relax-spa-main-grid">
                        {
                            swimmingpool.map((pool) => (
                                <SwimmingPoolTemplate pool={pool} key={pool.Id} setSwimmin={setSwimmin} />
                            ))
                        }
                       {
                         swimmin && 
                         <SwimmingMdl
                           setSwimmin={setSwimmin}
                           swimmin={swimmin}
                         />
                       }                       
                   </div>
                </div>
            </section>    
        </>
    );
};

export default SwimmingPoolElement;