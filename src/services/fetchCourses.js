const fetchCourses = () => {
  return fetch('http://localhost:3000/api/courses')
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      return res;
    });
};

export default fetchCourses;
