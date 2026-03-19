const express = require('express');

const app = express();
const rateLimitMap = new Map();

function rateLimiter(limit, windowMs) {
  return (req, res, next) => {
    const ip = req.ip;
    const currentTime = Date.now();

    if (!rateLimitMap.has(ip)) {
      rateLimitMap.set(ip, []);
    }

    const timestamps = rateLimitMap
      .get(ip)
      .filter((ts) => currentTime - ts < windowMs);

    timestamps.push(currentTime);
    rateLimitMap.set(ip, timestamps);

    if (timestamps.length > limit) {
      return res.status(429).json({ message: 'Too many requests' });
    }

    next();
  };
}

// usage
app.use(rateLimiter(100, 60 * 1000));
