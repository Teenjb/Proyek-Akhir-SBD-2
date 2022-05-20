const express = require('express');
const pg = require('pg');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3112;
const app = express();
const vesmasRouter = require('./src/routes/vesmas.route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the backend' });
});

app.use('/vesmas', vesmasRouter);

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});