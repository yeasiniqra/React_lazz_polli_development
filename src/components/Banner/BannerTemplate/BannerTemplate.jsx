import { Link } from "react-router-dom";
import { imageURL, IMAGE_CATEGORY } from "../../../lib/galleryService";

const BannerTemplate = ({banner}) => {
  const {ImagePath, AltText, URL, BtnText, SubHeading, Heading} = banner;

  return (
    <div className="slide custom-splide">
      <img src={imageURL(IMAGE_CATEGORY.BANNER,ImagePath)} alt={AltText} />
      <div className="banner-content-overly">
        <div className="banner-content">
          <h2>{Heading}</h2>
          <p>{SubHeading}</p>
          <div className="common-btn">
            <Link to={URL}  tabIndex="-1">
              {BtnText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTemplate;
