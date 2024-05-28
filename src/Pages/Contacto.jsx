import React from "react";
import ContactForm from "../Components/Form/ContactForm";
import SocialCard from "../Components/TextCard/SocialCard";

function Contacto() {
  return (
    <div className="contact-container">
      <div className="contact-item">
        <SocialCard />
      </div>
      <div className="contact-item">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contacto;
