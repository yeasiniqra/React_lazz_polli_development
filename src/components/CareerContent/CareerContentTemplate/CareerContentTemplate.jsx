import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import career from '../../../images/career.jpg' 
import { POST_RESUME } from '../../../lib/endpoints';
import http, { sendResume } from '../../../services/http-service-v2';
import Suspense from '../../Sheared/Suspense/Suspense';
import OppertunityTem from './OppertunityTem';

const CareerContentTemplate = () => {
    const [isLoading, setIsLoading] = useState(false);
    const careerContent = {
        title : 'Are you Dedicated, Hardworking and Fun? Join Us!',
        subTitle : 'We believe in those people who are passionate about their work and feel the joy of working. We are always welcome and eagerly waiting for you.',
    }

    const {title, subTitle} = careerContent;



    const submitHandler2 = (e) => {
        e.preventDefault();
        const form = e.target;
        const file = form.file.files[0];

        const formData = new FormData();
        formData.append("payload", file)

        sendResume(formData).then(data => {
            toast.success("We appreciate your interest, building your carrer with us.");
        }).catch(err => {
            toast.error(err || "Something is wrong, Please try again.");
        });
    }

    // const [file, setFile] = useState('')
    const submitHandler = (e) => {
        e.preventDefault();
        setIsLoading(true)

        const form = e.target;
        const file = form.file.files[0];
        console.log(file);
        // setFile(file)

        const formData = new FormData();
        formData.append("payload", file)
        // for (const [key, value] of Object.entries(payload)) {
        //   formData.append(key, value);
        // }

        // const payload = {
        //     file
        // }

        http.file(({url: POST_RESUME, formData}))
        .then(data => {
            console.log(data)
            if(data.IsError){
              toast.warning(data.Msg);
            } else {
              toast.success("Message Sent");
            }
          }).catch(err => {
            toast.warning(err?.toString());
          }).finally(() => {
            setIsLoading(false)
          })
    }

  

    return (
        <div>
            <section className="career-page-area">
                <div className="container">
                    <div className="drop-cv-main">
                        <div className="drop-cv-left">
                            <h3>{title}</h3>
                            <span>{subTitle}</span>
                                <div className="career-form">
                                <form onSubmit={submitHandler2} id="resume-form">
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
                            {isLoading && <Suspense />}
                        </div>
                        <div className="drop-cv-right">
                            <img src={career} alt="number one resort in bangladesh" />
                        </div>
                    </div>
                </div>              
            </section>
          <OppertunityTem />   
        </div>

    );
};

export default CareerContentTemplate;