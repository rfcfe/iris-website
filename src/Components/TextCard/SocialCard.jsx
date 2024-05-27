import React from "react";
import "./SocialCard.css";

function SocialCard() {
  const companyInfo = {
    phone: "+351 917 077 799",
    license: "12345",
    emails: ["irisamarelo@gmail.com", "irisfatimaferreira@gmail.com"],
    responsiblePersons: ["Rui Ferreira", "Fátima Ferreira"],
    address: "Praceta das camélias, Abóboda, Cascais",
    vatNumber: "PT123456789",
  };

  return (
    <div className="company-info-card">
      <h2>Company Information</h2>
      <p>
        <strong>Phone:</strong> {companyInfo.phone}
      </p>
      <p>
        <strong>Alvará:</strong> {companyInfo.license}
      </p>
      <p>
        <strong>Emails:</strong>
      </p>
      <ul>
        {companyInfo.emails.map((email, index) => (
          <li key={index}>{email}</li>
        ))}
      </ul>
      <p>
        <strong>Pessoas Responsáveis:</strong>
      </p>
      <ul>
        {companyInfo.responsiblePersons.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
      <p>
        <strong>Morada:</strong> {companyInfo.address}
      </p>
    </div>
  );
}

export default SocialCard;
