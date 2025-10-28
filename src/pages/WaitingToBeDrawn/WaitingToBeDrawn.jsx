import React from 'react';
import { Link } from 'react-router-dom';
import './WaitingToBeDrawn.css';
import waveSvg from '../../assets/wave-yellow.svg';
import img1 from "../../assets/image1.jpeg";
import ticket from "../../assets/ticket.svg";

const competitions = [
  {
    id: 1,
    image: img1,
    title: "Mega Mystery Box",
    status: "Open",
    price: "£1.00",
    description: `Unlock the Ultimate Mystery Box for just £1! Golden Raffle are bringing back our popular mystery box. Imagine a prize box that could hold anything—from luxury gadgets and exclusive collectibles to an unforgettable getaway! For just £1, you have a chance to win a mystery prize worth far more than the entry price.`,
    sold: 184,
    left: 316,
  },
  {
    id: 2,
    image: img1,
    title: "PS5 or Xbox Series X",
    status: "Open",
    price: "£2.00",
    description: `Choose your dream console—win either a PS5 or Xbox Series X for just £2! Experience next-gen gaming with stunning visuals, lightning-fast load times, and endless fun.`,
    sold: 120,
    left: 380,
  },
  {
    id: 3,
    image: img1,
    title: "Win A Full Gold Sovereign",
    status: "Open",
    price: "£2.00",
    description: `Enter for a chance to win a stunning full gold sovereign coin — the ultimate collector’s treasure!`,
    sold: 200,
    left: 250,
  },
  {
    id: 4,
    image: img1,
    title: "iPhone 17 Pro",
    status: "Open",
    price: "£3.00",
    description: `Win the brand new iPhone 17 Pro — packed with cutting-edge technology, stunning camera, and lightning performance.`,
    sold: 300,
    left: 100,
  },
  {
    id: 5,
    image: img1,
    title: "Home Alone Concert Tickets",
    status: "Open",
    price: "£1.50",
    description: `Relive the magic of Home Alone with a live orchestra concert experience! Perfect for family fun this holiday season.`,
    sold: 220,
    left: 150,
  },
  {
    id: 6,
    image: img1,
    title: "Celtic FC vs SC Braga Tickets",
    status: "Open",
    price: "£2.50",
    description: `Win VIP tickets to watch Celtic FC take on SC Braga live! Enjoy premium seating and an unforgettable football night.`,
    sold: 180,
    left: 320,
  },
];

const WaitingToBeDrawn = () => {
  return (
    <>
      <section className="waiting-live-competition">
        <div className="waiting-live-background"></div>
        <h1 className="waiting-live-heading">WAITING TO BE DRAWN</h1>
        <div className="waiting-live-wave">
          <img src={waveSvg} alt="Wave" className="waiting-live-wave-img" />
        </div>
      </section>

      <section className="waiting-grid">
        <div className="waiting-grid-inner">
          {competitions.map((item) => (
            <div className="waiting-card" key={item.id}>
              <Link
                to={`/waiting/${item.id}`}
                state={{ competition: item }}
                className="waiting-card-link"
              >
                <div className="waiting-card-img">
                  <img src={item.image} alt={item.title} />
                </div>
              </Link>

              <h3 className="waiting-card-title">{item.title}</h3>
              <div className="waiting-divider"></div>
              <p className="waiting-card-status">
                <img src={ticket} alt="" /> {item.status}
              </p>
              <p className="waiting-card-price">{item.price}</p>

              <Link to={`/waiting/${item.id}`} state={{ competition: item }}>
                <button className="waiting-view-btn">View Entries</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WaitingToBeDrawn;
