import React from 'react';
import Course from './Course';

const Courses = () => {
  return (
    <>
      <h2>Courses</h2>
      <Course
        url={'https://www.youtube.com/embed/gyMwXuJrbJQ?start=0'}
        title={'Blockchain32hrs'}
      />
    </>
  );
};

export default Courses;
