const express = require('express');
const app = express();
const expressJwt = require("express-jwt");
const { secretKey } = require("./utils/constant");
const mysql = require("mysql");

const db = mysql.createPool({
  host: "127.0.0.1",
  user: "admin",
  password: "admin123",
  database: "localmysql"
});

app.use((req, res, next) => {
  req.db = db;
  next();
})

app.use(expressJwt({ secret: secretKey }).unless({ path: [/^\/user\//] }))

// 引入路由模块
const qiniu = require('./routes/qiniu');
const usersRouter = require('./routes/user');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/user', usersRouter);
app.use('/user', qiniu);


// error handler
app.use((err, req, res, next) => {
  // 鉴权失败错误
  if(err.name === "UnauthorizedError") {
    return res.send({
      status: 401,
      message: "无权限访问，登陆过期"
    })
  }

  // 其它原因错误
  res.send({ status: 500, message: "服务器内部错误", errorInfo: err})
})

app.listen(9090, () => {
  console.log("Serve Opening http://127.0.0.1:9090")
})


