const getResponseFormat = (payLoad) => {
    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(payLoad),
    }
    return response;
}

module.exports = { getResponseFormat }
