/* eslint-disable no-undef */
module.exports = {
  preset: "jest-puppeteer",
  globals: {
    URL: "http://localhost:8080"
  },
  testMatch: [
    "./src/tests/**.test.js"
  ],
  verbose: true
};