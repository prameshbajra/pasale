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

app.post('/fetchShopDataForUser', async (req, res) => {
    const { email } = req.body;
    if (!(email)) {
        res.status(400).json({ error: "Need email." })
    }
    const shopParams = {
        TableName: "pasale",
        KeyConditionExpression: "#pk = :email",
        ExpressionAttributeNames: {
            "#pk": "pk"
        },
        ExpressionAttributeValues: {
            ":email": `#USER#${email}`
        }
    };
    const shopsForUser = [];
    const shopQueryResults = await docClient.query(shopParams).promise();
    const shops = shopQueryResults.Items;
    for (let shop of shops) {
        const itemParams = {
            TableName: "pasale",
            KeyConditionExpression: "#pk = :shopId",
            ExpressionAttributeNames: {
                "#pk": "pk"
            },
            ExpressionAttributeValues: {
                ":shopId": shop.sk
            }
        };
        const queryResult = await docClient.query(itemParams).promise();
        shopsForUser.push({ ...shop, items: queryResult.Items });
    }
    res.status(200).json({ shopsForUser });
});


// For local
// app.listen(3000);

// Going serverless ...
module.exports.fetchShopDataForUser = serverless(app);