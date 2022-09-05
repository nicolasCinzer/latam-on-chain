import React from 'react';

const index = ({ title, description }) => {
  return (
    <div className='w- py-2 px-4 m-2 border-2 border-emerald-400/60 rounded-xl '>
      <div className='text-2xl'>{title}</div>
      <div>{description}</div>
    </div>
  );
};

export default index;
