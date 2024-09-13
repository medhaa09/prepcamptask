//this code fetches data from yahoo api and shows it in terminal
const axios = require('axios');

const startTime = Math.floor(Date.now() / 1000) - 3600; // 1 hour ago
const endTime = Math.floor(Date.now() / 1000); // Current time

const fetchStockData = async () => {
  try {
    const response = await axios.get('https://query1.finance.yahoo.com/v8/finance/chart/^NSEI', {
      params: {
        period1: startTime,
        period2: endTime,
        interval: '1m'
      }
    });

    console.log('Result:', response.data.chart.result);
  } catch (error) {
    console.error('Error fetching stock data:', error);
  }
};

fetchStockData();
