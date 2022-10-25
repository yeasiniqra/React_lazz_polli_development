import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from './Gallery.module.css'

const GalleryPreview = ({ show, onClose, images = [], start }) => {
  const options = {
    rewind: true,
    type: "fade",
    autoplay: false,
    rewindSpeed: 1000,
    speed: 500,
    pauseOnHover: false,
    fixedWidth: "100%",
    fixedHeight: "auto",
    start
  };

  if (!show) return <></>;
  return (
    <div className={styles.backDrop}>
      <div className={styles.modal} id="modal-one">
         <div className={`${styles["modal-bg"]} ${styles["modal-exit"]}`}></div>
            <div className={styles.galleryPreviewss}>
                <div className={`${styles["modal-container"]}` }>
                    <Splide options={options} aria-label="React Splide Example">
                        {images.map((image, index) => (
                        <SplideSlide key={index}>
                            <img
                               className="gallery__Image"
                               src={image}
                               alt="b1.png"
                            />
                        </SplideSlide>
                        ))}
                    </Splide>
                </div>
           </div>
      </div>
      <button
            className={`${styles["modal-close"]} ${styles["modal-exit"]}`}
            onClick={onClose}
          >
          ×
           
      </button>
    </div>
  );
};

export default GalleryPreview;
