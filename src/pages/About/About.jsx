import React from 'react';
import './About.css';
import waveYellow from '../../assets/wave-yellow.svg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-background"></div>
        <h1 className="about-title">ABOUT</h1>
        <div className="about-wave">
          <img src={waveYellow} alt="Wave" className="about-wave-image" />
        </div>
      </section>

      <div className="about-content">
        <div className="about-container">
          <div className="about-text-block">
            <p>Hi, we are Raffle United!</p>
            <p>
              We are just three best pals that want to offer YOU the chance to win
              amazing prizes and experiences at knockdown prices.
            </p>
            <p>
              We are excited to see you guys and girls win some unbelievable prizes.
            </p>
            <p>
              As a fully registered Ltd company from Central Scotland, we deliver our
              prizes to all of the UK.
            </p>
            <p>
              David and Grant will be carrying out all of our draws live on Facebook and
              can answer any questions you have.
            </p>
            <p>
              Sports is a particular love of David’s and he is looking forward to offering
              some incredible sports prizes and experiences.
            </p>
            <p>
              Grant has a love for food, so keep an eye out for some amazing
              restaurants and food prizes. Whilst Chris is into his gadgets, so plenty of
              tech and gadgets will be available to win.
            </p>
            <p>
              All three of us love to travel and hope to get you lovely folk off to some
              beautiful destinations around the UK and around the rest of the world.
            </p>
            <p>
              If any of that isn’t for you, don’t worry as there will be loads of other prizes
              regularly released that could be for you!
            </p>
            <p>
              So be sure to keep your eyes on our website and social media for all our awesome
              competitions which will be drawn live via Facebook using Google random number generator.
            </p>
            <p>Thanks for playing and good luck!!<br/>The Raffle United Team</p>
            <Link to="/live-competition" className="about-cta-btn">Join Competitions</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


