import React from 'react';

import Post1 from './posts/que-es-blockchain';

const Content = ({ params }) => {
  const { id } = params;

  return (
    <>
      {id === 'que-es-blockchain' ? <Post1 /> : <></>}
      {id === 'por-que-es-buena-idea-aprender-solidity-para-este-2023' ? (
        <div>solidity</div>
      ) : (
        <></>
      )}
      {id === 'que-es-bitcoin' ? <div>bitcoin</div> : <></>}
    </>
  );
};

export default Content;
