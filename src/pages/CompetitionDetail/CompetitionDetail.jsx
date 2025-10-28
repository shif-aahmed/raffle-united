import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./CompetitionDetail.css";

const CompetitionDetail = () => {
  const location = useLocation();
  const competition = location.state?.competition;

  if (!competition) {
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        <h2>Competition not found</h2>
        <Link to="/finished" className="back-btn">
          ← Back to Competitions
        </Link>
      </div>
    );
  }

  return (
    <section className="competition-detail">
      <div className="detail-container">
        {/* LEFT IMAGE */}
        <div className="detail-image">
          <img src={competition.image} alt={competition.title} />
          <div className="ticket-left">751 Left</div>
        </div>

        {/* RIGHT DETAILS */}
        <div className="detail-info">
          <h2 className="detail-title">{competition.title}</h2>
          <p className="detail-price">{competition.price}</p>
          <p className="detail-description">{competition.description}</p>

          <table className="winner-table">
            <thead>
              <tr>
                <th>Winner Name</th>
                <th>Ticket Number</th>
                <th>Draw Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{competition.winner.name}</td>
                <td>{competition.winner.ticket}</td>
                <td>{competition.winner.date}</td>
              </tr>
            </tbody>
          </table>

          <Link to="/finished-competition" className="back-btn">
            ← Back to Competitions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompetitionDetail;
