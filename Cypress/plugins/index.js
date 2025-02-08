import 'cypress-drag-drop';
const mysql = require('mysql');
const xlsx = require('xlsx');
const path = require('path');

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
  // Register task for database queries
  on('task', {
    queryDb: query => queryTestDb(query, config),
  });

  // Register task for reading Excel files
  on('task', {
    readExcel({ filePath, sheetName }) {
      const absolutePath = path.resolve(filePath);
      const workbook = xlsx.readFile(absolutePath);
      const sheet = workbook.Sheets[sheetName];
      const jsonData = xlsx.utils.sheet_to_json(sheet);
      return jsonData; // Return the Excel data as JSON
    },
  });
};
