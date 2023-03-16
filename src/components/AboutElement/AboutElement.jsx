import React from 'react';
import SupportGiven from '../SupportGiven/SupportGiven';
import AboutStory from './AboutStory/AboutStory';

const AboutElement = () => {
    return (
        <>
          <AboutStory />
          <div className='abt-page-area'>
            <SupportGiven />
          </div>  
        </>
    );
};

export default AboutElement;