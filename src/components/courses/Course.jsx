import React from 'react';
import Stack from './Stack';

/* Icons */
import { SiSolidity, SiJavascript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaHardHat } from 'react-icons/fa';

const Course = ({ url, title }) => {
  return (
    <div className='grid justify-items-center shadow-xl bg-white my-8  py-4 w-3/4'>
      <h3 className='mb-4 text-3xl font-thin'>{title}</h3>
      <iframe
        src={url}
        width='560'
        height='315'
        title={title}
        frameBorder='0'
        allowFullScreen
        className='top-0 left-0 w-1/2'
      />
      <Stack
        icons={[
          <a href={'https://docs.soliditylang.org/en/latest/'} key='solidity'>
            <SiSolidity />
          </a>,
          <a href={'https://nextjs.org/'} key='nextjs'>
            <TbBrandNextjs />
          </a>,
          <a href={'https://www.javascript.com/'} key='javascript'>
            <SiJavascript />
          </a>,
          <a href={'https://hardhat.org/'} key='hardhat'>
            <FaHardHat />
          </a>,
        ]}
      />
    </div>
  );
};

export default Course;
