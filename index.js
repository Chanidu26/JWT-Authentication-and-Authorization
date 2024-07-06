
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = 8000;

app.listen(port, () => {
    console.log(`app listening on ${port}!`);
});
