const express = require('express');
const { resolve } = require('path');
var router = express.Router();

const ddbScan = require('../public/javascripts/ddb-scan');

/* GET home page. */
router.get('/', function (req, res, next) {
  // console.log(`env=[${process.env.AWS_ACCESS_KEY_ID}]`);
  // console.log(`env=[${process.env.AWS_SECRET_ACCESS_KEY}]`);

  // const dotenv = require('dotenv').config();
  // const AWS = require('aws-sdk');
  // AWS.config.update({ region: 'ap-northeast-1' });
  // const documentClient = new AWS.DynamoDB.DocumentClient();

  // const scanAll = async () => {
  //   let params = {
  //     TableName: 'washify-data',
  //   }
  //   let items = []

  //   const scan = async () => {
  //     console.log('execute scan')
  //     console.log(params)
  //     const result = await documentClient.scan(params).promise()
  //     items.push(...result.Items)

  //     if (result.LastEvaluatedKey) {
  //       params.ExclusiveStartKey = result.LastEvaluatedKey
  //       await scan()
  //     }
  //   }

  //   try {
  //     await scan()
  //     return items
  //   } catch (err) {
  //     console.error(`[Error]: ${JSON.stringify(err)}`)
  //     return err
  //   }
  // }

  (async () => {
    // const items = await scanAll()
    const items = await ddbScan.scanAll();
    console.debug("--------------------------------------");
    console.debug(items);
    console.debug("--------------------------------------");

    res.render('index', { title: "hoge", data: items });
  })();

});



module.exports = router;
