import React from 'react';

const index = ({ title, description }) => {
  return (
    <div className='py-2 px-4 my-4 mx-8 border-b-2 border-l-2 border-emerald-400 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-emerald-400/60'>
      <div className='text-2xl'>{title}</div>
      <div className='text-base'>{description}</div>
    </div>
  );
};

export default index;
