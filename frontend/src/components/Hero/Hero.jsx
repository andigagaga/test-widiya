import React from "react";
import hand_icon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow.png";
import hero_image from "../../assets/hero_image.png";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img className="hero-icon" src={hand_icon} />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>New Collections</div>
          <img className="arrow-icon" src={arrow_icon} />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} />
      </div>
    </div>
  );
}
