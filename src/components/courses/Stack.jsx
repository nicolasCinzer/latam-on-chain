import React from 'react';

const Stack = ({ icons }) => {
  return (
    <div className='flex justify-between w-1/2 py-4'>
      <div className='flex-column m-4 mr-12'>
        <div className='flex justify-center m-2 text-2xl'>Stack</div>
        <div className='flex gap-4 text-2xl'>{icons}</div>
      </div>
      <div className='flex-column p-2'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
        quasi, magni recusandae eaque quod quisquam, autem doloribus at
        accusamus aperiam sequi! Veniam qui sequi odit atque dolorum expedita,
        non quos.
      </div>
    </div>
  );
};

export default Stack;
