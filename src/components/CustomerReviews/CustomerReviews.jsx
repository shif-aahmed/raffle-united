import React from "react";
import "./CustomerReviews.css";
import reviewImg from "../../assets/download-3.jpeg"; // update the path if needed

const CustomerReviews = () => {
  return (
    <section className="customer-reviews-section">
      <h2 className="customer-reviews-heading">What Our Customers Say</h2>
      <p className="customer-reviews-subheading">
        Hear what some of our amazing customers have to say about Golden Raffle!
      </p>

      <div className="review-card">
        <img src={reviewImg} alt="Review" className="review-icon" />
        <div className="review-content"></div>
      </div>

      <button className="trustpilot-btn" onClick={() => window.open("https://www.trustpilot.com/review/goldenraffle.co.uk?utm_medium=trustbox&utm_source=TrustBoxReviewCollector", "_blank")}>
        Review us on <span className="trustpilot-star">★</span> Trustpilot
      </button>
    </section>
  );
};

export default CustomerReviews;
