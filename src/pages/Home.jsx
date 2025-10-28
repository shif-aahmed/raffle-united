import React from 'react';
import Hero from '../components/Hero/Hero';
import CompetitionsAndHowToPlay from '../components/CompetitionsAndHowToPlay/CompetitionsAndHowToPlay';
import CustomerReviews from '../components/CustomerReviews/CustomerReviews';
import WinnersSection from '../components/WinnersSection/WinnersSection';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5' }}>
      <Hero />
      <CompetitionsAndHowToPlay />
      <CustomerReviews />
      <WinnersSection />
    </div>
  );
};

export default Home;
