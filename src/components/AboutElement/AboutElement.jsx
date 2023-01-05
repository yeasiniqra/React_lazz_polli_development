import React from 'react';
import SupportGiven from '../SupportGiven/SupportGiven';
// import AboutService from './AboutService/AboutService';

import AboutStory from './AboutStory/AboutStory';

const AboutElement = () => {
    return (
        <>
          <AboutStory />
          {/* <AboutService /> */}
         
          <div className='abt-page-area'>
            <SupportGiven />
          </div> 
            
        </>
    );
};

export default AboutElement;