import React from "react";
import { motion } from "framer-motion";
//import componest
import Header from "../Header/Header";

//import css
import "./Hero.css";

//import static file
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const theBestVariants = {
  start: {
    x: 220,
  },
  end: {
    x: 7,
    transition: {
      type: "tween",
      duration: 3,
    },
  },
};

const heartRateVariants = {
  start: {
    right: "-1rem",
  },
  end: {
    // x: "-50px",
    right: "4rem",
    transition: {
      type: "tween",
      duration: 3,
    },
  },
};
const caloriesVariants = {
  start: {
    x: "-1rem",
  },
  end: {
    // x: "-50px",
    x: "5rem",
    transition: {
      type: "tween",
      duration: 3,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best add */}
        <div className="the-best-ad">
          <motion.div
            variants={theBestVariants}
            initial="start"
            // animate="end"
            whileInView="end"
          ></motion.div>
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
        <motion.div
          className="heart-rate"
          variants={heartRateVariants}
          initial="start"
          whileInView="end"
        >
          <img src={Heart} alt="" />
          <span>Heart rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* hero imgae */}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image_back" />
        {/* hero calories */}
        <motion.div
          className="calories"
          variants={caloriesVariants}
          initial="start"
          // animate='end'
          whileInView="end"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories burn</span>
            <span>220 cal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
