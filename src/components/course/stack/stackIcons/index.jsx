import React from 'react';

import { SiSolidity, SiJavascript, SiTailwindcss } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaHardHat } from 'react-icons/fa';

const StackIcons = ({ icons }) => (
  <>
    {icons.map((icon) => {
      return (
        <>
          {icon === 'solidity' ? (
            <a href={'https://docs.soliditylang.org/en/latest/'} key='solidity'>
              <SiSolidity />
            </a>
          ) : (
            <></>
          )}
          {icon === 'javascript' ? (
            <a href={'https://www.javascript.com/'} key='javascript'>
              <SiJavascript />
            </a>
          ) : (
            <></>
          )}
          {icon === 'tailwindcss' ? (
            <a href={'https://tailwindcss.com/'} key='tailwind'>
              <SiTailwindcss />
            </a>
          ) : (
            <></>
          )}
          {icon === 'nextjs' ? (
            <a href={'https://nextjs.org/'} key='nextjs'>
              <TbBrandNextjs />
            </a>
          ) : (
            <></>
          )}
          {icon === 'hardhat' ? (
            <a href={'https://hardhat.org/'} key='hardhat'>
              <FaHardHat />
            </a>
          ) : (
            <></>
          )}
        </>
      );
    })}
  </>
);

export default StackIcons;
