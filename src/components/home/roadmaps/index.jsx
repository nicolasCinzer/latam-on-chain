import React from 'react';

import RoadmapBubble from './roadmapBubble';

const Roadmaps = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-center text-3xl'>ROADMAPS</div>
      <div className='grid grid-cols-3'>
        <RoadmapBubble
          title={'Blockchain'}
          description={'Aprende desarrollo Blockchain paso a paso!'}
        />
        <RoadmapBubble
          title={'Solidity'}
          description={'Aprende a desarrollar en Solidity paso a paso!'}
        />
        <RoadmapBubble
          title={'Solidity'}
          description={'Aprende a desarrollar en Solidity paso a paso!'}
        />
        <RoadmapBubble
          title={'Solidity'}
          description={'Aprende a desarrollar en Solidity paso a paso!'}
        />
        
      </div>
    </div>
  );
};

export default Roadmaps;
