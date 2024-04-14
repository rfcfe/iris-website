import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, A11y } from "swiper/modules";
import "./Swiper_one.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import Overlay from "./Overlay";

register();

function Swiper_one() {
  const data = [
    {
      id: "1",
      image: "../images/casa1.png",
      title: "Teste titlo",
      text: "aaaa",
      button1Label:"carrega1",
      button2Label:"carrega2",
    },
    {
      id: "2",
      image: "../images/Cozinha1.jpg",
      title: "Teste titlo",
      text: "aaaa",
      button1Label:"carrega1",
      button2Label:"carrega2",
    },
    {
      id: "3",
      image: "../images/Casa2.jpg",
      title: "Teste titlo",
      text: "aaaa",
      button1Label:"carrega1",
      button2Label:"carrega2",
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
        delay: 7000,
        disableOnInteraction: false,
      }}
    >
      {data.map((item) => (
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
