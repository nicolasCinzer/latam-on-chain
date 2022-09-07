import React from 'react';

import Resource from './resource/Resource';

import { SiHiveBlockchain } from 'react-icons/si';

const Resources = () => {
  return (
    <>
      <div className='pt-8 pb-4 px-8 text-2xl'>Ultimos Posteos</div>
      <div className='grid grid-cols-1 px-4'>
        <Resource
          topic={'Blockchain'}
          icon={<SiHiveBlockchain />}
          title={'Que es Blockchain?'}
          date={'6 de Sep 2022'}
        />
        <Resource
          topic={'Solidity'}
          icon={<SiHiveBlockchain />}
          title={'Por que es buena idea aprender Solidity para este 2023?'}
          date={'6 de Sep 2022'}
        />
        <Resource
          topic={'Bitcoin'}
          icon={<SiHiveBlockchain />}
          title={'Que es Bitcoin?'}
          date={'6 de Sep 2022'}
        />
      </div>
      <div className='grid fixed right-44 top-36 grid-flow-row gap-y-4 place-items-center'>
        <div className='border-b border-emerald-300/60 text-xl'>Topics</div>
        <div className='w-fit px-3 bg-emerald-300/60 rounded-3xl'>Solidity</div>
        <div className='w-fit px-3 bg-emerald-300/60 rounded-3xl'>Bitcoin</div>
        <div className='w-fit px-3 bg-emerald-300/60 rounded-3xl'>
          Blockchain
        </div>
      </div>
    </>
  );
};

export default Resources;
