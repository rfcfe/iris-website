import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, A11y } from "swiper/modules";
import "./Swiper_one.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

register();

function Swiper_one() {
  const data = [
    {
      id: "1",
      image: "../images/casa1.png",
    },
    {
      id: "2",
      image: "../images/hammer.svg",
    },
    {
      id: "3",
      image: "../images/star.svg",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, A11y]}
      cssMode={true}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <img src={item.image} alt="slider" className="slide-item" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Swiper_one;
