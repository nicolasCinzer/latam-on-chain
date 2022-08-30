import React from 'react';

import courses from '../../services/coursesArray';
import Course from './Course';

const Courses = () => {
  return (
    <>
      <div className='grid grid-cols-1 xl:grid-cols-2 place-items-center'>
        {courses.map(({ url, title }) => (
          <Course url={url} title={title} />
        ))}
      </div>
    </>
  );
};

export default Courses;
