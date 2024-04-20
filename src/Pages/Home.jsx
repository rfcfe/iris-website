import React from "react";
import Swiper_one from "../Components/Swiper/Swiper_one";
import Section1 from "../Components/Section/Section1";
import Section2 from "../Components/Section/Section2";
import CardCollection from "../Components/Cards/CardCollection";

function Home() {
  return (
    <>
      <Swiper_one />
      <Section1 />
      <Section2 />
      <CardCollection />
    </>
  );
}

export default Home;
