'use strict';

const AWS = require("aws-sdk");
const COGNITO = new AWS.CognitoIdentityServiceProvider();
const USER_POOL_ID = process.env.COGNITO_USER_POOL_ID

module.exports.handler = async (event) => {
    try {
        const newUserCreate = await COGNITO.adminCreateUser({
            Username: "pe.messh@gmail.com",
            UserPoolId: USER_POOL_ID,
            UserAttributes: [
                {
                    Name: "email",
                    Value: "pe.messh@gmail.com"
                }
            ]
        }).promise().then(async data => {
            console.log("************* Data from promise resolve: ", data);
        }).catch(err => {
            console.log("************ Error from promise resolve: ", err);
        });
        console.log("------------------------- SUCCESS ----------------------------");
        console.log(newUserCreate);
    } catch (error) {
        console.log("------------------------- ERROR ------------------------------");
        console.log(error)
    }
    return {
        statusCode: 200,
        body: JSON.stringify({ "Message": "DONE" }),
    };
};
