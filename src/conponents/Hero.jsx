import React from "react";
import hero from "../assets/hero.jpg";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section 
      className="hero"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Left Content */}
      <div className="hero-content">
        <span className="hero-label">NEW COLLECTION</span>
        
        <h1 className="hero-title">
          Timeless Style. <br />
          <span className="hero-subtitle">Made for You.</span>
        </h1>

        <p className="hero-description">
          Elegant Clothings made with premium materials and attention to every detail.
        </p>

        {/* Buttons */}
         <div className="hero-buttons">
          <Link to="/shop" className="btn btn-primary">
            SHOP NEW IN
          </Link>
          <Link to="/collections" className="btn btn-secondary">
            EXPLORE COLLECTION
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;