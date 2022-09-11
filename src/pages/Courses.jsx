import React from 'react';

import courses from '../services/coursesArray';
import Course from '../components/course';

const Courses = () => {
  return (
    <div className='grid px-16 xl:grid-cols-2 place-items-center'>
      {courses.map(({ url, title, stack, description }) => (
        <Course
          key={title}
          url={url}
          title={title}
          stack={stack}
          description={description}
        />
      ))}
    </div>
  );
};

export default Courses;
