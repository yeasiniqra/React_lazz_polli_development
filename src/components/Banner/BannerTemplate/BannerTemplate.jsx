import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { imageURL, IMAGE_CATEGORY } from "../../../lib/galleryService";
import Suspense from "../../Sheared/Suspense/Suspense";

const BannerTemplate = ({ banner }) => {
  const { ImagePath, AltText, URL, BtnText, SubHeading, Heading } = banner;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = imageURL(IMAGE_CATEGORY.BANNER, ImagePath);
    image.addEventListener("load", handleImageLoad);
    image.addEventListener("error", handleImageError);
    return () => {
      image.removeEventListener("load", handleImageLoad);
      image.removeEventListener("error", handleImageError);
    };
  }, [ImagePath]);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleImageError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <div className="slide custom-splide">
      {loading && (
        <div className="loader">
          <Suspense />
        </div>
      )}
      {!loading && !error && (
        <img src={imageURL(IMAGE_CATEGORY.BANNER, ImagePath)} alt={AltText} />
      )}
      {error && (
        <div className="error">
          <span>Failed to load image</span>
        </div>
      )}
      <div className="banner-content-overly">
        <div className="banner-content">
          <h2>{Heading}</h2>
          <p>{SubHeading}</p>
          <div className="common-btn">
            <Link to={URL} tabIndex="-1">
              {BtnText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTemplate;
