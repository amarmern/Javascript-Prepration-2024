const jwt = require('jsonwebtoken');

module.exports = authMiddleWare((req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No Token Provided!' });
    let decoded = jwt.verify(token, 'seceret-key');
    req.user = decoded;
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  next();
});
