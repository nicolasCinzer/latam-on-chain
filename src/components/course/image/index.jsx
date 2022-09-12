import React from 'react';

/* Images */
import gyMwXuJrbJQ from '../../../images/jpg/gyMwXuJrbJQ.jpg';
import FAMWIoKvfRs from '../../../images/jpg/FAMWIoKvfRs.jpg';

const Image = ({ url, title }) => {
  const URL_ID = url.split('v=')[1];

  return (
    <>
      {URL_ID === 'gyMwXuJrbJQ' ? (
        <a
          href={url}
          target='_blank'
          rel='noreferrer'
          className='max-h-[466px] lg:max-h-fit'
        >
          <img
            alt={title}
            src={gyMwXuJrbJQ}
            className='rounded-br-2xl'
          />
        </a>
      ) : (
        <></>
      )}
      {URL_ID === 'FAMWIoKvfRs' ? (
        <a
          href={url}
          target='_blank'
          rel='noreferrer'
          className='max-h-[466px] lg:max-h-fit' 
        >
          <img
            alt={title}
            src={FAMWIoKvfRs}
            className='rounded-br-2xl '
          />
        </a>
      ) : (
        <></>
      )}
    </>
  );
};

export default Image;
