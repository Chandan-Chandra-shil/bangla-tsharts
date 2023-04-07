import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
 
  return (
    <div className="cart-container">
      <h1 className="cart-summary">Order Summary: {cart.length}</h1>
      {cart.map((tshart) => 
        <p key={tshart._id}>{tshart.name}
          <button className="btn" onClick={() => handleRemoveFromCart(tshart._id)}>
            X
          </button>
        </p>
      )}
    </div>
  );
};

export default Cart;