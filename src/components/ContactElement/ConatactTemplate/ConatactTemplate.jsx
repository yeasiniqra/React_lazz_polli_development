import React from 'react';
import ContactAddress from './ContactAddress';
import ContactForm from './ContactForm';

const ConatactTemplate = () => {
    return (
        <>
        <section className="request-demo-area section-padding contact-us-area">
            <div className="container">
                <div className="reqest-demo-main-flex">
                    <ContactAddress />
                    <ContactForm />
                </div>
            </div>
        </section> 
        </>
    );
};

export default ConatactTemplate;