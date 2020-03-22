const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
      restart: false
    }
  },
  include: {
    'tdmvcPage': './pages/tdmvcPage.js',
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-test-task',
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}