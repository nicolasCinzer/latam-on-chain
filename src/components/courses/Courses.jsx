import React from 'react';
import Course from './Course';

const Courses = () => {
  return (
    <>
      <h2 className='px-8 py-8 text-3xl font-thin border-b-2 border-cyan-500'>Cursos</h2>
      <div className='grid grid-cols-1 place-items-center'>
        <Course
          url={'https://www.youtube.com/embed/gyMwXuJrbJQ?start=0'}
          title={'Full Stack Blockchain'}
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
