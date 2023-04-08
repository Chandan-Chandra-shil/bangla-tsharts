import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext, RingContext } from '../Grandpa/Grandpa';

const Uncle = () => {
  const navial = useContext(RingContext)
  const [money,setMoney] = useContext(MoneyContext)
  return (
    <div>
      <h2>Uncle</h2>
        <p><small>Grandpa money : {money}</small></p>
        <button onClick={()=> setMoney(money +1000)} className='btn'>send 1000 $</button>
      <section className='flex'>
        <Cousin>Nabil</Cousin>
        <Cousin>Nabila { navial}</Cousin>
      </section>
    </div>
  );
};

export default Uncle;