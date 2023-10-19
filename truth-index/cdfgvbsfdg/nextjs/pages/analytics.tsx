import React from 'react';
import { fetchData } from '../api';
import { processData } from '../utils';
import { BarChart, LineChart, PieChart } from '../components';
import { Filter, Sort, DrillDown } from '../components';
import { ResponsiveContainer } from 'recharts';

const Analytics = () => {
  const [data, setData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [sortedData, setSortedData] = React.useState([]);
  const [drillDownData, setDrillDownData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await fetchData();
        const processedData = processData(response);
        setData(processedData);
        setFilteredData(processedData);
        setSortedData(processedData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromAPI();
  }, []);

  const handleFilter = (filterValue) => {
    const filtered = data.filter((item) => item.category === filterValue);
    setFilteredData(filtered);
    setSortedData(filtered);
    setDrillDownData([]);
  };

  const handleSort = (sortValue) => {
    const sorted = [...sortedData].sort((a, b) => {
      if (sortValue === 'asc') {
        return a.value - b.value;
      } else if (sortValue === 'desc') {
        return b.value - a.value;
      }
    });
    setSortedData(sorted);
    setDrillDownData([]);
  };

  const handleDrillDown = (drillDownValue) => {
    const drilledDown = data.filter((item) => item.category === drillDownValue);
    setDrillDownData(drilledDown);
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Analytics Dashboard</h1>
          <Filter onFilter={handleFilter} />
          <Sort onSort={handleSort} />
          <DrillDown onDrillDown={handleDrillDown} />
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={sortedData} />
          </ResponsiveContainer>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={filteredData} />
          </ResponsiveContainer>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart data={drillDownData.length > 0 ? drillDownData : data} />
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
};

export default Analytics;