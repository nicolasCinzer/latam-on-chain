import React from 'react';

const ScrollToTop = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      onClick={handleClick}
      className='fixed right-6 bottom-0 h-fit text-2xl font-thin cursor-pointer group'
    >
      <div className='h-0 transition-all duration-200 group-hover:h-3 group-hover:text-emerald-800'>
        ^
      </div>
      <div className='h-0 transition-all duration-200 group-hover:h-3 group-hover:text-emerald-800'>
        ^
      </div>
      <div className='group-hover:text-emerald-800'>^</div>
    </div>
  );
};

export default ScrollToTop;
