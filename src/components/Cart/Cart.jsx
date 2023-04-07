import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
  let massage;
  if (cart.length === 0) {
   massage= <p>Please add some product!</p>
  }
  else {
    massage=<div>
      <h2>Boroloooxxxxx</h2>
      <p><small>Thanks for giving your  money</small></p>
    </div>
  } 
  return (
    <div className="cart-container">
      <h1 className="cart-summary">Order Summary: {cart.length}</h1>
      {massage}
      {cart.length >2 ? <span>aro kno</span> : <span>fokira </span>}
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


/**
 * CONDITIONAL RENDERING
 * 1. use if else to set a variable that will contain an element, component
 * 2. ternary operator: condition ? 'for true' : 'false'
 * 3. Logical || : (if the condition is false then the next thing will be displayed)
 * 4. Logical && : (if the condition is true then the next thing will be displayed)
 * 
 * 
 * CONDITIONAL CSS CLASS
 * 1. use  ternary
 * 2. ternary  inside template string
 * 
 */