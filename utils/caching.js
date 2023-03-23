const NodeCache = require('node-cache');
const cache = new NodeCache();

function caching(duration) {
  return (req, res, next) => {
    if (req.method !== 'GET') {
      return next();
    }

    const key = req.originalUrl;
    const cacheResponse = cache.get(key);

    if (cacheResponse) {
      // console.log('cache hit for ' + key);
      const { code } = JSON.parse(cacheResponse);
      return res.status(code).send(cacheResponse);
    } else {
      // console.log('cache miss for ' + key);
      res.originalSend = res.send;
      res.send = (body) => {
        res.originalSend(body);
        cache.set(key, body, duration);
      };
      return next();
    }
  };
}

module.exports = caching;
