import React from 'react';

const AboutDescTemplate = ({about}) => {
    return (
        <div className='single-dsc'>
            <p dangerouslySetInnerHTML={{__html: about.resortAboutDesc}}></p>
        </div>
    );
};

export default AboutDescTemplate;