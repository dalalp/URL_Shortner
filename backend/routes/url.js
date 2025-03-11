const express = require('express');
const shortid = require('shortid');
const URL = require('../models/url');
const redisClient = require('../services/cache');

const router = express.Router();

// Shorten URL
router.post('/shorten', async (req, res) => {
    const { longUrl } = req.body;
    
    if (!longUrl) return res.status(400).json({ error: 'URL is required' });

    const shortCode = shortid.generate();

    await URL.create({ shortCode, longUrl });

    redisClient.setex(shortCode, 3600, longUrl); // Cache for 1 hour

    res.json({ shortUrl: `http://localhost:5000/${shortCode}` });
});

// Redirect to Original URL
router.get('/:shortCode', async (req, res) => {
    const { shortCode } = req.params;

    redisClient.get(shortCode, async (err, longUrl) => {
        if (longUrl) {
            await URL.increment('clicks', { where: { shortCode } });
            return res.redirect(longUrl);
        }

        const urlEntry = await URL.findOne({ where: { shortCode } });

        if (urlEntry) {
            redisClient.setex(shortCode, 3600, urlEntry.longUrl); // Re-cache
            return res.redirect(urlEntry.longUrl);
        }

        res.status(404).json({ error: 'Short URL not found' });
    });
});

module.exports = router;
