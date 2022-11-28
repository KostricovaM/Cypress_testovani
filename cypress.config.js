const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/*.js',
  },
});
