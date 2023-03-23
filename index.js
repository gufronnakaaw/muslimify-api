const express = require('express');
const app = express();
const port = process.env.PORT || 3000 || 5000;
const api = require('./src/routes/api');
const apiv2 = require('./src/routes/apiv2');
const cors = require('cors');

app.use(
  cors({
    origin: '*',
    methods: ['GET'],
  })
);

app.get('/', (req, res) => {
  return res.status(200).json({
    status: 'success',
    author: 'Gufronnaka Arif Wildan',
    github: 'gufronnakaaw',
    instagram: 'gufronnakaaw',
  });
});

app.use('/api/v1', api);
app.use('/api/v2', apiv2);

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
