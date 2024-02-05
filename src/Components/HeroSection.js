import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const navigate = useNavigate();

  const heroStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh', 
    color: 'white',
    textAlign: 'center',
    backgroundImage: "url('/Images/Banner.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

const headingStyle = {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: '6rem',
    fontWeight: 'extrabold',
    textTransform: 'uppercase',
    marginBottom: '4rem', 
};

  const buttonStyle = {
    padding: '10px 20px',
    margin: '0 10px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
  };
  

  return (
    <div style={heroStyle}>
        <h1 style={headingStyle}>Explore </h1>
      <div>
        <button style={buttonStyle} onClick={() => navigate('/SignUp')}>Sign Up</button>
        <button style={buttonStyle} onClick={() => navigate('/Login')}>Login</button>
      </div>
    </div>
  );
}

export default HeroSection;
