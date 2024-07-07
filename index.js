
const express = require('express');
const app = express();
const cors = require('cors');
const signuprouter = require('./routes/Signup');
db = require('./configuration/db');

app.use(express.json());
app.use('/user', signuprouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`app listening on ${port}!`);
});
