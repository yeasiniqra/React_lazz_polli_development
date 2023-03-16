import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import commonBg from "../../images/room.webp";
import ConventionTemplate from './ConventionTemplate';
import { getConvention } from '../../services/data-service';
import { useState } from 'react';
import ConventionMdl from '../Sheared/CommonModal/ConventionMdl';

const ConventionElement = () => {
    const convention = getConvention();
    const [conventions, setConventions] = useState(null)
    return (
        <>
            <PageHeader imageURL={commonBg} title={'Convention'} />
            <section className="relax-area">
               <div className="container">
                    <div className="relax-spa-main-grid">
                        {
                            convention.map( (convention) =>(
                                <ConventionTemplate 
                                convention={convention} 
                                key={convention.Id} 
                                setConventions={setConventions}
                                />
                            ))
                        }
                        {
                           conventions && 
                           <ConventionMdl 
                             setConventions={setConventions} 
                             conventions={conventions}
                           /> 
                        }    
                        
                    </div>
                </div>
            </section>
        </>
    );
};

export default ConventionElement;