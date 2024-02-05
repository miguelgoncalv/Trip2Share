import React, { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [faded, setFaded] = useState(false);


  const handleScroll = () => {
    const isFaded = window.scrollY > 50; 
    setFaded(isFaded);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return (
    <nav className={`navbar ${faded ? "faded" : ""}`}>
      <div className="logo">
        <Link to="/">
          <img src="/Images/logo.png" alt="Trip 2Share" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
