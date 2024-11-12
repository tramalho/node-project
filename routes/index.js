const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World from Router!!!');
});

router.get('/home', (req, res) => {
    res.render('home', null);
});

router.get('/json', (req, res) => {
    const data = {
        greetings: 'Hello from Router!!!',
    };

    res.json(data);
});

router.get('/content', (req, res) => {
    res.render('content', null);
});

module.exports = router;
