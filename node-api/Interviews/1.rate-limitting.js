const rateLimitStore = {};
const WINDOW_SIZE = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

const rateLimiter = (req, res, next) => {
  const ip = req.ip;
  const currentTime = Date.now();

  if (!rateLimitStore[ip]) {
    rateLimitStore[ip] = {
      count: 1,
      startTime: currentTime,
    };
  } else {
    const timeDiff = currentTime - rateLimitStore[ip].startTime;

    if (timeDiff > WINDOW_SIZE) {
      // Reset after window
      rateLimitStore[ip] = {
        count: 1,
        startTime: currentTime,
      };
    } else {
      rateLimitStore[ip].count += 1;
    }
  }

  if (rateLimitStore[ip].count > MAX_REQUESTS) {
    return res.status(429).json({
      message: 'Too many requests. Try again later.',
    });
  }

  next();
};

module.exports = rateLimiter;
