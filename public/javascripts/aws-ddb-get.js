// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set the region 
AWS.config.update({ region: 'ap-northeast-1' });

// Create the DynamoDB service object
const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

const getParam = {
  TableName: 'washify-data',
  Key: {
    'id': { S: '1' }
  }
  //   ProjectionExpression: 'id'
};

// primary key(id)で絞る場合はgetItem
ddb.getItem(getParam, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Item);
  }
});

// 全件取得はscan
const scanParam = {
  TableName: 'washify-data'
}
ddb.scan(scanParam, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Items);
  }
});