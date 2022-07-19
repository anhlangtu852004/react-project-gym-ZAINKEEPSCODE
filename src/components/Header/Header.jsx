import React, { useState } from "react";
import "./Header.css";

import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
      {/* menu mobile */}
      {mobile == true && menuOpen === false ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => setMenuOpen(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu ">
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              {" "}
              Home
            </Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>Programs</li>
          <li onClick={() => setMenuOpen(false)}>Why us</li>
          <li onClick={() => setMenuOpen(false)}>Plans</li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="testimonials"
              spy={true}
              smooth={true}
              // offset={50}
              // duration={500}
            >
              Testimonial
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
