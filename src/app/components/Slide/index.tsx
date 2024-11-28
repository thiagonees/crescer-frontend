"use client";

import React, { useState, useEffect } from "react";
import styles from "./slideshow.module.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

type SlideShowProps = {
  images: string[]; 
};

const SlideShow: React.FC<SlideShowProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };


  const handleNext = () => {
    nextSlide();
  };


  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); 
    return () => clearInterval(interval); 
  }, [currentIndex]);

  return (
    <div className={styles.slideshow}>
      <div className={styles.slide}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button onClick={handlePrev} className={styles.prevButton}>
      <FiArrowLeft size={24} />
      </button>
      <button onClick={handleNext} className={styles.nextButton}>
      <FiArrowRight size={24} />
      </button>
      
    </div>
  );
};

export default SlideShow;
