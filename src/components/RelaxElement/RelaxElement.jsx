import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import commonBg from "../../images/room.jpg";
import RelaxTemplate from './RelaxTemplate';
import { getRelax } from '../../services/data-service';

const RelaxElement = () => {
    const relax = getRelax()
    return (
        <>
            <PageHeader imageURL={commonBg} title={'Relax'} />
            <section className="relax-area">
                <div className="container">
                    <div className="relax-spa-main-grid">
                        {
                            relax.map((relax, index) => (
                                <RelaxTemplate relax={relax} key={index} />
                            ))
                        }
                       
                    </div>
                </div>
            </section>    

        </>
    );
};

export default RelaxElement;