const express = require('express');
const path = require('path');
require('express-async-errors');

const app = express();

app.use(require('connect-history-api-fallback')());
app.use(express.static(path.resolve(__dirname, 'static')));

app.use('/api', require('./routes/index'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});