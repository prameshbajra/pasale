const serverless = require('serverless-http');
const express = require('express');
const app = express();

const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({ region: 'ap-south-1' });
const docClient = new AWS.DynamoDB.DocumentClient({ service: dynamodb });

app.use(express.json());

app.post('/addShopByUser', function (req, res) {
    const { email, shopId, shopName, shopDescription, shopAdditionalInfo } = req.body;
    if (!(email && shopId && shopName)) {
        res.status(400).json({ error: "Some items are not passed" })
    }
    var params = {
        TableName: "pasale",
        Item: {
            "pk": `#USER#${email}`,
            "sk": `#SHOP#${shopId}`,
            "shopName": shopName,
            "shopDescription": shopDescription,
            "shopAdditionalInfo": shopAdditionalInfo
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
module.exports.addItemToDB = serverless(app);