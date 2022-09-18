import React from 'react';
import { useLocation } from 'wouter';

const Resource = ({ id, icon, title, date, hosted }) => {
  const [path, pushLocation] = useLocation();

  const handleClick = () => {
    pushLocation(`${path}/${id}`);
  };

  return (
    <>
      {hosted === 'local' ? (
        <div
          onClick={handleClick}
          className='flex flex-col w-2/3 2xl:w-11/12 px-4 py-2 mx-4 my-2 rounded-lg cursor-pointer transition-all duration-300 group hover:bg-emerald-400/60'
        >
          <div className='flex items-center'>
            <div className='text-2xl group-hover:animate-pulse'>{icon}</div>
            <div
              className={`ml-4 text ${
                title.length > 80 ? 'text-base' : 'text-lg'
              }`}
            >
              {title}
            </div>
          </div>
          <div className='mt-2 text-sm text-emerald-800'>{date}</div>
        </div>
      ) : (
        <a
          href='https://stump-rhythm-58f.notion.site/Blockchain-Ethereum-by-Barbara-Bruera-86dd7d2506e9441795d185f12dae02f3'
          target='_blank'
          rel='noreferrer'
          className='flex flex-col w-2/3 2xl:w-11/12 px-4 py-2 mx-4 my-2 rounded-lg cursor-pointer transition-all duration-300 group hover:bg-emerald-400/60'
        >
          <div className='flex items-center'>
            <div className='text-2xl group-hover:animate-pulse'>{icon}</div>
            <div
              className={`ml-4 text ${
                title.length > 80 ? 'text-base' : 'text-lg'
              }`}
            >
              {title}
            </div>
          </div>
          <div className='mt-2 text-sm text-emerald-800'>{date}</div>
        </a>
      )}
    </>
  );
};

export default Resource;
