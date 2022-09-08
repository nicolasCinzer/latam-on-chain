import React from 'react';

import Resource from './resource';
import Topics from './topics';

import { SiHiveBlockchain } from 'react-icons/si';

const Resources = () => {
  return (
    <>
      <div className='pt-8 pb-4 px-8 text-2xl'>Ultimos Posteos</div>
      <div className='grid grid-cols-1 px-4'>
        <Resource
          id={1}
          topic={'Blockchain'}
          icon={<SiHiveBlockchain />}
          title={'Que es Blockchain?'}
          date={'6 de Sep 2022'}
        />
        <Resource
          id={2}
          topic={'Solidity'}
          icon={<SiHiveBlockchain />}
          title={'Por que es buena idea aprender Solidity para este 2023?'}
          date={'6 de Sep 2022'}
        />
        <Resource
          id={3}
          topic={'Bitcoin'}
          icon={<SiHiveBlockchain />}
          title={'Que es Bitcoin?'}
          date={'6 de Sep 2022'}
        />
      </div>
      <Topics />
    </>
  );
};

export default Resources;
