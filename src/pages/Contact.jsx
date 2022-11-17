import React from 'react';
import ContactElement from '../components/ContactElement/ContactElement';
import { useTitle } from '../hooks/UseTitle';

const Contact = () => {
    useTitle('Contact')
    return (
        <>
            <ContactElement />
        </>
    );
};

export default Contact;