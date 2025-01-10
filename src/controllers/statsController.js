// filepath: /c:/Users/Mohd Aftaab/koinx-backend/crypto-app/src/controllers/statsController.js
const Crypto = require('../models/crypto');

exports.getStats = async (req, res) => {
    try {
        const coin = req.query.coin;
        const latestData = await Crypto.findOne({ coin }).sort({ createdAt: -1 });

        if (!latestData) {
            return res.status(404).json({ message: 'Data not found' });
        }

        res.json({
            price: latestData.price,
            marketCap: latestData.marketCap,
            '24hChange': latestData['24hChange']
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};