import React from 'react';
import { getAboutStory } from '../../../services/data-service';
import AboutDescTemplate from './AboutDescTemplate';
import AboutStoryTemplate from './AboutStoryTemplate';

const AboutStory = () => {
    const aboutStory = getAboutStory();
    return (
        <section className="about-us-area">
        <div className="container custom-container">
            <div className="about-us-main-grid">
                <div className="about-let">
                    <div className="about-inner-content">
                        <div className="other-page-heading">
                            <h1><span>our resort </span>story</h1>
                        </div>
                        {
                            aboutStory[1].resortAbout.map((about, index) =>
                                <AboutDescTemplate about={about} key={index} />
                            )
                        }
                   </div>
            </div>
            <div className="about-right">
                   <div className="about-inner-img">
                       {
                        aboutStory[0].aboutImages.map((item, index) =>
                            <AboutStoryTemplate item={item} key={index} />
                            )
                       }
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default AboutStory;