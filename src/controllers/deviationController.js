// filepath: /c:/Users/Mohd Aftaab/koinx-backend/crypto-app/src/controllers/deviationController.js
const Crypto = require('../models/crypto');
const { std } = require('mathjs');

exports.getDeviation = async (req, res) => {
    try {
        const coin = req.query.coin;
        const data = await Crypto.find({ coin }).sort({ createdAt: -1 }).limit(100);

        if (data.length === 0) {
            return res.status(404).json({ message: 'Data not found' });
        }

        const prices = data.map(record => record.price);
        const deviation = std(prices);

        res.json({ deviation });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};