import React from 'react';

import Father from '../Father/father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'


const Grandpa = () => {
  const ring='Doimon'
  return (
    <div className="grandpa">
      <h1>Granpa</h1>
      <section className="flex">
        <Father ring={ring}></Father>
        <Uncle></Uncle>
        <Aunty  ring={ring}></Aunty>
      </section>
    </div>
  );
};

export default Grandpa;