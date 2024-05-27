import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./Swiper_two.css";

function Swiper_two({ photos, id, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(id);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    setCurrentIndex(id);
  }, [id]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < photos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="page" onClick={onClose}>
      <div className="swiper-container" onClick={stopPropagation}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="img-container">
              <img
                src={photos[currentIndex]}
                alt={`Photo ${currentIndex}`}
                className="swiper-img"
              />
            </div>
          </div>
        </div>
        <button
          className="prev-button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <IoIosArrowBack size={40} />
        </button>
        <button
          className="next-button"
          onClick={handleNext}
          disabled={currentIndex === photos.length - 1}
        >
          <IoIosArrowForward size={40} />
        </button>
      </div>
    </div>
  );
}

export default Swiper_two;
