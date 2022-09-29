const fetchResources = () => {
  return fetch('http://localhost:3000/api/resources')
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      return res;
    });
};

export default fetchResources;