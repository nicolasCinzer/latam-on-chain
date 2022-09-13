import React from 'react';

const Roadmaps = ({ params }) => {
  const { title } = params;

  return (
    <>
      {title === 'Blockchain' ? <div>blockchain</div> : <></>}
      {title === 'Solidity' ? <div>solidity</div> : <></>}
    </>
  );
};

export default Roadmaps;
