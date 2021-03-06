const express = require('express');
const _ = require('lodash')
const bodyParser = require('body-parser');
const path = require('path');
const quizData = require('./data.json');

const app = express();
app.use(express.static(path.join(__dirname, '../build')));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/v1/quiz', (req, res) => {
    res.json(quizData.map(o => _.omit(o, ['correct_option'])));
});
app.post('/api/v1/quiz/validate', (req, res) => {
    const { id, option } = req.body;
    const data = quizData.find(o => o.id === id);
    if (data && data.correct_option === option) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});
// The "catchall" handler: for any request that doesn't
// match one above, send back React's build/index.html file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
app.listen(process.env.PORT || 3001)