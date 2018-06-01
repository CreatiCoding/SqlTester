var express = require("express");
var router = express.Router();
var db = require("../utils/db");

/* GET api listing. */
router.get("/", function(req, res, next) {
  res.send("It is api page");
});

/* GET test listing. */
// select * from user;
// insert into user values('test','test','1234',now(),'M','test','0100','wqde3',now());
router.post("/sqlTest", function(req, res, next) {
  var sql = req.body.sql;
  var info = {
    ip: req.body["info[ip]"],
    user: req.body["info[user]"],
    pw: req.body["info[pw]"],
    db: req.body["info[db]"]
  };
  db
    .exec(sql, info)
    .then(r => {
      res.json(r);
    })
    .catch(e => {
      res.json(e);
    });
});

module.exports = router;
