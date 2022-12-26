import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import commonBg from "../../images/room.jpg";
import ConventionTemplate from './ConventionTemplate';
import { getConvention } from '../../services/data-service';

const ConventionElement = () => {
    const convention = getConvention();
    return (
        <>
            <PageHeader imageURL={commonBg} title={'Convention'} />
            <section className="relax-area">
               <div className="container">
                    <div className="relax-spa-main-grid">
                        {
                            convention.map( (convention, index) =>(
                                <ConventionTemplate convention={convention} key={index} />
                            ))
                        }
                        
                    </div>
                </div>
            </section>
        </>
    );
};

export default ConventionElement;