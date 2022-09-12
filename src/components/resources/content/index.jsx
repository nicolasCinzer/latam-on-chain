import React from 'react';

import Posts from './posts';

const Content = ({ params }) => {
  const { id } = params;

  return <>{id ? <Posts id={id} /> : <></>}</>;
};

export default Content;
