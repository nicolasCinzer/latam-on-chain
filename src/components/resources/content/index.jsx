import React from 'react';

import Post1 from './posts/que-es-blockchain';

const Content = ({ params }) => {
  const { id } = params;

  return <>{id === 'que-es-blockchain' ? <Post1 /> : <></>}</>;
};

export default Content;
