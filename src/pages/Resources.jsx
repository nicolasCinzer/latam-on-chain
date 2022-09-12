import React, { useState } from 'react';

import Resource from '../components/resources/resource';
import Topics from '../components/resources/topics';
import resources from '../services/resourcesArray';

const Resources = () => {
  const [filter, setFilter] = useState('All');

  return (
    <>
      <div className='pt-8 pb-4 px-8 text-2xl'>
        {filter !== 'All' ? `Posteos sobre ${filter}` : 'Ultimos Posteos'}
      </div>
      <div className='grid grid-cols-1 px-4'>
        {resources.map(({ id, topic, icon, title, date }) =>
          filter === 'All' || filter === topic ? (
            <Resource
              key={id}
              id={id}
              topic={topic}
              icon={icon}
              title={title}
              date={date}
            />
          ) : (
            <></>
          )
        )}
      </div>
      <Topics setFilter={setFilter} />
    </>
  );
};

export default Resources;
