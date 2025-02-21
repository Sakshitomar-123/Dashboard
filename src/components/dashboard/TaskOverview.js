
// components/TaskStatus.js
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { TaskCard } from '../styled/StatCard.styles';



const TaskStatus = () => {
  const options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Task Status Overview'
    },
    series: [{
      name: 'Tasks',
      data: [
        ['Not Started', 6],
        ['In Progress', 2],
        ['Completed', 2]
      ]
    }]
  };

  return (
    <TaskCard>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </TaskCard>
  );
};

export default TaskStatus;
