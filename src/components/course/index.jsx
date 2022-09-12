import React from 'react';
import Stack from './stack';
import Image from './image';

const Course = ({ url, title, stack, description }) => {
  return (
    <div className='grid justify-items-center h-full mx-8 pb-4 rounded-2xl shadow-md overflow-hidden'>
      <Image url={url} title={title} />
      <h3 className='my-3 md:mb-0 pl-2 text-2xl font-medium border-b border-l rounded border-emerald-400/60 transition-all duration-300 hover:shadow-md'>
        {title}
      </h3>
      <Stack icons={stack} description={description} />
    </div>
  );
};

export default Course;
