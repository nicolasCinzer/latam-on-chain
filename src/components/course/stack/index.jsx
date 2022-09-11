import React from 'react';
import StackIcons from './stackIcons';

const Stack = ({ icons, description }) => {
  return (
    <div className='grid grid-cols-1 place-content-center w-full md:py-4 md:flex md:justify-between'>
      <div className='grid place-content-center mx-4 px-8 pb-4 rounded-2xl'>
        <div className='flex justify-center m-4 text-2xl font-light'>Stack</div>
        <div className='grid grid-flow-col md:grid-flow-row md:grid-cols-3 gap-x-5 gap-y-5 text-2xl mb-8 w-fit md:mr-0'>
          <StackIcons icons={icons} />
        </div>
        <button className='border rounded-xl bg-emerald-400/60 transition-all hover:scale-110'>
          Ver mas
        </button>
      </div>
      <div className='p-4 text-lg text-center font-light'>{description}</div>
    </div>
  );
};

export default Stack;
