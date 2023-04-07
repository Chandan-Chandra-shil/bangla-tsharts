import React from 'react';
import "./TShart.css"

const TShart = ({ tshart ,handleAddToCart}) => {
  const {name,price,picture } = tshart;

  return (
    <div className='single-tshart'>
      <img src={picture} alt="" />
      <h2>{name}</h2>
      <h4 className='price'>Price: $ {price}</h4>
      <button onClick={()=>handleAddToCart(tshart)} className='btn'>Buy Now</button>
      
    </div>
  );
};

export default TShart;