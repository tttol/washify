const dotenv = require('dotenv').config();
const { rejects } = require('assert');
// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
const { resolve } = require('path');
// Set the region 
AWS.config.update({ region: 'ap-northeast-1' });

// Create the DynamoDB service object
const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

module.exports = {
  selectAll: () => {
    // 全件取得はscan
    const scanParam = {
      TableName: 'washify-data'
    }

    const items = [];
    // ddb.scan(scanParam, function (err, data) {
    //   if (err) {
    //     console.log("Error", err);
    //   } else {
    //     console.log("Success", data.Items);
    //     items.push(...data.Items);
    //   }
    // });
    ddb.scan(scanParam).promise().then((result) => {
      console.log(`result=${result}`);
      items.push(result.Items);
    });

    return items;
  }
}
