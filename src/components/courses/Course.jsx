import React from 'react';
import Stack from './Stack';

/* Icons */
import { SiSolidity, SiJavascript, SiTailwindcss } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaHardHat } from 'react-icons/fa';

const Course = ({ url, title }) => {
  return (
    <div className='grid justify-items-center shadow bg-ocean-200 my-8 py-4 w-3/4 lg:max-w-4xl rounded-3xl border-l-2 border-b-2 border-ocean-300 '>
      <h3 className='mb-3 pb-1 text-3xl font-bold'>
        {title}
      </h3>
      <iframe
        src={url}
        width='560'
        height='400'
        title={title}
        frameBorder='0'
        allowFullScreen
        className='w-3/4 '
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
          <a href={'https://tailwindcss.com/'} key='tailwind'>
            <SiTailwindcss />
          </a>,
        ]}
      />
    </div>
  );
};

export default Course;
