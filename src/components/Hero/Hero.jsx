import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Hero.css";
import heroImage from "../../assets/hero.jpg";
import heroImage2 from "../../assets/hero2.avif";
import waveSvg from "../../assets/wave-yellow.svg";

const Hero = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const touchStartXRef = useRef(null);
  const touchDeltaXRef = useRef(0);

  // Define slides with per-slide text content
  const slides = useMemo(
    () => [
      {
        image: heroImage,
        welcome: "Welcome to",
        title: "GOLDEN RAFFLE LTD",
        description:
          "The home of golden raffle prizes with winners from all over Scotland and across the UK! Make sure you follow us on social media for updates on the latest prize draws!",
        buttonText: "Browse Competitions",
        buttonHref: "/live-competition",
      },
      {
        image: heroImage2,
        welcome: "Welcome to",
        title: "GOLDEN RAFFLE LTD",
        description:
          "The home of golden raffle prizes with winners from all over Scotland and across the UK! Make sure you follow us on social media for updates on the latest prize draws!",
        buttonText: "Browse Competitions",
        buttonHref: "/live-competition",
      },
    ],
    []
  );

  // Auto-rotation removed per request; images change only via arrows

  const goPrev = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentSlideIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [slides.length]);

  // Touch swipe navigation
  const onTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchDeltaXRef.current = 0;
  };
  const onTouchMove = (e) => {
    if (touchStartXRef.current == null) return;
    touchDeltaXRef.current = e.touches[0].clientX - touchStartXRef.current;
  };
  const onTouchEnd = () => {
    const threshold = 50; // px
    if (touchDeltaXRef.current > threshold) {
      goPrev();
    } else if (touchDeltaXRef.current < -threshold) {
      goNext();
    }
    touchStartXRef.current = null;
    touchDeltaXRef.current = 0;
  };

  return (
    <section className="hero">
      <div className="hero-slider" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <div
          className="hero-track"
          style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="hero-slide" key={index}>
              <img src={slide.image} alt="Slide background" className="hero-slide-image" />
              <div className="hero-overlay"></div>
              <div className="hero-content">
                <div key={currentSlideIndex} className="hero-text hero-text-animate">
                  <p className="hero-welcome">{slides[currentSlideIndex].welcome}</p>
                  <h1 className="hero-title">{slides[currentSlideIndex].title}</h1>
                  <p className="hero-description">{slides[currentSlideIndex].description}</p>
                  <button
                    className="hero-button"
                    onClick={() => (window.location.href = slides[currentSlideIndex].buttonHref)}
                  >
                    {slides[currentSlideIndex].buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hero-dots" aria-label="Slide pagination">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`hero-dot ${idx === currentSlideIndex ? "active" : ""}`}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setCurrentSlideIndex(idx)}
            />
          ))}
        </div>
      </div>

      <div className="hero-wave">
        <img src={waveSvg} alt="Wave" className="wave-image" />
      </div>

      <button className="hero-arrow hero-arrow-left" aria-label="Previous" onClick={goPrev}>
        ❮
      </button>
      <button className="hero-arrow hero-arrow-right" aria-label="Next" onClick={goNext}>
        ❯
      </button>
    </section>
  );
};

export default Hero;
