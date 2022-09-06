import React from 'react';

import Blockchain from '../../../images/blockchain';

const Welcome = () => {
  return (
    <div className='grid md:grid-cols-2 mb-8'>
      <div className='flex flex-col pb-8 md:py-16 w-min'>
        <div className='text-6xl py-4 px-8 mb-4 w-fit bg-emerald-300 rounded-3xl z-10'>
          #LATAMonCHAIN
        </div>
        <div className='text-xl pl-4'>
          LATAM on Chain es un proyecto open-source con el objetivo de recopilar
          contenido sobre Web3 en español!
        </div>
      </div>
      <Blockchain />
    </div>
  );
};

export default Welcome;
