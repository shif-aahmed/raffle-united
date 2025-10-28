import React from 'react'
import waveYellow from '../../assets/wave-yellow.svg'
import './Register.css'

function Register() {
  return (
    <div className="register-page">
      <section className="register-hero">
        <div className="register-background"></div>
        
        <h1 className="register-title">REGISTER</h1>
        
        <div className="register-wave">
          <img
            src={waveYellow}
            alt="Wave"
            className="register-wave-image"
          />
        </div>
      </section>
      
      <div className="register-content">
        <div className="register-form-container">
          <form className="register-form">
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Email Address*" 
                className="register-input"
                required
              />
            </div>
            <div className="form-group">
              <input 
                type="password" 
                placeholder="Password*" 
                className="register-input"
                required
              />
            </div>
            <div className="form-group">
              <input 
                type="password" 
                placeholder="Password Repeat*" 
                className="register-input"
                required
              />
            </div>
            
            <div className="privacy-text">
              <p>
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
                <a href="#" className="privacy-link">privacy policy.</a>
              </p>
            </div>
            
            <button type="submit" className="register-button">
              REGISTER
            </button>
            
            <div className="login-link">
              <span>Already have an account? </span>
              <a href="/login" className="login-text">Sign In</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
