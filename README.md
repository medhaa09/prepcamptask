# Overview
This project is a ReactJS-based frontend application that mirrors the wireframes provided in the Figma link. It utilizes Material-UI (MUI) for styling and ChartJS for data visualization.

# Features
### Component Library
 Material-UI (MUI) for consistent and responsive UI components.
### Charts
Implemented using ChartJS.
### Deployment
The project is deployed and hosted on Vercel. You can view it here: [Prepcamp Task](https://prepcamptask.vercel.app/)

## Project Setup
### Prerequisites
npm (v6 or later)
### Installation
Clone the repository
```
git clone https://github.com/medhaa09/prepcamptask.git
cd prepcamptask
```
### Install dependencies
```
npm install
```
### Run the development server
```
npm start
```
This will start the development server and open the application in your default web browser.
# Backend
#### Backend files are in /backend

## Technologies

- Node.js
- Express
- MongoDB

#### API Endpoint used:
https://query1.finance.yahoo.com/v8/finance/chart/
## features
1. Successfully fetched the NIFTY50 data from the endpoint and stored it in a mongodb database with one collection for each stock in the data.
The collection of the particular stock stores all the data for that stock.
#### code in /backend/fetch.js

2. Made three api endpoints-

   API to fetch individual stock’s latest data entry
```bash
   /stocks/:symbol/latestdata
```

  API to fetch individual stock data for a single day
```bash
  /stocks/:symbol/:date
```


 API to fetch all stock data for a particular stock
```bash
  /stocks/:symbol
```
These are the symbols for making api calls: ['BHARTIARTL.NS', 'LTIM.NS', 'HDFCLIFE.NS', 'NTPC.NS', 'MARUTI.NS',
 'NESTLEIND.NS', 'BAJFINANCE.NS', 'KOTAKBANK.NS', 'TATASTEEL.NS',
 'ONGC.NS', 'BAJAJ-AUTO.NS', 'LT.NS', 'ITC.NS', 'TCS.NS', 'BRITANNIA.NS',
 'SHRIRAMFIN.NS', 'ADANIENT.NS', 'CIPLA.NS', 'WIPRO.NS', 'INDUSINDBK.NS',
 'ULTRACEMCO.NS', 'TATACONSUM.NS', 'BAJAJFINSV.NS', 'RELIANCE.NS',
 'HEROMOTOCO.NS', 'COALINDIA.NS', 'TITAN.NS', 'HINDALCO.NS',
 'APOLLOHOSP.NS']
#### code in backend/server.js
## Project Setup
### Prerequisites
node.js
### Installation
Clone the repository
```
git clone https://github.com/medhaa09/prepcamptask.git
cd prepcamptask/backend
```
### Install dependencies
```
npm install
```
### Setup Environment Variables
Create a .env file in the backend directory with the following content:
```bash
MONGODB_URI=your_mongodb_connection_string
```
Replace your_mongodb_connection_string with the connection string to your MongoDB database.

### Running the Server
To start the backend server, run:

```bash
node server.js
```
The server will start running on http://localhost:3000.

### example API endpoints
Fetch individual stock data for a specific day

```bash
http://localhost:3000/stocks/CIPLA.NS/2024-09-09
```

Fetch the latest stock data for a specific stock

```bash
http://localhost:3000/stocks/CIPLA.NS/latestdata
```

Fetch all stock data for a specific stock
```bash
http://localhost:3000/stocks/CIPLA.NS
```




