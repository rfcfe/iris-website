import React, { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, A11y } from "swiper/modules";
import "./Swiper_two.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

register();

function Swiper_two({ photos, id, onClose }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="page" onClick={onClose}>
        <div
          className="swiper-container"
          ref={swiperRef}
          onClick={stopPropagation}
        >
          <Swiper
            initialSlide={id}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
          >
            {photos.map((photo, index) => (
              <SwiperSlide key={index}>
                <div className="img-container">
                  <img
                    src={photo}
                    alt={`Photo ${index}`}
                    className="swiper-two-img"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Swiper_two;
