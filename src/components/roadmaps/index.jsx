import React from 'react';

/* Roadmaps */
import Blockchain from './blockchain';

const Roadmaps = ({ params }) => {
  const { title } = params;

  return (
    <>
      {title === 'Blockchain' ? <Blockchain /> : <></>}
      {title === 'Solidity' ? <div>solidity</div> : <></>}
    </>
  );
};

export default Roadmaps;
