import React from "react";

//import componest
import Header from "../Header/Header";

//import css
import "./Hero.css";

//import static file
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

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
      <div className="right-h">
        <button className="btn"> Join Now</button>
        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart rate</span>
          <span>116 bpm</span>
        </div>
        {/* hero imgae */}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image_back" />
      </div>
    </div>
  );
};

export default Hero;
