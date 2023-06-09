const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      return config;
    },
    video: false,
    chromeWebSecurity: false,
    viewportHeight: 834,
    viewportWidth: 1226
  },
});
