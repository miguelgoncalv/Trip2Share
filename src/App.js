import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Contact from './Components/Contact';
import Login from './Components/Login';
import About from './Components/About';
import HeroSection from './Components/HeroSection';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import ImageCarousel from './Components/ImageCarousel'; 

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <SignUp />
            <ImageCarousel /> 
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
