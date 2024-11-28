"use client"

import React, { useState } from "react";
import styles from "./slideshow.module.css";

type SlideShowProps = {
  images: string[]; 
};

const SlideShow: React.FC<SlideShowProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.slideshow}>
      <div className={styles.slide}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button onClick={handlePrev} className={styles.prevButton}>
        Prev
      </button>
      <button onClick={handleNext} className={styles.nextButton}>
        Next
      </button>
      <div className={styles.indicators}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${
              index === currentIndex ? styles.active : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
