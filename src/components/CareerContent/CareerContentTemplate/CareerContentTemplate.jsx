import React from 'react';
import career from '../../../images/career.jpg' 
import OppertunityTem from './OppertunityTem';

const CareerContentTemplate = () => {
    const careerContent = {
        title : 'Are you Dedicated, Hardworking and Fun? Join Us!',
        subTitle : 'We believe in those people who are passionate about their work and feel the joy of working. We are always welcome and eagerly waiting for you.'
    }

    const {title, subTitle} = careerContent;
    return (
        <>
        <section className="career-page-area">
            <div className="container">
                <div className="drop-cv-main">
                    <div className="drop-cv-left">
                        <h3>{title}</h3>
                        <span>{subTitle}</span>

                        <div className="career-form">
                            <form id="resume-form">
                                <div className="custom-inputs">
                                    <input name="resume" type="file" className="custom-file-input" id="customFileLangHTML resume" />
                                    <label className="custom-file-label" htmlFor="customFileLangHTML" data-browse="Bestand kiezen"></label><label></label>
                                    <button type="submit">
                                        Send
                                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="drop-cv-right">
                        <img src={career} alt="career Images" />
                    </div>
                </div>
            </div>
     </section>
     <OppertunityTem />   
    </>
    );
};

export default CareerContentTemplate;