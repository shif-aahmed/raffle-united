import React from "react";
import "./PreviousWinners.css";
import person1 from "../../assets/Craig.jpeg"; // dummy images


const PreviousWinners = () => {
  const winners = [
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
    {
      img: person1,
      title: "Margaret Won Instax Camera",
      name: "Margaret Graham",
      location: "Stenhousemuir",
      date: "15 June",
    },
    {
      img: person1,
      title: "Henderson Family Won Robot Vacuum",
      name: "Henderson Family",
      location: "Falkirk",
      date: "15 July",
    },
    {
      img: person1,
      title: "Craig Fraser Won a Scotland v Hungary Ticket",
      name: "Craig Fraser",
      location: "Arbroath",
      date: "Sat 15th June",
    },
    {
      img: person1,
      title: "Jordi won 2x Scotland v Switzerland tickets",
      name: "Jordi Stewart",
      location: "Dyce, Aberdeen",
      date: "Wednesday 5th June",
    },
  ];

  return (
    <section className="prev-section">
      <div className="prev-section2">
      <h2 className="prev-heading">PREVIOUS WINNERS</h2>

      <div className="prev-winners-grid">
        {winners.map((winner, index) => (
          <div className="prev-winner-card" key={index}>
            <div className="prev-img-container">
            <img src={winner.img} alt={winner.name} className="prev-winner-img" />
            </div>
            <div className="prev-winner-info">
              <h3 className="prev-winner-title">{winner.title}</h3>
              <p className="prev-winner-name">{winner.name}</p>
              {winner.location && (
                <p className="prev-winner-location">{winner.location}</p>
              )}
              <p className="prev-winner-date">{winner.date}</p>
            </div>
          </div>
        ))}
      </div><hr className="divider" />
      </div>
    </section>
  );
};

export default PreviousWinners;
