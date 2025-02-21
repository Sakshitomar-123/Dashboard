
// components/TopStats.js

import React from 'react';
import { StatsContainer,StatCard } from '../styled/StatCard.styles';


const TopStats = () => {
  const stats = [
    { title: 'Total Employees', value: '191', color: '#4C6FFF' },
    { title: 'Punched In', value: '83', color: '#00C48C' },
    { title: 'Punched Out', value: '92', color: '#FF6464' },
    { title: 'Inactive', value: '16', color: '#FFB946' }
  ];

  return (
    <>
      <StatsContainer>
      {stats.map(stat => (
        <StatCard key={stat.title} color={stat.color}>
          <h3>{stat.title}</h3>
          <div className="value">{stat.value}</div>
        </StatCard>
      ))}
    </StatsContainer>
</>
  );
};

export default TopStats;
