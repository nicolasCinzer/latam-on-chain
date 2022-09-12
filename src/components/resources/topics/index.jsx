import React from 'react';

import Topic from './topic';

const Topics = ({ setFilter }) => {
  return (
    <div className='grid fixed md:right-44 md:top-36 grid-flow-row gap-y-4 place-items-center'>
      <div className='border-b border-emerald-300/60 text-xl'>Topics</div>
      <Topic topic={'All'} setFilter={setFilter} />
      <Topic topic={'Solidity'} setFilter={setFilter} />
      <Topic topic={'Blockchain'} setFilter={setFilter} />
      <Topic topic={'Bitcoin'} setFilter={setFilter} />
    </div>
  );
};

export default Topics;
