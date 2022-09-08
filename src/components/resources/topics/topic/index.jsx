import React from 'react';

const Topic = ({ topic }) => {
  return (
    <div className='w-fit px-3 bg-emerald-300/60 rounded-3xl transition-all hover:scale-110 cursor-pointer'>{topic}</div>
  );
};

export default Topic;
