const express = require('express');
const { resolve } = require('path');
var router = express.Router();

const ddbScan = require('../public/javascripts/ddb-scan');

/* GET home page. */
router.get('/', function (req, res, next) {
  (async () => {
    const items = await ddbScan.scanAll();
    // res.render('index', { title: "hoge", items: JSON.stringify(items) });
    res.render('index', { title: "hoge", items: '[{"id":"2","name":"idだけのダミーデータ"},{"created_at":"2023-03-12","id":"1","name":"寝室ベッドのシーツ"},{"created_at":"2023-03-12T23:22:39.356Z","id":"0.8894772112652427","name":"hoge"},{"created_at":"2023-03-12T23:22:13.054Z","id":"0.2939987194852651","name":"hoge"}]' });
  })();
});



module.exports = router;
