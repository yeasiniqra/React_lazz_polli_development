import React from 'react';

const AboutStoryTemplate = ({item}) => {
    return (
        <div className="ab-img-flex">
            <img src={item.image} alt="About" />
        </div>
 
    );
};

export default AboutStoryTemplate;