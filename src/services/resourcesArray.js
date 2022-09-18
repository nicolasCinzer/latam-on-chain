import {
  SiHiveBlockchain,
  SiSolidity,
  SiBitcoin,
  SiEthereum,
} from 'react-icons/si';

const resources = [
  {
    id: 'que-es-blockchain',
    topic: 'Blockchain',
    icon: <SiHiveBlockchain />,
    title: 'Que es Blockchain?',
    date: '6 de Sep 2022',
    hosted: 'local',
  },
  {
    id: 'por-que-es-buena-idea-aprender-solidity-para-este-2023',
    topic: 'Solidity',
    icon: <SiSolidity />,
    title: 'Por que es buena idea aprender Solidity para este 2023?',
    date: '6 de Sep 2022',
    hosted: 'local',
  },
  {
    id: 'que-es-bitcoin',
    topic: 'Bitcoin',
    icon: <SiBitcoin />,
    title: 'Que es Bitcoin?',
    date: '6 de Sep 2022',
    hosted: 'local',
  },
  {
    id: 'como-funciona-la-maquina-virtual-de-ethereum',
    topic: 'Ethereum',
    icon: <SiEthereum />,
    title: 'Como funciona la Maquina Virtual de Ethereum?',
    date: '6 de Sep 2022',
    hosted: 'external',
  },
];

export default resources;
