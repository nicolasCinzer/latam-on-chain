import React from 'react';

const Stack = ({ icons }) => {
  return (
    <div className='grid grid-cols-1 place-content-center w-3/4 lg:py-4 lg:flex lg:justify-between'>
      <div className='grid place-content-center mx-4 px-4 lg:pb-4'>
        <div className='flex justify-center m-4 pd-1 text-2xl font-thin border-b border-cyan-200'>
          Stack
        </div>
        <div className='grid grid-cols-3 gap-x-5 gap-y-5 text-2xl mb-8 w-36'>
          {icons}
        </div>
        <button className='border rounded-xl border-cyan-200 hover:shadow-lg'>
          Ver mas
        </button>
      </div>
      <div className='p-4 text-center'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
        quasi, magni recusandae eaque quod quisquam, autem doloribus at
        accusamus aperiam sequi! Veniam qui sequi odit atque dolorum expedita,
        non quos.
      </div>
    </div>
  );
};

export default Stack;
