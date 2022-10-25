import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import commonBg from "../../images/room.jpg";
import EnjoyTemplate from './EnjoyTemplate';
import { getEnjoy } from '../../services/data-service';

const EnjoyElement = () => {
    const enjoy = getEnjoy();
    return (
        <>
            <PageHeader imageURL={commonBg} title={'Enjoy'} />
            <section className="relax-area">
               <div className="container">
                    <div className="relax-spa-main-grid">
                        {
                            enjoy.map( (enjoy, index) =>(
                                <EnjoyTemplate enjoy={enjoy} key={index} />
                            ))
                        }
                        
                    </div>
                </div>
            </section>
        </>
    );
};

export default EnjoyElement;