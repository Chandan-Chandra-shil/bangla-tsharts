import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ ring }) => {
  const surPrice=useContext(RingContext)
  return (
    <div>
      <h2>Special</h2>
      <p><small>Ring: {surPrice}</small></p>
    </div>
  );
};

export default Special;