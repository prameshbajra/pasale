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
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.post('/addItemToShop', (req, res) => {
    const { itemId, itemName, shopId, price, quantity, itemDescription } = req.body;
    if (!(itemId && itemName && shopId && price && quantity)) {
        res.status(400).json({ error: "Some items are not passed" })
    }
    const params = {
        TableName: "pasale",
        Item: {
            "pk": `#SHOP#${shopId}`,
            "sk": `#ITEM#${itemId}`,
            "itemName": itemName,
            "itemDescription": itemDescription,
            "price": price,
            "quantity": quantity
        }
    };

    docClient.put(params, (err, data) => {
        if (err) {
            console.log(err);
            res.status(200).json({ message: "Cannot add data. Problems present." })
        } else {
            console.log(data);
            res.status(200).json({ message: "Added Succesfully." })
        }
    });
});


// For local
// app.listen(3000);

// Going serverless ...
module.exports.addItemToShop = serverless(app);