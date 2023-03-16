const express = require('express');
const { resolve } = require('path');
var router = express.Router();

const ddbScan = require('../public/javascripts/ddb-scan');

/* GET home page. */
router.get('/', function (req, res, next) {
  (async () => {
    const items = await ddbScan.scanAll();
    console.debug("--------------------------------------");
    console.debug(items);
    console.debug("--------------------------------------");

    res.render('index', { title: "hoge", data: items });
  })();

});



module.exports = router;
