import React from "react";

import Header from "../Header/Header";

import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/* the best add */}
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in town</span>
        </div>

        {/* Hero headding  */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>
              in here we will help you to shape and build your ideadl body and
              live up your live to fulllest
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figure">
          <div>
            <span>+140</span>
            <span>expert coaching</span>
          </div>
          <div>
            <span>+987</span>
            <span>member joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness program </span>
          </div>
        </div>

        {/* herro button */}
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">right side</div>
    </div>
  );
};

export default Hero;
