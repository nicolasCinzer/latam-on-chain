import React from 'react';
import Stack from './stack';
import Image from './image';

const Course = ({ url, title, stack, description, language }) => {
  return (
    <div className='grid justify-items-center h-full mx-8 pb-4 border-b-2 border-l-2  border-emerald-400 rounded-2xl shadow-lg overflow-hidden'>
      <Image url={url} title={title} />
      <h3 className='my-3 md:mb-0 px-2 text-2xl font-medium border-b border-l rounded border-emerald-400/60 shadow-sm transition-all duration-300 hover:shadow-md'>
        {title}
      </h3>
      <Stack icons={stack} description={description} language={language} />
    </div>
  );
};

export default Course;
