import React from 'react';

import { useLoaderData } from 'react-router-dom';


const Home = () => {
  const tshrts = useLoaderData()
  
  return (
    <div>
      <h2>this is home page :{tshrts.length}</h2>
     
      
    </div>   
  );
};

export default Home;