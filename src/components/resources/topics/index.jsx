import React from 'react';

import Topic from './topic';

const Topics = () => {
  return (
    <div className='grid fixed md:right-44 md:top-36 grid-flow-row gap-y-4 place-items-center'>
      <div className='border-b border-emerald-300/60 text-xl'>Topics</div>
      <Topic topic={'Solidity'}/>
      <Topic topic={'Blockchain'}/>
      <Topic topic={'Bitcoin'}/>
    </div>
  );
};

export default Topics;
