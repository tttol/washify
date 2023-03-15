const dotenv = require('dotenv').config();
const AWS = require('aws-sdk');
AWS.config.update({ region: 'ap-northeast-1' });

// Create the DynamoDB service object
const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

module.exports = {
  selectByPrimaryKey: (id) => {
    const getParam = {
      TableName: 'washify-data',
      Key: {
        'id': { S: id }
      }
    };

    // primary key(id)で絞る場合はgetItem
    return ddb.getItem(getParam, function (err, data) {
      if (err) {
        console.log("Error", err);
        // return err.statusCode;
        return;
      }
      // console.log("Success", data.Item);
      // return data.Item;
    });
  }
}