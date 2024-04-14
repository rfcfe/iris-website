import React, { useState } from "react";
import "./navbar.css";
import { nav } from "../../utils/index";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });
  const [isToggleIcon, setIsToggleIcon] = useState(false);
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const toggleMenu = () => {
    setIsToggleIcon(!isToggleIcon);
  };
  return (
    <nav className="nav">
      <div className="nav_container">
        <li>
          <Link to="/" onClick={handleClick}>
            {<img src="../images/logo.svg" alt="logo" width="50px" />}
          </Link>
        </li>
        <div className="nav_list">
          <ul
            className={`header-container-menu ${isToggleIcon ? "active" : ""}`}
          >
            {nav.map((link) => (
              <li key={link.id}>
                {link.text.split(" ").map((word, index) => (
                  <span className={"header-container-menu-item"} key={index}>
                    <Link to={link.url} onClick={toggleMenu}>
                      {word}
                    </Link>
                  </span>
                ))}
              </li>
            ))}
          </ul>
          <div className="header-toggle" onClick={toggleMenu}>
            {isToggleIcon ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
