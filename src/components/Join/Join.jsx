import React from "react";
import { useRef } from "react";
import "./Join.css";
const Join = () => {
  const form = useRef();
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">readt to</span>
          <span> level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="stroke-text"> with us</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} action="" className="email-container">
          <input
            type="email"
            name="user_email"
            placeholder="enter your email to address"
          />
          <button className="btn btn-j">Join now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
