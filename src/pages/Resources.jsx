import React, { useState, useEffect } from 'react';

import Resource from '../components/resources/resource';
import Topics from '../components/resources/topics';
import fetchResources from '../services/fetchResources';

const Resources = () => {
  const [filter, setFilter] = useState('All');
  const [resources, setResources] = useState(null);

  useEffect(() => {
    fetchResources().then((res) => {
      console.log(res);
      setResources(res);
    });
  }, []);

  return (
    <>
      <div className='pt-8 pb-4 px-8 text-2xl'>
        {filter !== 'All' ? `Posteos sobre ${filter}` : 'Ultimos Posteos'}
      </div>
      <div className='grid grid-cols-1 2xl:grid-cols-2 2xl:w-4/5 px-4'>
        {resources ? (
          resources.map(({ id, topic, icon, title, date, hosted }) =>
            filter === 'All' || filter === topic ? (
              <Resource
                key={id}
                id={id}
                topic={topic}
                icon={icon}
                title={title}
                date={date}
                hosted={hosted}
              />
            ) : (
              <></>
            )
          )
        ) : (
          <></>
        )}
      </div>
      <Topics setFilter={setFilter} />
    </>
  );
};

export default Resources;
