import React from 'react';
import { useLocation } from 'wouter';

const RoadmapBubble = ({ title, description }) => {
  const [, pushLocation] = useLocation();

  const handleClick = () => {
    pushLocation(`roadmaps/${title}`);
  };

  return (
    <div
      className='py-2 px-4 my-4 mx-8 border-b-4 border-l-4 border-t border-r border-emerald-400 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-emerald-400/60'
      onClick={handleClick}
    >
      <div className='text-2xl'>{title}</div>
      <div className='text-base'>{description}</div>
    </div>
  );
};

export default RoadmapBubble;
