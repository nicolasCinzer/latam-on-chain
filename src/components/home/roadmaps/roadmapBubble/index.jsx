import React from 'react';

const index = ({ title, description }) => {
  return (
    <div className='py-2 px-4 my-4 mx-8 bg-emerald-400/60 border-2 border-emerald-400 rounded-xl cursor-pointer'>
      <div className='text-2xl'>{title}</div>
      <div className='text-base'>{description}</div>
    </div>
  );
};

export default index;
