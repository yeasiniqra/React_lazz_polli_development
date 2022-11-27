import React from 'react';
import { useState } from 'react';
import career from '../../../images/career.jpg' 
import OppertunityTem from './OppertunityTem';

const CareerContentTemplate = () => {
    // start dark mode toggle function
    const [button, setButton] = useState('Dark Mode');
    const [style, setStyle] = useState({
        color:'black',
        backgroundColor:'white'
    })

    const handlemode = (event) => {
        if (button === 'Dark Mode') {
            setButton(`light Mode`);
            setStyle({
                color:'white',
                backgroundColor:'black'
            })
        }
        else {
            setButton('Dark Mode');
            setStyle({
                color:'black',
                backgroundColor:'white'
            })
        }
    }
  // End dark mode toggle function

    const careerContent = {
        title : 'Are you Dedicated, Hardworking and Fun? Join Us!',
        subTitle : 'We believe in those people who are passionate about their work and feel the joy of working. We are always welcome and eagerly waiting for you.'
    }

    const {title, subTitle} = careerContent;


    const [file, setFile] = useState('')
    const submitHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const file = form.file.value;
        setFile(file)
        // console.log(file)
    }

    console.log(file)

    return (
        <div>
            <section className="career-page-area">
                <div className="container">
                    <div style={style} className="drop-cv-main">
                        <div className="drop-cv-left">
                            <h3 style={style}>{title}</h3>
                            <span style={style}>{subTitle}</span>

                            <div className="career-form">
                                <form onSubmit={submitHandler} id="resume-form">
                                    <div className="custom-inputs">
                                        <input name="file" type="file" className="custom-file-input" id="customFileLangHTML resume" />
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
                            <img style={style} src={career} alt="number one resort in bangladesh" />
                        </div>
                    </div>
                    <button style={style} onClick={handlemode}>{button}</button>
                </div>

               
            </section>
          <OppertunityTem />   
        </div>

    );
};

export default CareerContentTemplate;