import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import career from '../../../images/career.jpg' 
import { POST_RESUME } from '../../../lib/endpoints';
import http from '../../../services/http-service-v2';
import Suspense from '../../Sheared/Suspense/Suspense';
import OppertunityTem from './OppertunityTem';

const CareerContentTemplate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState()

  const careerContent = {
    title : 'Are you Dedicated, Hardworking and Fun? Join Us!',
    subTitle : 'We believe in those people who are passionate about their work and feel the joy of working. We are always welcome and eagerly waiting for you.',
  }

  const {title, subTitle} = careerContent;

  // const handleChange = (event) => {
  //   setFile(event.target.files[0])
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   setIsLoading(true)

  //   const formData = new FormData()
  //   formData.append('file', file)
  //   formData.append('fileName', file.name)

  //   http.file({ url: POST_RESUME, payload: formData })
  //     .then(data => {
  //       if(data.IsError) {
  //         toast.warning(data.Msg)
  //       } else {
  //         toast.success('Message Sent')
  //       }
  //     })
  //     .catch(err => {
  //       toast.warning(err?.toString())
  //     })
  //     .finally(() => {
  //       setIsLoading(false)
  //     })
  // }

  return (
    <div>
      <section className="career-page-area">
        <div className="container">
          <div className="drop-cv-main">
            <div className="drop-cv-left">
              <h3>{title}</h3>
              <span>{subTitle}</span>
              <div className="career-form">
                <form id="resume-form" encType="multipart/form-data">
                  <div className="custom-inputs">
                    <input name='file' type="file" />
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
