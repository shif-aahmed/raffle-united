import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = ({ onNavigate }) => {
  const [isCompetitionsOpen, setIsCompetitionsOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCompetitionsOpen, setIsMobileCompetitionsOpen] = useState(false);

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsCompetitionsOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsCompetitionsOpen(false);
    }, 150);
    setHoverTimeout(timeout);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileCompetitions = () => {
    setIsMobileCompetitionsOpen(!isMobileCompetitionsOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src={logo} alt="Raffle United" className="logo-image" />
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Home</NavLink>
          <div 
            className="dropdown-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="nav-link dropdown-trigger"
              type="button"
            >
              Competitions
              <span className="dropdown-arrow">▼</span>
            </button>
            {isCompetitionsOpen && (
              <div className="dropdown-menu">
                <NavLink to="/live-competition" className={({ isActive }) => `dropdown-item${isActive ? ' active' : ''}`}>Live Competitions</NavLink>
                <NavLink to="/waiting-to-be-drawn" className={({ isActive }) => `dropdown-item${isActive ? ' active' : ''}`}>Waiting to be Drawn</NavLink>
                <NavLink to="/finished-competition" className={({ isActive }) => `dropdown-item${isActive ? ' active' : ''}`}>Finished Competitions</NavLink>
              </div>
            )}
          </div>
          <NavLink to="/how-to-play" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>How to Play</NavLink>
          <NavLink to="/previous-winners" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Winners</NavLink>
        </div>

        {/* Right Section - Cart and Mobile Menu */}
        <div className="navbar-right">
          {/* Shopping Cart */}
          <div className="cart-container">
            <NavLink to="/cart" className="cart-link">
              <div className="cart-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <div className="cart-badge">0</div>
              </div>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          {/* Desktop Buttons */}
          <div className="navbar-buttons desktop-only">
            <NavLink to="/login" className="btn-login">
              <span className="btn-text">Login</span>
              <span className="btn-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  <polyline points="10,17 15,12 10,7"></polyline>
                  <line x1="15" y1="12" x2="3" y2="12"></line>
                </svg>
              </span>
            </NavLink>
            <NavLink to="/register" className="btn-register">
              <span className="btn-text">Register</span>
              <span className="btn-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <line x1="20" y1="8" x2="20" y2="14"></line>
                  <line x1="23" y1="11" x2="17" y2="11"></line>
                </svg>
              </span>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <NavLink to="/" className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}>Home</NavLink>
            <div className="mobile-dropdown">
              <button
                className="mobile-nav-link dropdown-trigger"
                type="button"
                onClick={(e) => {
                  toggleMobileCompetitions();
                }}
              >
                Competitions
                <span className="mobile-dropdown-arrow">
                  {isMobileCompetitionsOpen ? '▲' : '▼'}
                </span>
              </button>
              {isMobileCompetitionsOpen && (
                <div className="mobile-dropdown-menu">
                  <NavLink to="/live-competition" className={({ isActive }) => `mobile-dropdown-item${isActive ? ' active' : ''}`}>Live Competitions</NavLink>
                  <NavLink to="/waiting-to-be-drawn" className={({ isActive }) => `mobile-dropdown-item${isActive ? ' active' : ''}`}>Waiting to be Drawn</NavLink>
                  <NavLink to="/finished-competition" className={({ isActive }) => `mobile-dropdown-item${isActive ? ' active' : ''}`}>Finished Competitions</NavLink>
                </div>
              )}
            </div>
            <NavLink to="/how-to-play" className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}>How to Play</NavLink>
            <NavLink to="/previous-winners" className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}>Winners</NavLink>
            <div className="mobile-buttons">
              <NavLink to="/login" className="btn-login mobile-btn">Login</NavLink>
              <NavLink to="/register" className="btn-register mobile-btn">Register</NavLink>
            </div>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
