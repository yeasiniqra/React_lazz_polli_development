import React from 'react';
import currentImg from '../../../images/empty1.png';

const OppertunityTem = () => {
    const oppertuniteContent = {
        title : ' We are Sorry! There is no job available right at this moment.'
    }
    return (
        <section className="oppertunites-area">
            <div className="container">
                <div className="other-page-heading">
                    <h1><span>Current </span>Opportunities</h1>
                </div>

                <div className="current-oppertunity-empty-content">
                <img src={currentImg} alt="career Images" />
                <span>{oppertuniteContent.title}</span>
            </div>
            </div>
      </section>
    );
};

export default OppertunityTem;