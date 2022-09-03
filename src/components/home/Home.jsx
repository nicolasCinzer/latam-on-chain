import React from 'react';

import Welcome from './welcome';
import Roadmaps from './roadmaps';

const Home = () => {
  return (
    <div className='grid grid-cols-1 place-items-center p-8 h-full'>
      <Welcome />
      <Roadmaps />
    </div>
  );
};

export default Home;
