const express = require('express');
require('dotenv').config();
const moment = require('moment');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

const url = process.env.MONGODB_URI;
const dbName = 'prepcamp';
const client = new MongoClient(url);

let db;

client.connect()
  .then(() => {
    console.log('Connected to MongoDB');
    db = client.db(dbName);
  })
  .catch(err => console.error('Error connecting to MongoDB', err));
app.use(express.json());

// API to fetch individual stock’s latest data entry
app.get('/stocks/:symbol/latestdata', async (req, res) => {
    const { symbol } = req.params;
    try {
      const collection = db.collection(symbol);
      const data = await collection.find().sort({ time: -1 }).limit(1).toArray();
      res.json(data[0]);
      console.log("fetched individual stock latest data entry: " ,data[0])
    } catch (error) {
      res.status(500).send('Error fetching data: ' + error.message);
    }
  });

// API to fetch individual stock data for a single day
app.get('/stocks/:symbol/:date', async (req, res) => {
  const { symbol, date } = req.params;
  try {
    const collection = db.collection(symbol);
    const startOfDay = moment(date).startOf('day').toDate();
    const endOfDay = moment(date).endOf('day').toDate();

    const data = await collection.find({
      symbol: symbol,
      time: { $gte: startOfDay, $lte: endOfDay }
    }).toArray();
    res.json(data);
    console.log("fetched individual stock data for a single day")
  } catch (error) {
    res.status(500).send('Error fetching data: ' + error.message);
  }
});


// API to fetch all stock data
app.get('/stocks/:symbol', async (req, res) => {
    const { symbol } = req.params;
    console.log(symbol)
  try {
    const collection = db.collection(symbol);
    const data = await collection.find({}).toArray();
    res.json(data);
    console.log('fetched data:' ,data)
  } catch (error) {
    res.status(500).send('Error fetching data: ' + error.message);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
