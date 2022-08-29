import React from 'react';

const Stack = ({ icons, description }) => {
  return (
    <div className='grid grid-cols-1 place-content-center w-3/4 md:py-4 md:flex md:justify-between'>
      <div className='grid place-content-center mx-4 px-8 pb-4 bg-ocean-300/50 rounded-2xl shadow'>
        <div className='flex justify-center m-4 text-2xl font-thin border-b border-cyan-200 '>
          Stack
        </div>
        <div className='grid grid-flow-col md:grid-flow-row md:grid-cols-3 gap-x-5 gap-y-5 text-2xl mb-8 w-fit md:mr-0'>
          {icons}
        </div>
        <button className='border rounded-xl border-cyan-200 hover:shadow-md'>
          Ver mas
        </button>
      </div>
      <div className='p-4 text-center'>
        {description}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
        quasi, magni recusandae eaque quod quisquam, autem doloribus at
        accusamus aperiam sequi! Veniam qui sequi odit atque dolorum expedita,
        non quos.
      </div>
    </div>
  );
};

export default Stack;
