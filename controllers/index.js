const mysql = require("mysql");
const mysqlConfig = require("../db/config.js");

const connection = mysql.createConnection(mysqlConfig);

const getPhysicians = cb => {
  const query = "SELECT * FROM physicians";
  connection.query(query, (err, res) => {
    if (err) {
      cb("Error executing query", err);
    } else {
      cb(null, res);
    }
  });
};

const getAppointments = (physId, cb) => {
  const query = `SELECT * FROM physicians INNER JOIN appointments ON physicians.id = appointments.id WHERE appointments.id = ${physId}`;
  connection.query(query, (err, res) => {
    if (err) {
      cb("Error in getting appointments from db", err);
    } else {
      cb(null, res);
    }
  });
};

module.exports = {
  getPhysicians,
  getAppointments
};
