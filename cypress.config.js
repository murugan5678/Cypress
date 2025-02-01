const { defineConfig } = require('cypress');
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  projectId: '1nwin1',

  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js', // Updated to support subdirectories
    downloadsFolder: 'cypress/downloads',
    screenshotOnRunFailure: true,
    video: true,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      charts: true
    },
    
    setupNodeEvents(on, config) {
      // Register the downloadFile task
      on('task', { downloadFile });
      require('cypress-mochawesome-reporter/plugin')(on);

      // Debugging logs
      console.log('Spec Pattern:', config.specPattern);
      console.log('Project Root:', config.projectRoot);
      
      return config;
    },
  },
});
