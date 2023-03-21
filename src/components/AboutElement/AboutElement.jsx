import React from 'react';
import SupportGiven from '../SupportGiven/SupportGiven';
import AboutStaff from './AboutStaff/AboutStaff';
import AboutStory from './AboutStory/AboutStory';

const AboutElement = () => {
    return (
        <>
          <AboutStory />
          <AboutStaff />
          <div className='abt-page-area'>
            <SupportGiven />
          </div>  
        </>
    );
};

export default AboutElement;