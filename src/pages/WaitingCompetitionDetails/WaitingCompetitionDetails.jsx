import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./WaitingCompetitionDetails.css";

const WaitingCompetitionDetails = () => {
  const location = useLocation();
  const competition = location.state?.competition;

  if (!competition) {
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        <h2>Competition not found</h2>
        <Link to="/waiting" className="waiting-back-btn">
          ← Back to Competitions
        </Link>
      </div>
    );
  }

  return (
    <div className="waiting-details-page">
      <div className="waiting-details-wrapper">
        {/* LEFT IMAGE */}
        <div className="waiting-details-image-box">
          <img
            src={competition.image}
            alt={competition.title}
            className="waiting-details-img"
          />
          <div className="waiting-left-bar">
            <span>{competition.left} Left</span>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="waiting-details-info">
          <h1 className="waiting-details-title">{competition.title}</h1>
          <p className="waiting-details-price">{competition.price}</p>
          <p className="waiting-details-desc">{competition.description}</p>

          <p className="waiting-details-note">
            Please wait for the result
            <br />
            <strong>{competition.sold} Tickets Sold</strong>
          </p>

          <div className="waiting-details-footer">
            <h4>NOTE</h4>
            <p>
              See Ts & Cs for{" "}
              <a href="#" className="waiting-link">
                free postal entry route
              </a>
              . Please check your name and number in the{" "}
              <a href="#" className="waiting-link">
                entry list
              </a>{" "}
              below after payment.
            </p>
          </div>

          <Link to="/waiting-to-be-drawn" className="waiting-back-btn">
            ← Back to Competitions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WaitingCompetitionDetails;
