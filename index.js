
const express = require('express');
const app = express();
const signuprouter = require('./routes/Signup');
const loginrouter = require('./routes/Login');
const authrouter = require('./routes/Authentication');
const { createadminaccount } = require('./scripts/setup');
db = require('./configuration/db');

app.use(express.json());

createadminaccount();
app.use('/user', signuprouter);
app.use('/auth', loginrouter);
app.use('/api', authrouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`app listening on ${port}!`);
});
