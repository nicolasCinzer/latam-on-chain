import React, { useState } from 'react';
import Course from './Course';
import courses from '../../services/coursesArray';

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
