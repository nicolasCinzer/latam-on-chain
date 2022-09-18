import React from 'react';

import ScrollToTop from '../../utils/scrollToTop';

/* Posts */


const Content = ({ params }) => {
  const { id } = params;

  return (
    <div className='py-8 pl-12 pr-16'>
      {id === 'que-es-blockchain' ? <div>blokchain</div> : <></>}
      {id === 'por-que-es-buena-idea-aprender-solidity-para-este-2023' ? (
        <div>solidity</div>
      ) : (
        <></>
      )}
      {id === 'que-es-bitcoin' ? <div>bitcoin</div> : <></>}
      <ScrollToTop />
    </div>
  );
};

export default Content;
