import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../App';
import './Cart.css';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const handleReset = () => {
    setCart(0);
  };
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <p>{`${cart} product(s) added to cart`}</p>
      <nav className="cart-nav">
        <Link to="/" className="back-link">← Back to Home</Link>
        <Link to="/product" className="nav-link">Product</Link>
      </nav>
      <button className="btn" onClick={handleReset}>Reset Cart</button>
    </div>
  );
};

export default Cart;
