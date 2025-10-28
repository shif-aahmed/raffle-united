import React from 'react';
import './LiveCompetition.css';
import waveSvg from '../../assets/wave-yellow.svg';

const LiveCompetition = () => {
  return (
    <>
      <section className="live-competition">
        <div className="live-competition-background"></div>
        
        <h1 className="live-competition-heading">LIVE COMPETITION</h1>
        
        <div className="live-competition-wave">
          <img
            src={waveSvg}
            alt="Wave"
            className="live-competition-wave-image"
          />
        </div>
      </section>

      {/* Section below the wave */}
      <div className="live-competition-bottom">
        <p className="live-competition-text">No Products found</p>
      </div>
    </>
  );
};

export default LiveCompetition;
