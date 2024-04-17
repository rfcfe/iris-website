import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, A11y } from "swiper/modules";
import { SWIPER_DATA } from "../../utils/data";
import "./Swiper_one.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import Overlay from "./Overlay";

register();

function Swiper_one() {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      cssMode={true}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      simulateTouch={false}
    >
      {SWIPER_DATA.map((item) => (
        <SwiperSlide key={item.id}>
          <img src={item.image} alt="slider" className="slide-item" />
          <Overlay
            title={item.title}
            text={item.text}
            button1Label={item.button1Label}
            button2Label={item.button2Label}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Swiper_one;
