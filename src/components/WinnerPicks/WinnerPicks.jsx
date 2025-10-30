import React from 'react';
import './WinnerPicks.css';
import { Link } from 'react-router-dom';
import ticketIcon from '../../assets/ticket.svg';
import consoleImage from '../../assets/image1.jpeg';

const WinnerPicks = () => {
  const winnerPicksData = [
    {
      id: 1,
      title: "PS5 or Xbox Series X",
      price: "£2.00",
      status: "Open",
      priceBadge: "£2"
    },
    {
      id: 2,
      title: "PS5 or Xbox Series X",
      price: "£2.00",
      status: "Open",
      priceBadge: "£2"
    },
    {
      id: 3,
      title: "Win A Full Gold Sovereign",
      price: "£2.00",
      status: "Open",
      priceBadge: "£2"
    },
    {
      id: 4,
      title: "Apple iPhone 15 Pro",
      price: "£2.50",
      status: "Open",
      priceBadge: "£2.5"
    }
  ];

  return (
    <div className="winner-picks-container">
      <div className="winner-picks-grid">
        {winnerPicksData.map((pick) => (
          <div key={pick.id} className="winner-pick-card">
            <Link
              to={`/waiting/${pick.id}`}
              state={{ competition: pick }}
              className="winner-pick-card-link"
            >
              <div className="winner-pick-card-img">
                <img src={consoleImage} alt={pick.title} />
              </div>
            </Link>

            <h3 className="winner-pick-card-title">{pick.title}</h3>
            <div className="winner-pick-divider"></div>
            <p className="winner-pick-card-status">
              <img src={ticketIcon} alt="" /> {pick.status}
            </p>
            <p className="winner-pick-card-price">{pick.price}</p>

            <Link to={`/waiting/${pick.id}`} state={{ competition: pick }}>
              <button className="winner-pick-view-btn">View Entries</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinnerPicks;
