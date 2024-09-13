
import React from 'react';
import { Box, Grid2 } from '@mui/material';
import ChartCard from './ChartCard';
import Dbcard from './dbcard.js';
const generateFunctionData1 = () => {
  const labels = [];
  const data = [];

  for (let x = -9; x <= 3; x += 0.1) {
    labels.push(x.toFixed(1));
    const y = Math.exp(Math.pow(Math.abs(x), 0.4)) * Math.sin(x); 
    data.push(y);
  }
    

  return { labels, data };
};
const generateFunctionData2 = () => {
  const labels = [];
  const data = [];
  for (let x = -9; x <= 3; x += 0.1) {
    labels.push(x.toFixed(1)); 
    const y = Math.exp(Math.pow(Math.abs(x), 0.4)) * Math.sin(x);
    data.push(y); 
  }

  

return { labels, data };
};
const generateFunctionData3 = () => {
  const labels = [];
  const data = [];

  for (let x = -0.5; x <= 2.5; x += 0.05) {
    labels.push(x.toFixed(1));
    const y = Math.exp(3*x) * Math.cos(2*x); 
    data.push(y);
  }

  

return { labels, data };
};

const Dashboard = () => {
  const barData = {
    labels: ['A','B','C','D','E','F'],
    datasets: [
      {
        label: '2021',
        data: [234,220,700,408,459,500], 
        backgroundColor: '#694bdb',
       
       
      },
      {
        label: '2022',
        data: [100,190,500,390,480,380], 
        backgroundColor: '#2bebc8',
      
      },
    ],
  };
  const barData2 = {
    labels: ['A','B','C','D','E'],
    datasets: [
      {
        label: '2021',
        data: [234,220,700,408,459,500], 
        backgroundColor: '#694bdb',
       
       
      },
      {
        label: '2022',
        data: [100,190,500,390,480,380], 
        backgroundColor: '#2bebc8',
      
      },
    ],
  };
  
  
  const { labels: functionLabels1, data: Data1 } = generateFunctionData1();
  const { labels: functionLabels2, data: Data2 } = generateFunctionData2();
  const { labels: functionLabels3, data: Data3 } = generateFunctionData3(); 
  const lineData1 = {
    labels: functionLabels1,
    datasets: [
      {
        
        data: Data1,
        fill: false,
        borderColor: 'rgba(255,119,119,255)',
        tension: 0.1,
      pointRadius: 0,
      pointStyle: 'line',
      },
    ],
  };

  const lineData2 = {
    labels: functionLabels2,
    datasets: [
      {
        data: Data2,
        fill: false,
        borderColor: '#f3c831',
        tension: 0,
        pointRadius: 0,
      pointStyle: 'line',
      },
    ],
  };
  const lineData3 = {
    labels: functionLabels3,
    datasets: [
      {
       
        data: Data3,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        pointRadius: 0,
      pointStyle: 'line',
      },
    ],
  };

  const doughnutData = {
    labels: ['Group C', 'Group B', 'Group D'],
    datasets: [
      {
        data: [300,300,200],
        backgroundColor: [
          '#2bebc8',
          '#ff7777',
          '#694bdb',
        ],
       
        
      },
    ],
  };

  const options = {
    
    plugins: {
      legend: {
        display: false, 
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false, 
        },
        display: false, 
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false, 
        },
        display: false,
        beginAtZero: true,
      },
    },
  };
  const optionsbar = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, 
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
        },
        ticks: {
          display: false, 
        },
        display: false, 
      },
      y: {
        grid: {
          display: true,
        },
        ticks: {
          display: false, 
        },
        display: true,
        beginAtZero: true,
      },
    },
  };
return (
  <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5', height: '100vh', display: 'grid', gap: '20px', gridTemplateRows: 'auto auto auto' }}>
    
    {/* First Row */}
    <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
      <Dbcard/>
      <ChartCard title="Bar Chart" chartType="bar" data={barData2} options={optionsbar} />
    
    </Box>

    {/* Second Row: 3 Columns */}
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
      <ChartCard title="CHART TITLE" titleno="2643" chartType="line" data={lineData1} options={options} leftText="1.10% since yesterday" />
      <ChartCard title="CHART TITLE" titleno="2643" chartType="line" data={lineData2} options={options} leftText="1.10% since yesterday" />
      <ChartCard title="CHART TITLE" titleno="2643" chartType="line" data={lineData3} options={options} leftText="1.10% since yesterday" />
    </Box>

    {/* Third Row: 2 Columns */}
    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
      <ChartCard title="Bar Chart" chartType="bar" data={barData} options={optionsbar} />
      <ChartCard title="Doughnut Chart" chartType="doughnut" data={doughnutData} options={options} />
    </Box>

  </Box>
);
};
export default Dashboard;

