import React from "react";
import "./Programs.css";

import RightArrow from "../../assets/rightArrow.png";

//import programDate trong thu muc data
import { programsData } from "../../data/programsData";

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/* header */}
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      <div className="program-categories">
        {programsData.map((program, i) => (
          <div className="category" key={i}>
            {program.image}
            <span> {program.heading} </span>
            <span> {program.details} </span>
            <div className="join-now">
              <span>Join now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
