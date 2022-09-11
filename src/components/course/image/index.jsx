import React from 'react';

/* Images */
import gyMwXuJrbJQ from '../../../images/jpg/gyMwXuJrbJQ.jpg';
import FAMWIoKvfRs from '../../../images/jpg/FAMWIoKvfRs.jpg';

const Image = ({ url, title }) => {
  const URL_ID = url.split('v=')[1];

  return (
    <>
      {URL_ID === 'gyMwXuJrbJQ' ? (
        <a href={url} target='_blank' rel='noreferrer'>
          <img alt={title} src={gyMwXuJrbJQ} />
        </a>
      ) : (
        <></>
      )}
      {URL_ID === 'FAMWIoKvfRs' ? (
        <a href={url} target='_blank' rel='noreferrer'>
          <img alt={title} src={FAMWIoKvfRs} target='blank' className='' />
        </a>
      ) : (
        <></>
      )}
    </>
  );
};

export default Image;
