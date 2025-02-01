import 'cypress-drag-drop';
const mysql = require('mysql');

function queryTestDb(query, config) {
  const connection = mysql.createConnection(config.env.db);

  connection.connect(err => {
    if (err) {
      console.error('Error connecting to the database:', err.stack);
      return;
    }
    console.log('Connected to the database as id ' + connection.threadId);
  });

  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        connection.end(err => {
          if (err) {
            console.error('Error closing the connection:', err);
          } else {
            console.log('Connection closed.');
          }
        });
        resolve(results);
      }
    });
  });
}

module.exports = (on, config) => {
  // Register custom task to execute SQL queries
  on('task', {
    queryDb: query => {
      return queryTestDb(query, config);
    },
  });
};
