import React from 'react';
import './HowTOPlay.css';
import waveSvg from '../../assets/wave-yellow.svg';

const HowToPlay = () => {
  return (
    <>
      <section className="how-to-play">
        <div className="how-to-play-background"></div>
        <h1 className="how-to-play-heading">HOW TO PLAY</h1>

        <div className="how-to-play-wave">
          <img src={waveSvg} alt="Wave" className="how-to-play-wave-image" />
        </div>
      </section>

      {/* ✅ Three simple text columns */}
      <div className="how-to-play-bottom">
        <div className="how-to-play-columns">
          <div className="how-to-play-column">
            <h2>How to Enter the Competitions</h2>
            <ul>
              <li>Pick your lucky number or grab a lucky dip.</li>
              <li>Checkout securely with your card within 10 minutes.</li>
              <li>Receive a confirmation email with your numbers.</li>
            </ul>
          </div>

          <div className="how-to-play-column">
            <h2>How the Winner is Picked</h2>
            <ul>
              <li>Follow us on all our social channels and turn on notifications.</li>
              <li>After the timer ends, watch for our live draw on social media.</li>
              <li>We contact all of our winners!</li>
            </ul>
          </div>

          <div className="how-to-play-column">
            <h2>How the Prize is Delivered</h2>
            <ul>
              <li>We’ll arrange the best date and time for delivery.</li>
              <li>If the winner is local, we may deliver the prize personally.</li>
              <li>We’d love a winners photo of you but it’s not compulsory!</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToPlay;
