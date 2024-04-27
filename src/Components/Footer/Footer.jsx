import React from "react";
import {
  FOOTER_LINKS,
  FOOTER_CONTACT_INFO,
  SERVICES,
  SOCIALS,
} from "../../utils/data";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-layout">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="/">
              <img src="../images/logo.svg" alt="logo" width={74} height={29} />
            </a>
          </div>

          <div className="footer-links">
            {FOOTER_LINKS.map((columns, index) => (
              <div className="footer-column" key={index}>
                <h4 className="footer-column-title">{columns.title}</h4>
                <ul className="footer-column-links">
                  {columns.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.site} className="footer-link">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="footer-column">
              <h4 className="footer-column-title">
                {FOOTER_CONTACT_INFO.title}
              </h4>
              <ul className="footer-column-links">
                {FOOTER_CONTACT_INFO.links.map((link, index) => (
                  <li key={index}>
                    <a href="/" className="footer-link">
                      <span className="footer-label">{link.label}:</span>
                      <span className="footer-value">{link.value}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title">{SOCIALS.title}</h4>
              <ul className="footer-column-links footer-social-links">
                {SOCIALS.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.site}>
                      <img
                        src={link.image}
                        alt="logo"
                        className="footer-social-icon"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-border"></div>
        <p className="footer-text">2024 Iris Amarelo | All rights reserved</p>
      </div>
    </footer>
  );
}
export default Footer;
