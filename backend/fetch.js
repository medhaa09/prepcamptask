require('dotenv').config();
const axios = require('axios');
const { MongoClient } = require('mongodb');
const url = process.env.MONGODB_URI;
const dbName = 'prepcamp';


const nifty50Stocks = [
  'BHARTIARTL.NS', 'LTIM.NS', 'HDFCLIFE.NS', 'NTPC.NS', 'MARUTI.NS',
        'NESTLEIND.NS', 'BAJFINANCE.NS', 'KOTAKBANK.NS', 'TATASTEEL.NS',
        'ONGC.NS', 'BAJAJ-AUTO.NS', 'LT.NS', 'ITC.NS', 'TCS.NS', 'BRITANNIA.NS',
        'SHRIRAMFIN.NS', 'ADANIENT.NS', 'CIPLA.NS', 'WIPRO.NS', 'INDUSINDBK.NS',
        'ULTRACEMCO.NS', 'TATACONSUM.NS', 'BAJAJFINSV.NS', 'RELIANCE.NS',
        'HEROMOTOCO.NS', 'COALINDIA.NS', 'TITAN.NS', 'HINDALCO.NS',
        'APOLLOHOSP.NS']

const startTime = Math.floor(Date.now() / 1000) - 3600*120; //  4 months ago
const endTime = Math.floor(Date.now() / 1000); // Current time

const fetchStockData = async (symbol) => {
  try {
    const response = await axios.get(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`, {
      params: {
        period1: startTime,
        period2: endTime,
        interval: '1m'
      }
    });



    const chartData = response.data.chart.result[0];
    if (!chartData) {
      throw new Error(`No chart data found for ${symbol}`);
    }

    const { timestamp, indicators } = chartData;
    const quotes = indicators.quote[0];
    const client = new MongoClient(url);
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection(symbol);
    const data = timestamp.map((time, index) => ({
      symbol,
      time: new Date(time * 1000),
      open: quotes.open[index],
      high: quotes.high[index],
      low: quotes.low[index],
      close: quotes.close[index],
      volume: quotes.volume[index]
    }));

    const result = await collection.insertMany(data);
    console.log(`Data inserted for ${symbol}:`, result.insertedCount);
    await client.close();
  } catch (error) {
    console.error(`Error fetching or inserting data for ${symbol}:`, error);
  }
};

const fetchAllStocks = async () => {
  for (const symbol of nifty50Stocks) {
    await fetchStockData(symbol);
  }
};

fetchAllStocks();
