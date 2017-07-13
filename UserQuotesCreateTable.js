var AWS = require("aws-sdk");
var https = require('https');
var agent = new https.Agent({
   maxSockets: 25
});

AWS.config.update({
  region: "us-east-2",
  endpoint: "http://localhost:8000"
});

var dynamodb = new AWS.DynamoDB();

var params = {
    TableName : "User-Quotes",
    KeySchema: [
        { AttributeName: "content", KeyType: "HASH"},  //Partition key
        { AttributeName: "author", KeyType: "RANGE" }  //Sort key
    ],
    AttributeDefinitions: [
        { AttributeName: "content", AttributeType: "S" },
        { AttributeName: "author", AttributeType: "S" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};

dynamodb.createTable(params, function(err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});
