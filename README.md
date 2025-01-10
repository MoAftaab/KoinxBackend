# Crypto App

## Overview
This project is a Node.js application that fetches cryptocurrency data from the CoinGecko API and stores it in a MongoDB database. It provides APIs to retrieve the latest cryptocurrency statistics and calculate the standard deviation of prices.

## Project Structure
```
crypto-app
├── src
│   ├── jobs
│   │   └── fetchCryptoData.js
│   ├── routes
│   │   └── index.js
│   ├── models
│   │   └── crypto.js
│   ├── controllers
│   │   ├── statsController.js
│   │   └── deviationController.js
│   └── app.js
├── config
│   └── db.js
├── package.json
├── .env
├── .gitignore
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd crypto-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   COINGECKO_API_URL=https://api.coingecko.com/api/v3/simple/price
   COINGECKO_API_KEY= <your_api_key>
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```

2. The application will fetch cryptocurrency data every 2 hours and store it in the database.

## API Endpoints

- **GET /api/stats**
  - Query Params: `coin` (e.g., `bitcoin`, `matic-network`, `ethereum`)
  - Returns the latest data about the requested cryptocurrency.
  - **Example Request**:
    ```powershell
    curl.exe -X GET "http://localhost:3000/api/stats?coin=bitcoin"
    ```
  - **Example Response**:
    ```json
    {
        "price": 40000,
        "marketCap": 800000000,
        "24hChange": 3.4
    }
    ```

- **GET /api/deviation**
  - Query Params: `coin` (e.g., `bitcoin`, `matic-network`, `ethereum`)
  - Returns the standard deviation of the price of the requested cryptocurrency for the last 100 records.
  - **Example Request**:
    ```powershell
    curl.exe -X GET "http://localhost:3000/api/deviation?coin=bitcoin"
    ```
  - **Example Response**:
    ```json
    {
        "deviation": 4082.48
    }
    ```
