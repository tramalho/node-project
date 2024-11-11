const express = require('express');
const app = express();
const path = require('node:path');
const hoganMiddleware = require('hogan-middleware');

// Set the directory where the template files are located
app.set('views', path.join(__dirname, 'views'));
app.set("view engine" , "mustache");
app.engine("mustache", hoganMiddleware.__express);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/home', (req, res) => {
    res.render('home', null);
});

app.get('/json', (req, res) => {
    const data = {
        greetings: 'Hello!!!',
    };

    res.json(data);
});

app.listen(3000);
