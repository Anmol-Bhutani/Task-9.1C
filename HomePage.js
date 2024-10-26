import React from 'react';
import './Home.css';
import Navbar from './Navbar';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="home-container">
        <h1>Welcome to the Smart Kitchen!</h1>
        <p>Your one-stop solution for kitchen automation.</p>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
