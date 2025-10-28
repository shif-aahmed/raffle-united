import React from 'react';
import { Link } from 'react-router-dom';
import './FinishedCompetition.css';
import waveSvg from '../../assets/wave-yellow.svg';
import img1 from "../../assets/image1.jpeg";
import ticket from "../../assets/ticket.svg";

const competitions = [
  {
    id: 1,
    image: img1,
    title: "PS5 or X Box Series X",
    status: "Drawn",
    price: "£1.00",
    description: `
      🎮 Win the ultimate gaming console of your choice! 
      Enter now for a chance to grab either a PS5 Disc Edition or an Xbox Series X.
      Both come with top-tier performance and immersive gameplay.
    `,
    winner: { name: "John Doe", ticket: "202", date: "15/10/2025" },
  },
  {
    id: 2,
    image: img1,
    title: "Center Parcs Family Lodge Holiday",
    status: "Drawn",
    price: "£2.00",
    description: `
      🌲 Win a Family Holiday to Center Parcs – Whinfell Forest! 🌳
      Golden Raffle are giving you the chance to win the ultimate family adventure.
      Enjoy 4 nights in a 3-bedroom lodge for up to 6 guests — perfect for families or groups.
    `,
    winner: { name: "William Mckechinie", ticket: "704", date: "13/10/2025" },
  },
  {
    id: 3,
    image: img1,
    title: "Win A Full Gold Sovereign",
    status: "Drawn",
    price: "£2.00",
    description: `
      💰 Win a full gold sovereign coin — a timeless symbol of wealth and prestige.
      Perfect for collectors or as a unique investment.
    `,
    winner: { name: "Sarah Connor", ticket: "811", date: "10/10/2025" },
  },
  {
    id: 4,
    image: img1,
    title: "iPhone 17 Pro",
    status: "Drawn",
    price: "£3.00",
    description: `
      📱 Win the latest iPhone 17 Pro with cutting-edge features, ProMotion display, 
      and unbeatable performance. A dream phone for every tech lover!
    `,
    winner: { name: "Michael Smith", ticket: "126", date: "08/10/2025" },
  },
  {
    id: 5,
    image: img1,
    title: "Home Alone Concert Tickets",
    status: "Drawn",
    price: "£1.50",
    description: `
      🎶 Relive the magic of Home Alone live in concert! 
      Experience the classic movie with a live orchestra performing the iconic soundtrack.
    `,
    winner: { name: "Emma Jones", ticket: "531", date: "06/10/2025" },
  },
  {
    id: 6,
    image: img1,
    title: "Celtic FC vs SC Braga Tickets",
    status: "Drawn",
    price: "£2.50",
    description: `
      ⚽ Win premium tickets to watch Celtic FC take on SC Braga in an unforgettable football match!
      Enjoy an electric atmosphere and VIP seating.
    `,
    winner: { name: "Daniel Brown", ticket: "412", date: "04/10/2025" },
  },
];

const FinishedCompetition = () => {
  return (
    <>
      <section className="live-competition">
        <div className="live-competition-background"></div>
        <h1 className="live-competition-heading">FINISHED COMPETITIONS</h1>
        <div className="live-competition-wave">
          <img src={waveSvg} alt="Wave" className="live-competition-wave-image" />
        </div>
      </section>

      <section className="competitions-grid">
        <div className="competitions-grid-inner">
          {competitions.map((item) => (
            <Link
              to={`/competition/${item.id}`}
              key={item.id}
              state={{ competition: item }}
              className="competition-card-link"
            >
              <div className="competition-card">
                <div className="card-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <h3 className="card-title">{item.title}</h3>
                <div className="finish-divider"></div>
                <p className="card-status">
                  <img src={ticket} alt="" /> {item.status}
                </p>
                <p className="card-price">{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default FinishedCompetition;
