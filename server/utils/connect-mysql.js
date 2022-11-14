const mysql = require("mysql");

class Mysql {
  connect() {
    const db = mysql.createPool({
      host: "127.0.0.1",
      user: "root",
      password: "root",
      database: "root"
    });

    return db;
  }
}

module.exports = Mysql
