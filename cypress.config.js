const { defineConfig } = require('cypress');
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
const xlsx = require('xlsx');
const path = require('path');
const mysql = require('mysql');

module.exports = defineConfig({
  projectId: '1nwin1',

  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js', // Supports subdirectories
    downloadsFolder: 'cypress/downloads',
    screenshotOnRunFailure: true,
    video: true,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      charts: true,
    },

    setupNodeEvents(on, config) {
      // ✅ Register downloadFile task
      on('task', { downloadFile });

      // ✅ Register readExcel task
      on('task', {
        readExcel({ filePath, sheetName }) {
          const absolutePath = path.resolve(filePath); // Resolve full path to the file
          const workbook = xlsx.readFile(absolutePath); // Read the workbook
          const sheet = workbook.Sheets[sheetName]; // Get the specified sheet
          const jsonData = xlsx.utils.sheet_to_json(sheet); // Convert sheet data to JSON
          return jsonData; // Return the JSON data
        },
      });

      // ✅ Register queryDb task
      on('task', {
        queryDb: (query) => {
          const connection = mysql.createConnection(config.env.db); // Use DB config
          return new Promise((resolve, reject) => {
            connection.connect();
            connection.query(query, (error, results) => {
              if (error) reject(error);
              else resolve(results);
              connection.end();
            });
          });
        },
      });

      // ✅ Integrate cypress-mochawesome-reporter plugin
      require('cypress-mochawesome-reporter/plugin')(on);

      // Debugging logs
      console.log('Spec Pattern:', config.specPattern);
      console.log('Project Root:', config.projectRoot);

      return config;
    },
  },

  env: {
    db: {
      host: 'localhost',
      user: 'root',
      password: 'yourpassword',
      database: 'yourdatabase',
    },
  },
});
