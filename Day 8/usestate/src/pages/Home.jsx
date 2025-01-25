import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Home</h1>
      <div className="nav-links">
        <Link to="/product" className="nav-link">Product</Link>
        <Link to="/cart" className="nav-link">Cart</Link>
      </div>
    </div>
  );
};

export default Home;
