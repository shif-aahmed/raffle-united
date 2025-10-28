import React, { useState } from "react";
import "./WinnersSection.css";
import person1 from "../../assets/Craig.jpeg"; // dummy image
import { href } from "react-router-dom";


const WinnersSection = () => {
  const slides = [
    [
      {
        img: person1,
        title: "Morgan Oasis Heaton Park",
        name: "Morgan",
        date: "February 2025",
      },
      {
        img: person1,
        title: "Calum Won Boss Watch",
        name: "Calum Munro",
        location: "Falkirk",
        date: "22nd June",
      },
    ],
    [
      {
        img: person1,
        title: "Emily Won Golden Ticket",
        name: "Emily Carter",
        location: "London",
        date: "March 2025",
      },
      {
        img: person1,
        title: "Daniel Won MacBook Pro",
        name: "Daniel Smith",
        location: "Manchester",
        date: "April 2025",
      },
    ],
    [
      {
        img: person1,
        title: "Morgan Oasis Heaton Park",
        name: "Morgan",
        date: "February 2025",
      },
      {
        img: person1,
        title: "Calum Won Boss Watch",
        name: "Calum Munro",
        location: "Falkirk",
        date: "22nd June",
      },
    ],
    [
      {
        img: person1,
        title: "Emily Won Golden Ticket",
        name: "Emily Carter",
        location: "London",
        date: "March 2025",
      },
      {
        img: person1,
        title: "Daniel Won MacBook Pro",
        name: "Daniel Smith",
        location: "Manchester",
        date: "April 2025",
      },
    ],
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="winners-section">
      <h2 className="winners-heading">Winners</h2>
      <p className="winners-subheading">The Golden Raffle Hall of Fame!!</p>

      <div className="slider-container">
        <div className="slides">
          {slides[currentSlide].map((winner, index) => (
            <div key={index} className="winner-card">
              <img src={winner.img} alt={winner.name} className="winner-img" />
              <div className="winner-info">
                <h3 className="winner-title">{winner.title}</h3>
                <p className="winner-name">{winner.name}</p>
                {winner.location && (
                  <p className="winner-location">{winner.location}</p>
                )}
                <p className="winner-date">{winner.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="slider-dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(i)}
            ></span>
          ))}
        </div>
      </div>

      <hr className="divider" />

      <button className="view-all-btn" onClick={() => window.location.href = "/previous-winners"}>View All Winners</button>
    </section>
  );
};

export default WinnersSection;
