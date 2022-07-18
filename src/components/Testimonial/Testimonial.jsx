import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Testimonial.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const messageVariants = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
  },
};
const messageVariants2 = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
  },
};

const imageVariants = {
  hidden: {
    x: 20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
      ease: "easeOut",
    },
  },
};

const Testimonial = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className="Testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">what they</span>
        <span>say about us</span>
        <motion.span
          key={selected}
          variants={messageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {testimonialsData[selected].review}
        </motion.span>
        <motion.span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </motion.span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <motion.img
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          key={selected}
          src={testimonialsData[selected].image}
          alt=""
        />

        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() => {
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
