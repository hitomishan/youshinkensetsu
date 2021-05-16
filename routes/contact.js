const path = require("path")
var express = require('express');
var router = express.Router();

const sendContactMail = require("../src/mailer/contact")

/* GET users listing. */
router.post('/', function(req, res, next) {
  const reqBody = req.body
  sendContactMail(reqBody)
  res.redirect(req.baseUrl + "/thanks")
});

router.get('/thanks', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '../', "views", 'thanks.html'));
});

module.exports = router;
