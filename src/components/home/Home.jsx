import React from 'react';

const Home = () => {
  return (
    <div className='grid grid-cols-2 p-8 h-screen'>
      <div className='flex flex-col pr-8 pt-16'>
        <div className='text-6xl py-4 px-8 mb-4 w-fit bg-emerald-400/60 rounded-3xl'>#LATAMonCHAIN</div>
        <div className='text-xl pl-4'>
          LATAM on Chain es un proyecto open-source con el objetivo de recopilar contenido sobre Web3 en español para la comunidad habla hispana.
        </div>
      </div>
      <div>Blockchain Developer</div>
    </div>
  );
};

export default Home;
