import React from 'react';
import { Bar } from 'recharts';

const BarChart = ({ data }) => {
  return (
    <BarChart width={500} height={300} data={data}>
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChart;