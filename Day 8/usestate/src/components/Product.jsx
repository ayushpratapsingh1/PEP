import React, { useContext } from 'react';
import { CartContext } from '../App';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = () => {
  const { cart, setCart } = useContext(CartContext);

  const handleCart = () => {
    setCart(cart + 1);
  };

  return (
    <div className="product-container">
      <h2>Product</h2>
      <p>Product details</p>
      <div className="product-list">
        <div className="product-item">
          <h3>Product 1</h3>
          <button onClick={handleCart}>Add to cart</button>
        </div>
        <div className="product-item">
          <h3>Product 2</h3>
          <button onClick={handleCart}>Add to cart</button>
        </div>
        <div className="product-item">
          <h3>Product 3</h3>
          <button onClick={handleCart}>Add to cart</button>
        </div>
      </div>
      <Link to="/cart" className="nav-link">Cart</Link>
    </div>
  );
};

export default Product;
