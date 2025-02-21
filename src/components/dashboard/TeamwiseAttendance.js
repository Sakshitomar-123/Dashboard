
// components/TeamAttendance.js
import React from 'react';
import { TeamCard ,TeamRow,ProgressBar} from '../styled/StatCard.styles';



const TeamAttendance = () => {
  const teams = [
    {
      name: 'Default',
      punchedIn: 63,
      inactive: 14,
      punchedOut: 64
    },
    {
      name: 'Sales',
      punchedIn: 10,
      inactive: 4,
      punchedOut: 6
    },
    {
      name: 'Development',
      punchedIn: 50,
      inactive: 14,
      punchedOut: 30
    }, {
      name: 'Backend',
      punchedIn: 16,
      inactive: 1,
      punchedOut: 6
    },

  ];

  return (
    <TeamCard>
      <h2>Teamwise Attendance</h2>
      {teams.map(team => (
        <TeamRow key={team.name}>
          <div className="team-name">{team.name}</div>
          <div className="stats">
            <div className="stat">
              <div className="dot" style={{ background: '#00C48C' }}></div>
              {team.punchedIn}
            </div>
            <div className="stat">
              <div className="dot" style={{ background: '#FFB946' }}></div>
              {team.inactive}
            </div>
            <div className="stat">
              <div className="dot" style={{ background: '#FF6464' }}></div>
              {team.punchedOut}
            </div>
          </div>
          <ProgressBar 
            color="#00C48C"
            percentage={(team.punchedIn / (team.punchedIn + team.inactive + team.punchedOut)) * 100}
          >
            <div className="fill"></div>
          </ProgressBar>
        </TeamRow>
      ))}
    </TeamCard>
  );
};

export default TeamAttendance;