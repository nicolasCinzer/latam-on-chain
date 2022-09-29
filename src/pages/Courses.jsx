import React, { useState, useEffect } from 'react';

import fetchCourses from '../services/fetchCourses';
import Course from '../components/course';

const Courses = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    fetchCourses().then((res) => {
      console.log(res);
      setCourses(res);
    });
  }, []);

  return (
    <div className='grid p-16 gap-y-8 xl:grid-cols-2 2xl:grid-cols-3 place-items-center'>
      {courses ? (
        courses.map(({ url, title, stack, description, language }) => (
          <Course
            key={title}
            url={url}
            title={title}
            stack={stack}
            description={description}
            language={language}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default Courses;
