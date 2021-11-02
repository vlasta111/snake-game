const db = require('./db.js');

var array = []

var express = require('express');
var app = express();
const cors = require('cors')

array = db.Read();

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(express.json());

app.get('/getData', function(req, res) {
    res.json(array);
});

app.get('/post/:name/:score', function(req, res) {
    array.push({ name: req.params.name,score: req.params.score  });
    db.Write(array);
    res.json("Succes!");
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



app.listen(process.env.PORT || 8080);

console.log(8080)