"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var express = require('express');
const { resolve } = require('path');
const router = express.Router();
const ddbScan = require('../public/javascripts/ddb-scan');
/* GET home page. */
router.get('/', function (req, res, next) {
    (() => __awaiter(this, void 0, void 0, function* () {
        const items = yield ddbScan.scanAll();
        // res.render('index', { title: "hoge", items: JSON.stringify(items) });
        res.render('index', { title: "hoge", items: '[{"id":"2","name":"idだけのダミーデータ"},{"created_at":"2023-03-12","id":"1","name":"寝室ベッドのシーツ"},{"created_at":"2023-03-12T23:22:39.356Z","id":"0.8894772112652427","name":"hoge"},{"created_at":"2023-03-12T23:22:13.054Z","id":"0.2939987194852651","name":"hoge"}]' });
    }))();
});
module.exports = router;
