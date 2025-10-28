import React from 'react';
import './Cart.css';
import waveSvg from '../../assets/wave-yellow.svg';

const Cart = () => {
  return (
    <>
      <section className="cart">
        <div className="cart-background"></div>
        
        <h1 className="cart-heading">CART</h1>
        
        <div className="cart-wave">
          <img
            src={waveSvg}
            alt="Wave"
            className="cart-wave-image"
          />
        </div>
      </section>

      {/* Section below the wave */}
      <div className="cart-bottom">
        <div className="cart-empty-banner">
          <p className="cart-empty-text">Your cart is currently empty.</p>
        </div>
        <button className="cart-return-button">
          Return to competitions
        </button>
      </div>
    </>
  );
};

export default Cart;
