
// components/ExpenseOverview.js
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ExpenseCard } from '../styled/ExpenseOverview.styles';

const ExpenseOverview = () => {
  const options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Expense Overview'
    },
    plotOptions: {
      pie: {
        borderWidth: 0,
        colors: ['#4318FF', '#6AD2FF', '#FF6464', '#05CD99','orange']
      }
    },
    series: [{
      name: 'Expenses',
      data: [
        ['Pending', 28.06],
        ['Approved', 10],
        ['Rejected', 2],
        ['Total', 38.06],
        ['Paid Out', 2]
      ]
    }]
  };

  return (
    <ExpenseCard>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </ExpenseCard>
  );
};

export default ExpenseOverview;
