import React from 'react';
import { Link } from "react-router-dom";
import { imageURL, IMAGE_CATEGORY } from '../../../lib/galleryService';

const FindHroomTemplate = ({menuIamge}) => {
    return (
      <>
        <section className="booking-room-area">
            <div className="container">
                <div className="booking-room-main">
                  <div className="row">
                       <div className="col-md-5x col-md-5xl">
                            <div className="grid">
                                <figure className="effect-layla">
                                    <img src={imageURL(IMAGE_CATEGORY.MENU_IMAGE,menuIamge[0].Slot === "100%" ? menuIamge[0].ImagePath : "")} alt="resort full pakage price in bangladesh" />
                                    <figcaption>
                                        <h3 className='room-hide-border'>{menuIamge[0].TitleText} </h3>
                                        <h6 className="find-more"><Link to={menuIamge[0].DetailUrl}>View More</Link></h6>
                                        <h2><span>{menuIamge[0].TitleText} </span></h2>
                                        <p className='mobile-desc'>{menuIamge[0].Description} </p>
                                        <Link to={menuIamge[0].DetailUrl}>View More</Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>

                    <div className="row custom-rows">
                        <div className="col-md-7">
                            <div className="grid">
                                <figure className="effect-layla">
                                <img src={imageURL(IMAGE_CATEGORY.MENU_IMAGE,menuIamge[1].Slot === "70%" ? menuIamge[1].ImagePath : "")} alt="resort full pakage price in bangladesh" />
                                    <figcaption>
                                        <h3 className='room-hide-border'>{menuIamge[1].TitleText} </h3>
                                        <h6 className="find-more"><Link to={menuIamge[1].DetailUrl}>View More</Link></h6>
                                        <h2><span>{menuIamge[1].TitleText} </span></h2>
                                        <p>{menuIamge[1].Description} </p>
                                        <Link to={menuIamge[1].DetailUrl}>View More</Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="grid">
                                <figure className="effect-layla">
                                <img src={imageURL(IMAGE_CATEGORY.MENU_IMAGE,menuIamge[2].Slot === "30%" ? menuIamge[2].ImagePath : "")} alt="resort full pakage price in bangladesh" />
                                    <figcaption>
                                        <h3>{menuIamge[2].TitleText} </h3>
                                        <h6 className="find-more"><Link to={menuIamge[2].DetailUrl}>View More</Link></h6>
                                        <h2><span>{menuIamge[2].TitleText} </span></h2>
                                        <p>{menuIamge[2].Description} </p>
                                        <Link to={menuIamge[2].DetailUrl}>View More </Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                       <div className="col-md-5x">
                            <div className="grid">
                                <figure className="effect-layla">
                                <img src={imageURL(IMAGE_CATEGORY.MENU_IMAGE,menuIamge[3].Slot === "100%" ? menuIamge[3].ImagePath : "")} alt="resort full pakage price in bangladesh" />
                                    <figcaption>
                                        <h3 className='room-hide-border'>{menuIamge[3].TitleText} </h3>
                                        
                                        <h6 className="find-more"><Link to={menuIamge[3].DetailUrl}>View More</Link></h6>
                                        <h2><span>{menuIamge[3].TitleText} </span></h2>
                                        <p>{menuIamge[3].Description} </p>
                                        <Link to={menuIamge[3].DetailUrl}>View More</Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                       <div className="col-md-5x">
                            <div className="grid">
                                <figure className="effect-layla">
                                <img src={imageURL(IMAGE_CATEGORY.MENU_IMAGE,menuIamge[4].Slot === "100%" ? menuIamge[4].ImagePath : "")} alt="resort full pakage price in bangladesh" />
                                    <figcaption>
                                        <h3 className='room-hide-border'>{menuIamge[4].TitleText} </h3>
                                        <h6 className="find-more"><Link to={menuIamge[4].DetailUrl}>View More</Link></h6>
                                        <h2><span>{menuIamge[4].TitleText} </span></h2>
                                        <p className='mobile-desc'>{menuIamge[4].Description} </p>
                                        <Link to={menuIamge[4].DetailUrl}>View More </Link>
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