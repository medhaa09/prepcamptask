import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ChartCard = ({ title, titleno, chartType, data, options, leftText }) => {

  const defaultOptions = {
    maintainAspectRatio: true, 
    responsive: true,
    ...options,
  };

  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return <Bar data={data} options={defaultOptions} />;
      case 'line':
        return <Line data={data} options={defaultOptions} />;
      case 'doughnut':
        return <Doughnut data={data} options={defaultOptions} />;
      default:
        return null;
    }
  };

  return (
    <Card sx={{ margin: '20px', padding: '10px', display: 'flex', flexDirection: 'row' }}>
      <CardContent sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h7" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h4" gutterBottom>
            {titleno}
          </Typography>
          <Typography variant="body2">{leftText}</Typography>
        </Box>
        <Box sx={{ width: '100%', maxWidth: '400px', overflow: 'hidden' }}> 
          {renderChart()}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ChartCard;
