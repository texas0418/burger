// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: "zj2x67aktl2o6q2n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "qmpapy93ppmi4rvf",
  password: "k5ddponafedjfh7y",
  database: "pf2ytyrascriyq4t"
});
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
