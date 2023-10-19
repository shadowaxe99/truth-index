import React from 'react';
import { LineChart, Line } from 'recharts';

const LineChartComponent = ({ data }) => {
  return (
    <LineChart width={500} height={300} data={data}>
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  );
};

export default LineChartComponent;