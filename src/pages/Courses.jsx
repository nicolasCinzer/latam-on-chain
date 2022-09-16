import React from 'react';

import courses from '../services/coursesArray';
import Course from '../components/course';

const Courses = () => {
  return (
    <div className='grid p-16 gap-y-8 xl:grid-cols-2 2xl:grid-cols-3 place-items-center'>
      {courses.map(({ url, title, stack, description, language }) => (
        <Course
          key={title}
          url={url}
          title={title}
          stack={stack}
          description={description}
          language={language}
        />
      ))}
    </div>
  );
};

export default Courses;
