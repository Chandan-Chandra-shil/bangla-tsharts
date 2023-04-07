import React, { useState } from "react";
import "./Home.css";
 

import { useLoaderData } from "react-router-dom";
import TShart from "../TShart/TShart";
import Cart from "../Cart/Cart";
 import toast from "react-hot-toast";


const Home = () => {
  const tsharts = useLoaderData();
  const [cart, setCart] = useState([]);
  
  const handleAddToCart = (tshart) => {
    const alreadyAdded = cart.find(ts => ts._id === tshart._id)
    if (alreadyAdded) {
     toast("Bro.. This Product Already Added!!");

      
    }
    else {
      const newCart = [...cart, tshart]
      setCart(newCart);
    
    }
    
   
  }

  const handleRemoveFromCart = id => {
    
    const remaining = cart.filter(ts => ts._id !== id);

    setCart(remaining);
   
  
    
  }

  return (
    <div className="home-container">
      <div className="shart-container">
        {tsharts.map((tshart) => (
          <TShart
            key={tshart._id}
            handleAddToCart={handleAddToCart}
            tshart={tshart}
          ></TShart>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
