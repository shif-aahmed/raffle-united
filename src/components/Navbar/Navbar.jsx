import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <img src={logo} alt="Golden Raffle" className="logo-image" />
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link to="/" className="nav-link active">Home</Link>
          <div 
            className="dropdown-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link 
              className="nav-link dropdown-trigger"
            >
              Competitions
              <span className="dropdown-arrow">▼</span>
            </Link>
            {isCompetitionsOpen && (
              <div className="dropdown-menu">
                <Link to="/live-competition" className="dropdown-item">Live Competitions</Link>
                <Link to="/waiting-to-be-drawn" className="dropdown-item">Waiting to be Drawn</Link>
                <Link to="/finished-competition" className="dropdown-item">Finished Competitions</Link>
              </div>
            )}
          </div>
          <Link to="/how-to-play" className="nav-link">How to Play</Link>
          <Link to="/previous-winners" className="nav-link">Winners</Link>
        </div>

        {/* Right Section - Cart and Mobile Menu */}
        <div className="navbar-right">
          {/* Shopping Cart */}
          <div className="cart-container">
            <Link to="/cart" className="cart-link">
              <div className="cart-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <div className="cart-badge">0</div>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          {/* Desktop Buttons */}
          <div className="navbar-buttons desktop-only">
            <Link to="/login" className="btn-login">
              <span className="btn-text">Login</span>
              <span className="btn-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  <polyline points="10,17 15,12 10,7"></polyline>
                  <line x1="15" y1="12" x2="3" y2="12"></line>
                </svg>
              </span>
            </Link>
            <Link to="/register" className="btn-register">
              <span className="btn-text">Register</span>
              <span className="btn-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <line x1="20" y1="8" x2="20" y2="14"></line>
                  <line x1="23" y1="11" x2="17" y2="11"></line>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <Link to="/" className="mobile-nav-link">Home</Link>
            <div className="mobile-dropdown">
              <Link 
                className="mobile-nav-link dropdown-trigger"
                onClick={(e) => {
                  e.preventDefault();
                  toggleMobileCompetitions();
                }}
              >
                Competitions
                <span className="mobile-dropdown-arrow">
                  {isMobileCompetitionsOpen ? '▲' : '▼'}
                </span>
              </Link>
              {isMobileCompetitionsOpen && (
                <div className="mobile-dropdown-menu">
                  <Link to="/live-competition" className="mobile-dropdown-item">Live Competitions</Link>
                  <Link to="/waiting-to-be-drawn" className="mobile-dropdown-item">Waiting to be Drawn</Link>
                  <Link to="/finished-competition" className="mobile-dropdown-item">Finished Competitions</Link>
                </div>
              )}
            </div>
            <Link to="/how-to-play" className="mobile-nav-link">How to Play</Link>
            <Link to="/previous-winners" className="mobile-nav-link">Winners</Link>
            <div className="mobile-buttons">
              <Link to="/login" className="btn-login mobile-btn">Login</Link>
              <Link to="/register" className="btn-register mobile-btn">Register</Link>
            </div>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
