import React from 'react';
import Stack from './Stack';
import { SiSolidity, SiJavascript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaHardHat } from 'react-icons/fa';

const Course = ({ url, title }) => {
  return (
    <div className='grid justify-items-center'>
      <h3 className='mb-4 text-3xl'>Blockchain 32hrs Course</h3>
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
          <a href={'https://docs.soliditylang.org/en/latest/'}>
            <SiSolidity key='solidity' />
          </a>,
          <a href={'https://nextjs.org/'}>
            <TbBrandNextjs key='nextjs' />
          </a>,
          <a href={'https://www.javascript.com/'}>
            <SiJavascript key='javascript' />
          </a>,
          <a href={'https://hardhat.org/'}>
            <FaHardHat key='hardhat' />
          </a>,
        ]}
      />
    </div>
  );
};

export default Course;
