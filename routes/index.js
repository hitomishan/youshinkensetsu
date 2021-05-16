var express = require('express');
var router = express.Router();
const path = require("path")
const app = express()


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(process.env)
  res.sendFile(path.resolve(__dirname, '../', 'views', "top.html")); //静的ファイルを返す
});

module.exports = router;