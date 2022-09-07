import React from 'react';

const Resource = ({ id, icon, title, date }) => {
  console.log(title.length);
  return (
    <div className='flex flex-col w-2/3 px-4 py-2 mx-4 my-2 rounded-lg cursor-pointer transition-all duration-300 group hover:bg-emerald-400/60'>
      <div className='flex items-center'>
        <div className='text-2xl group-hover:animate-pulse'>{icon}</div>
        <div
          className={`ml-4 text ${title.length > 80 ? 'text-base' : 'text-lg'}`}
        >
          {title}
        </div>
      </div>
      <div className='mt-2 text-sm text-emerald-800'>{date}</div>
    </div>
  );
};

export default Resource;
