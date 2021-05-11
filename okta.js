// okta.js


var express = require('express');
const fs = require('fs');
const cors = require('cors');
var app = express();

app.use(cors());
app.use(function(req, res, next) {
    res.header("Acces-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res) {
    res.writeHead(200, { 'Content-Type' : 'text/html' })
    fs.readFile('okta.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        }
        res.end()
    })
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
})
