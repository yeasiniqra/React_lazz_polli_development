import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import commonBg from "../../images/room.jpg";
import ConatactTemplate from './ConatactTemplate/ConatactTemplate';

const ContactElement = () => {
    const title = {
        subTitle : 'Whatever you want to know, we will be there.',
    }
    return (
        <>
         <PageHeader imageURL={commonBg} title={'Contact us'} />
         <section className="contact-search-area">
             <div className="container">
                 <div className="other-page-heading">
                     <h1><span>Contact Us </span>Here</h1>
                     <small>{title.subTitle}</small>
                 </div>
             </div>
         </section>
         <ConatactTemplate />   
        </>
    );
};

export default ContactElement;