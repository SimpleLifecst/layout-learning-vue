const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const { secretKey } = require("../utils/constant");

router.post('/login', function(req, res) {
  const sql = "SELECT * FROM users WHERE username=?";

  req.db.query(sql, req.body.username, (err, result) => {

    if(result.length && req.body.password === result[0].password) {

      const userinfo = {
        id: result[0].id,
        username: result[0].username
      }

      const token = jwt.sign(userinfo, secretKey, { expiresIn: '600s' })

      return res.send({
        status: 200,
        message: "登陆成功",
        token: token
      })
    }

    return res.send({
      status: 403,
      message: "用户名信息不正确，请重新登陆"
    })
  })
});

module.exports = router;
