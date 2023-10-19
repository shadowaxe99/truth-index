import React from 'react';
import { PieChart, Pie } from 'recharts';

const PieChartComponent = ({ data }) => {
  return (
    <PieChart width={400} height={400}>
      <Pie dataKey="value" data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" />
    </PieChart>
  );
};

export default PieChartComponent;