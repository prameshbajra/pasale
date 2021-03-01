const serverless = require('serverless-http');
const express = require('express');
const app = express();

console.log("Lambda Invoked");

app.get('/addItemToDB', function (req, res) {
    console.log("Response : ", req);
    res.send('Hello World!')
});

module.exports.addItemToDB = serverless(app);