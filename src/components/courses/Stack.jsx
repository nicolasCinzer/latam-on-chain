import React from 'react';

const Stack = ({ icons }) => {
  return (
    <div className='flex justify-between w-1/2 py-4'>
      <div className='grid place-content-center ml-4 mr-12 border-r-2 border-b-2 px-4 pb-4'>
        <div className='flex justify-center m-2 text-2xl font-thin'>Stack</div>
        <div className='flex gap-4 text-2xl mb-8'>{icons}</div>
        <button className='border rounded-xl border-slate-400'>Ver mas</button>
      </div>
      <div className='p-4 border-r-2 border-b-2'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
        quasi, magni recusandae eaque quod quisquam, autem doloribus at
        accusamus aperiam sequi! Veniam qui sequi odit atque dolorum expedita,
        non quos.
      </div>
    </div>
  );
};

export default Stack;
