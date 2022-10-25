import { Link } from "react-router-dom";

const BannerTemplate = ({banner}) => {

  return (
    <div className="slide custom-splide">
      <img src={banner.image} alt="banner" />
      <div className="banner-content-overly">
        <div className="banner-content">
          <h2>{banner.heading}</h2>
          <p>{banner.subHeading}</p>
          <div className="common-btn">
            <Link to={banner.link}  tabIndex="-1">
              {banner.btnText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTemplate;
