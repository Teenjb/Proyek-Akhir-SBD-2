const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3112;
const app = express();
const session = require('express-session');
const vesmasRouter = require('./src/routes/vesmas.route');
const cors = require('cors');


const corsOptions = {
    origin: '*',
    Credentials: true,
    optionsSuccessStatus: 200
};

app.use(session({
    secret: 'proyeksbd',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge:6000}
    }));

app.use(cors(corsOptions));
//app.use(express.json);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the backend' });
});

app.use('/vesmas', vesmasRouter);

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});