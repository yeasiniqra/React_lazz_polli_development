import React from 'react';
import { Link } from "react-router-dom";


const FindHroomTemplate = ({FindHroom}) => {
    return (
      <>
        <section className="booking-room-area">
            <div className="container">
                <div className="booking-room-main">
                    <div className="row">
                    <div className="col-md-5">
                            <div className="grid">
                                <figure className="effect-layla">
                                    <img src={FindHroom[1].image} alt="lazz polli" />
                                    <figcaption>
                                        <h3>{FindHroom[1].topHeading} </h3>
                                        
                                        <h6 className="find-more"><Link to={FindHroom[1].link}>{FindHroom[1].topBtn} </Link></h6>
                                        <h2><span>{FindHroom[1].btmHeading} </span></h2>
                                        <p>{FindHroom[1].description} </p>
                                        <Link to={FindHroom[1].link}>{FindHroom[1].bottomBtn} </Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="grid">
                                <figure className="effect-layla">
                                    <img src={FindHroom[0].image} alt="lazz polli" />
                                    <figcaption>
                                        <h3>{FindHroom[0].topHeading} </h3>
                                        <h6 className="find-more"><Link to={FindHroom[0].link}>{FindHroom[0].topBtn} </Link></h6>
                                        <h2><span>{FindHroom[0].btmHeading} </span></h2>
                                        <p>{FindHroom[0].description} </p>
                                        <Link to={FindHroom[0].link}>{FindHroom[0].bottomBtn} </Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="row custom-rows">
                        <div className="col-md-7">
                            <div className="grid">
                                <figure className="effect-layla">
                                    <img src={FindHroom[3].image} alt="lazz polli" />
                                    <figcaption>
                                        <h3>{FindHroom[3].topHeading} </h3>
                                        <h6 className="find-more"><Link to={FindHroom[3].link}>{FindHroom[3].topBtn} </Link></h6>
                                        <h2><span>{FindHroom[3].btmHeading} </span></h2>
                                        <p>{FindHroom[3].description} </p>
                                        <Link to={FindHroom[3].link}>{FindHroom[3].bottomBtn} </Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="grid">
                                <figure className="effect-layla">
                                    <img src={FindHroom[2].image} alt="lazz polli" />
                                    <figcaption>
                                        <h3>{FindHroom[2].topHeading} </h3>
                                        <h6 className="find-more"><Link to={FindHroom[2].link}>{FindHroom[2].topBtn} </Link></h6>
                                        <h2><span>{FindHroom[2].btmHeading} </span></h2>
                                        <p>{FindHroom[2].description} </p>
                                        <Link to={FindHroom[2].link}>{FindHroom[2].bottomBtn} </Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-5x">
                            <div className="grid">
                                <figure className="effect-layla">
                                    <img src={FindHroom[4].image} alt="lazz polli" />
                                    <figcaption>
                                        <h3>{FindHroom[4].topHeading} </h3>
                                        <h6 className="find-more"><Link to={FindHroom[4].link}>{FindHroom[4].topBtn} </Link></h6>
                                        <h2><span>{FindHroom[4].btmHeading} </span></h2>
                                        <p>{FindHroom[4].description} </p>
                                        <Link to={FindHroom[4].link}>{FindHroom[4].bottomBtn} </Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
};

export default FindHroomTemplate;