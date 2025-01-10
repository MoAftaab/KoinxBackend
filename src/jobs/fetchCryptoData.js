const axios = require('axios');
const Crypto = require('../models/crypto');
const mongoose = require('mongoose');
require('dotenv').config();

const fetchCryptoData = async () => {
    try {
        const coins = ['bitcoin', 'matic-network', 'ethereum'];
        const url = `${process.env.COINGECKO_API_URL}?ids=${coins.join(',')}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`;

        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${process.env.COINGECKO_API_KEY}`
            }
        });

        const data = response.data;

        for (const coin of coins) {
            const cryptoData = new Crypto({
                coin: coin,
                price: data[coin].usd,
                marketCap: data[coin].usd_market_cap,
                '24hChange': data[coin].usd_24h_change
            });

            await cryptoData.save();
        }

        console.log('Crypto data fetched and saved successfully');
    } catch (error) {
        console.error('Error fetching crypto data:', error);
    }
};

module.exports = fetchCryptoData;