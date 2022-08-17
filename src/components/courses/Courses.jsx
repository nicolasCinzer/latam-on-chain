import React from 'react';
import Course from './Course';

const Courses = () => {
  return (
    <>
      <h2 className='px-8 pt-8 text-3xl font-thin'>Cursos</h2>
      <div className='flex flex-wrap justify-center'>
        <Course
          url={'https://www.youtube.com/embed/gyMwXuJrbJQ?start=0'}
          title={'Curso Full Stack Blockchain'}
        />
        <Course
          url={'https://www.youtube.com/embed/gyMwXuJrbJQ?start=0'}
          title={'Blockchain 32hrs Course'}
        />
      </div>
    </>
  );
};

export default Courses;
