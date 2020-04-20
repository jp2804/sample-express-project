const express = require('express');
const cors = require('cors');
const config = require('./config');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const indexRouter = require('./routes/index.js');

app.use('/api', indexRouter);

app.listen(config.port, () => console.log(`App listening at http://localhost:${config.port}`));
