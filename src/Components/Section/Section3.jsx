import React, { useEffect, useRef, useState } from "react";
import CardCollection from "../Cards/CardCollection";
import { SECTION3_DATA } from "../../utils/data";

function Section3() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!isVisible && entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section className="section3" ref={sectionRef}>
      <h1 className={`section3-title ${isVisible ? "active" : ""}`}>
        Serviços
      </h1>
      <div className={`title-line3 ${isVisible ? "active" : ""}`}></div>
      <div
        className={`section3-cardcollection ${isVisible ? "active" : ""}`}
      ></div>
      <CardCollection items={SECTION3_DATA} />
    </section>
  );
}

export default Section3;
