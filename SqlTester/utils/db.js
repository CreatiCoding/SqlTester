const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "13.209.21.34",
  user: "kwseproject",
  password: "1q2w3e4r",
  database: "onlineshop",
  charset: "utf8_general_ci"
});

const self = {
  pool: info => {
    return mysql.createPool({
      connectionLimit: 10,
      host: info.ip,
      user: info.user,
      password: info.pw,
      database: info.db,
      charset: "utf8_general_ci"
    });
  },
  exec: (sql, info) => {
    return new Promise((resolve, reject) => {
      self.pool(info).query(sql, function(error, results, fields) {
        if (error) reject(error);
        resolve(results);
      });
    });
  }
};

module.exports = self;
