const serverless = require('serverless-http');
const express = require('express');
const app = express();

const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({ region: 'ap-south-1' });
const docClient = new AWS.DynamoDB.DocumentClient({ service: dynamodb });

app.use(express.json());
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', '*');
    next();
});

app.post('/addShopByUser', function (req, res) {
    const { email, shopId, shopName, shopDescription, shopAdditionalInfo } = req.body;
    if (!(email && shopId && shopName)) {
        res.status(400).json({ error: "Some items are not passed" })
    }
    const params = {
        TableName: "pasale",
        Item: {
            "pk": `#USER#${email}`,
            "sk": `#SHOP#${shopId}`,
            "shopName": shopName,
            "shopDescription": shopDescription
        }
    };

    docClient.put(params, (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: "Cannot add data. Please try again later. This might be a server side issue." });
        } else {
            res.status(200).json({ data: params.Item, message: `Shop : ${shopName} Added Succesfully.` });
        }
    });
});


// For local
// app.listen(3000);

// Going serverless ...
module.exports.addShopByUser = serverless(app);