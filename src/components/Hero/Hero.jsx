import React, { useEffect, useState } from "react";
import "./Hero.css";
import heroImage from "../../assets/hero.jpg";
import heroImage2 from "../../assets/hero2.avif";
import waveSvg from "../../assets/wave-yellow.svg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [heroImage, heroImage2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000); // slides every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-background">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Hero background"
            className={`hero-image ${index === currentImage ? "active" : ""}`}
          />
        ))}
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-welcome">Welcome to</p>
          <h1 className="hero-title">GOLDEN RAFFLE LTD</h1>
          <p className="hero-description">
            The home of golden raffle prizes with winners from all over Scotland and across the UK!
            Make sure you follow us on social media for updates on the latest prize draws!
          </p>
          <button
            className="hero-button"
            onClick={() => (window.location.href = "/live-competition")}
          >
            Browse Competitions
          </button>
        </div>
      </div>

      <div className="hero-wave">
        <img src={waveSvg} alt="Wave" className="wave-image" />
      </div>
    </section>
  );
};

export default Hero;
