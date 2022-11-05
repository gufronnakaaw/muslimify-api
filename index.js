const express = require('express');
const app = express();
const port = process.env.PORT || 3000 || 5000;
const api = require('./src/routes/api');
const cors = require('cors');

app.use(
    cors({
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

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});
