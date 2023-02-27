module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern: '**/homepage.cy.js',
    //pageLoadTimeout: 50000, // or any value you want to set in milliseconds
    "chromeWebSecurity": false,
    "baseUrl": "https://www.saucedemo.com"
  },
};
