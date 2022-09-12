import React from 'react';

import Post1 from './que-es-blockchain';

const Posts = ({ id }) => {
  return <>{id === 'que-es-blockchain' ? <Post1 /> : <></>}</>;
};

export default Posts;
