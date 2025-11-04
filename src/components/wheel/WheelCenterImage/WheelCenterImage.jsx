import React from 'react';
import './WheelCenterImage.css';

const WheelCenterImage = ({ src, alt = 'Center Image' }) => {
  return (
    <div className="spin-wheel-wheel-center-image">
      <img src={src} alt={alt} />
    </div>
  );
};

export default WheelCenterImage;

